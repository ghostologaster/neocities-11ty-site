---
title: Shift-pairs
description: Talking about an orthographically special kind of words in English
date: 2024-02-22
post: yes
comments: no
latex: yes
draft: false
tags: 
 - wordplay
---

> Computer, what's the point in this?<footer>—Neil Halstead, *Digging Shelters*, from *Palindrome Hunches* (2012)</footer> {.epigraph}

I was looking through some wordplay books and one class of orthographic items caught my eye: pairs of words that are [Caesar ciphertexts](https://en.wikipedia.org/wiki/Caesar_cipher){target="_blank"} of each other. Some examples include *cheer*&ndash;*jolly* (7 steps), *fusion*&ndash;*layout* (6 steps), and *abjurer*&ndash;*nowhere* (13 steps). See how *fusion* changes to *layout* after shifting 6 steps "to the right" in the alphabet:

<pre>
&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;6
<b>F</b> > G > H > I > J > K > <b>L</b>
<b>U</b> > V > W > X > Y > Z > <b>A</b>
<b>S</b> > T > U > V > W > X > <b>Y</b>
<b>I</b> > J > K > L > M > N > <b>O</b>
<b>O</b> > P > Q > R > S > T > <b>U</b>
<b>N</b> > O > P > Q > R > S > <b>T</b>
</pre>

[Pp. 173&ndash;176 of A. Ross Eckler Jr.'s book *Making the alphabet dance*](https://archive.org/details/makingalphabetda0000eckl_h5s3/page/172/mode/2up){target="_blank"}{.internet-archive} makes a good introduction of this kind of word pairs, and terms them <dfn>shift-pairs</dfn>. 

I decided to try to look for shift-pairs myself with the help of a computer. The first step is to find a big wordlist; I settled on [this list that I found on GitHub](https://github.com/dwyl/english-words/blob/master/words_dictionary.json){target="_blank"} with "over 466k English words", which is nicely formatted in `.json` and all lowercase ASCII letters (\* after I removed the hyphens in `"jean-christophe"` and `"jean-pierre"`, that is). As for the actual coding, I don't know much beyond some basic Python; luckily this doesn't really need more than basic Python, but I still struggled quite a bit. My first attempt is the following code (the Caesar cipher function `caesar()` is a modification of the one given in [this Stack Overflow answer](https://stackoverflow.com/a/15859571){target="_blank"}): 

```python
from string import ascii_lowercase as lc
from itertools import combinations as combs
import json


def caesar(n, s):
    shift = str.maketrans(lc, lc[n:] + lc[:n])
    return s.translate(shift)


dictionary = list(json.load(open("words_dictionary.json")).keys())
shift_pairs = []

for i in range(2, len(max(dictionary, key=len)) + 1):
    sub_dictionary = [x for x in dictionary if len(x) == i]
    word_pairs = combs(sub_dictionary, 2)
    for word_pair in word_pairs:
        for j in range(1, 26):
            if caesar(j, word_pair[0]) == word_pair[1]:
                shift_pairs.append(tuple((word_pair, j, i)))
                print(tuple((word_pair, j, i)))

with open("shift_pairs.json", "w") as file:
    json.dump(shift_pairs, file)
```

By running the code above I'm asking the computer to pair together words of the same length, and to Caesar-shift the first word in every pair 25 times to see if any of the shift results matches the second word in that pair. It works, but is excruciatingly slow. After much head-scratching this is the version 2 I came up with:

```python
from itertools import combinations as combs
from b26 import decode
import json

dictionary = list(json.load(open("words_dictionary.json")).keys())
shift_pairs = []


def caesar(s1, s2):
    for i in range(1, len(s1)):
        if (decode(s2[i]) - decode(s1[i])) % 26 != (decode(s2[0]) - decode(s1[0])) % 26:
            return False
    return (decode(s2[0]) - decode(s1[0])) % 26


for i in range(2, len(max(dictionary, key=len)) + 1):
    word_pairs = combs((x for x in dictionary if len(x) == i), 2)
    for word_pair in word_pairs:
        if caesar(word_pair[0], word_pair[1]):
            shift_pairs.append(tuple((word_pair, caesar(word_pair[0], word_pair[1]), i)))
            print(tuple((word_pair, caesar(word_pair[0], word_pair[1]), i)))

with open("shift_pairs.json", "w") as file:
    json.dump(shift_pairs, file)
```

This time the function `caesar()` instead checks if a letter-string `s1` is "Caesar-reachable" to another `s2`, i.e. if the result of applying the Caesar cipher to `s1` can possibly be `s2`. If we define $\mu(a) = 0, \mu(b) = 1, \cdots, \mu(z) = 25$, then, for a string $X_1X_2\cdots X_n$ where $X_i \in \{a, b, \cdots, z\}$ for all $i = 1, \cdots, n$, another string $Y_1Y_2\cdots Y_n$ is Caesar-reachable from $X_1X_2\cdots X_n$ iff $\mu(Y_1) - \mu(X_1) \equiv \mu(Y_2) - \mu(X_2) \equiv \cdots \equiv \mu(Y_n) - \mu(X_n) \pmod{26}$. The new `caesar()` function basically checks that condition: if any value from $\mu(Y_2) - \mu(X_2)$ to $\mu(Y_n) - \mu(X_n)$ is found not equivalent to $\mu(Y_1) - \mu(X_1)$ modulo $26$, the function returns `False`; otherwise it returns $\left(\mu(Y_1) - \mu(X_1)\right) \mathbin{\mathtt{mod}} 26$ (i.e. the "steps" taken). 

This is much faster, but it still took more than 5 hours in total before it worked through the whole list. I can't figure out if and how this could be made to run faster, but [the output file `shift_pairs.json`](/file/shift_pairs.json){target="_blank"} seems right, so I'll count this as a success.

At first glance there are lots of apparent "non-words" especially among the two- and three-letter pairs, which is to be expected since the wordlist is not made for lexicographical purposes, so the definition of a "word" is more relaxed in that regard. Looking past the noisy bits, it did catch all the commonly cited shift-pairs, e.g. `[["irk", "vex"], 13, 3]` (read "*irk*&ndash;*vex*, 13 steps, length 3"), `[["yes", "oui"], 16, 3]`, `[["cheer", "jolly"], 7, 5]`, `[["fusion", "layout"], 6, 6]`, `[["steeds", "tuffet"], 1, 6]]`, `[["abjurer", "nowhere"], 13, 7]`. Since *NY*, *Oz*, *HAL* and *IBM* are all represented in the wordlist I used, the shift-pairs `[["ny", "oz"], 1, 2]` and `[["hal", "ibm"], 1, 3]` are both spotted by the computer as well—those are the pairs, by the way, that got mentioned in [Martin Gardner's *Mathematical Games* column in the February 1972 issue of the *Scientific American* magazine](https://sci-hub.ru/10.1038/scientificamerican0272-100){target="_blank"}{.downloadable}, through the mouth of the fictional numerologist spoof [Dr. Irving Joshua Matrix](https://en.wikipedia.org/wiki/Irving_Joshua_Matrix){target="_blank"}:

> "I was not surprised," Dr. Matrix went on, "to read in one of your columns about Arthur C. Clarke's denial that he intended [HAL]{.sc}{.translower} to stand for [IBM]{.sc}{.translower}." \[[HAL]{.sc}{.translower} was the name of the spaceship computer in the film *2001: A Space Odyssey*. If each letter of [HAL]{.sc}{.translower} is moved forward one letter in the alphabet, it becomes [IBM]{.sc}{.translower}. This curious fact had been disclosed by David B. Eisendrath, Jr., in his lively column in *Photo Methods for Industry*, October, 1970.\]
>
> Dr. Matrix continued: "Unintended correlations of this sort are common place. Mary Scott, a member of the International Wizard of Oz Club, recently observed that a one-step word shift of N.Y., the home state of L. Frank Baum, produces OZ."
>
>"By Glinda, so it does!\["\]

> [(sidenote)]{.bl-h} Later [the Dr. Matrix stories were revised and compiled into a book](https://archive.org/details/the-magical-numbers-of-dr.-matrix/page/136/mode/2up){target="_blank"}{.internet-archive}, in which Gardner added: "The earliest reference I could find on this astonishing word shift \[from HAL to IBM\] is in the periodical *IBM in Britain*, no. 47 (August 1968, p. 3), where its discovery is credited to John Roycroft, of London. In spite of the fact that the IBM logo is clearly visible on display terminals in 2001, Clarke assures me that the word shift is entirely coincidental, and came as a great surprise to him."

Eckler's book only gives four 7-letter pairs (the dictionary he checked against was the unabridged Merriam-Webster), which my results haven't been able to contradict: the four are `[["abjurer", "nowhere"], 13, 7]`, `[["bumpily", "unfiber"], 19, 7]`, `[["chechen", "purpura"], 13, 7]` and `[["primero", "sulphur"], 3, 7]]`. They are the longest pairs that my program managed to find. Eckler mentioned one 8-letter shift-pair, *wiliwili*&ndash;*corocoro* (6 steps), which my program did not catch since `"corocoro"` is not in the wordlist I used.

Other fun ones I spotted: `[["air", "mud"], 12, 3]`, `[["ten", "ufo"], 1, 3]`, `[["curl", "wolf"], 20, 4]`, `[["damp", "road"], 14, 4]`, `[["fang", "jerk"], 4, 4]`, `[["goon", "weed"], 16, 4]`, `[["hymn", "nest"], 6, 4]`, `[["inks", "jolt"], 1, 4]`, `[["adsum", "orgia"], 14, 5]`, `[["ahint", "bijou"], 1, 5]`, `[["arena", "river"], 17, 5]`, `[["bunny", "sleep"], 17, 5]`, `[["pecan", "tiger"], 4, 5]`, `[["manful", "thumbs"], 7, 6]`. Some verb&ndash;verb pairs feel dramatic, even cartoonishly comical: `[["bury", "slip"], 17, 4]`, `[["hide", "stop"], 11, 4]`. Some of these involves names: *Leslie* is 6 steps behind the word *unburn*; *Benjy* is one step ahead of *admix*; *Ana* and *Bob* are one step away.

> [(sidenote)]{.bl-h} By manipulating the array in `shift-pairs.json` one should easily obtain all <dfn>shift-triples</dfn> (e.g. *add* \[1 steps →\] *bee* \[7 steps →\] *ill*) and <dfn>shift-quadruples</dfn> (the only one mentioned in Eckler's book is *God* \[8 steps →\] *owl* \[4 steps →\] *sap* \[4 steps →\] *wet*) in the wordlist. I didn't spend a lot of time with this, but by sheer chance I almost immediately spotted *gig* (6 steps →) *mom* (6 steps →) *sus* (6 steps →) *yay* after I generated a list of quadruples, which is really funny, I think (← says the part of me that is like. six years old. look there is a *sus* there. giggles)

Considering its sources and purposes, despite its size, the 466k wordlist we've been using certainly still misses some words, especially archaic and esoteric ones. What if we want to check those ones as well? OED (*Oxford English Dictionary*) seems like the natural next place to look. I don't know how you can get a list of all word forms (or at least lemmas) in the latest online version of OED; [there is an API in development](https://languages.oup.com/research/oed-researcher-api/){target="_blank"} but it doesn't seem to be open to the general public. Very luckily [an electronic copy of the older OED2 is available on the Internet Archive](https://archive.org/details/oed-v4){target="_blank"}{.internet-archive}, and luckilier still someone has written on what's going on with the files in it: thanks to Michaël Meyer's great blogposts [*Unraveling the Digital Edition of the Oxford English Dictionary*](https://michaelmeyer.fr/oed-unraveling-1){target="_blank"} I managed to locate the relevant file, `ky.t` ("contain\[ing\] the bare headwords, probably for string matching purposes"), which can be decoded and turned into a Python list of all bare OED headword forms (ASCII alphanumerical, all lowercase) by simply doing: 

```python
import zlib

data = zlib.decompress(open('ky.t', 'rb').read()).decode()
data = sorted(set(data.strip('#').split("#")))
    #sorted and orthographic duplicates removed
```

After removing forms containing non-alphabetic characters (e.g. `mp3`), we can run the code used before through this list as well. This time the execution took just below 3 hours in total. The output file is here: [`shift_pairs_OED2.json`](/file/shift_pairs_OED2.json){target="_blank"}. 

Since non-lemma forms such as regular plurals are not included, pairs like *steeds*&ndash;*tuffet* or *manful*&ndash;*thumbs* are not going to be detected, which is a shame. The longest pairs the program found this time are `[["abjurer", "nowhere"], 13, 7]`, `[["chechen", "purpura"], 13, 7]`, `[["gibbous", "sunnage"], 12, 7]`, `[["primero", "sulphur"], 3, 7]`, and `[["corocoro", "wiliwili"], 20, 8]]`. It managed to find the pair *corocoro*&ndash;*wiliwili*, but not more, and nothing longer. As for the 7-letter pairs, it missed *bumpily*&ndash;*unfiber* (neither is an OED2 headword), but found a previously unknown pair, *gibbous*&ndash;*sunnage*. 

> [(sidenote)]{.bl-h} *Sunnage*, apparently meaning "sunniness", is a *hapax* [Cotgrave](https://www.pbm.com/~lindahl/cotgrave/){target="_blank"}-ism (no other attestations given in OED2, and only one more in OED Online from Florio's [*Vocabolario Italiano & Inglese*]{lang="it"}, 1659), used to gloss (and indeed itself a direct calque of) an otherwise poorly attested Middle French item [*solaige*]{lang="frm"} < straightforwardly [*sol-*]{lang="frm"} + [*-aige*, *-age*]{lang="frm"}: "[*Solaige*]{lang="frm"}: *m*. Sunnage, or Sunninesse; th'eleuation, aspect, force, or power of the Sunne; th'effects of Sunne-shine, vpon a place." ([link to page](https://www.pbm.com/~lindahl/cotgrave/872.html){target="_blank"})

Finally, I also ran the code on the [Oxford 5000](https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000){target="_blank"} wordlist (using source data from [here](https://github.com/winterdl/oxford-5000-vocabulary-audio-definition){target="_blank"}), to see how many pairs there are with only "really common" words. (This list is also limited to lemma forms.) The result is a list of only 55 pairs:

```json
[
  [["CD", "hi"], 5, 2], 
  [["CD", "no"], 11, 2], 
  [["ID", "to"], 11, 2], 
  [["ID", "up"], 12, 2], 
  [["IT", "do"], 21, 2], 
  [["OK", "so"], 4, 2], 
  [["ad", "be"], 1, 2], 
  [["ad", "or"], 14, 2], 
  [["as", "me"], 12, 2], 
  [["at", "oh"], 14, 2], 
  [["be", "or"], 13, 2], 
  [["by", "he"], 6, 2], 
  [["by", "if"], 7, 2], 
  [["do", "it"], 5, 2], 
  [["go", "we"], 16, 2], 
  [["he", "if"], 1, 2], 
  [["hi", "no"], 6, 2], 
  [["to", "up"], 1, 2], 
  [["DVD", "wow"], 19, 3], 
  [["add", "bee"], 1, 3], 
  [["add", "ill"], 8, 3], 
  [["air", "mud"], 12, 3], 
  [["app", "odd"], 14, 3], 
  [["arm", "rid"], 17, 3], 
  [["bar", "one"], 13, 3], 
  [["bee", "ill"], 7, 3], 
  [["bet", "fix"], 4, 3], 
  [["bin", "hot"], 6, 3], 
  [["box", "era"], 3, 3], 
  [["bus", "pig"], 14, 3], 
  [["cap", "get"], 4, 3], 
  [["cry", "tip"], 17, 3], 
  [["dip", "pub"], 12, 3], 
  [["dub", "rip"], 14, 3], 
  [["fur", "she"], 13, 3], 
  [["god", "wet"], 16, 3], 
  [["gym", "sky"], 12, 3], 
  [["her", "rob"], 10, 3], 
  [["him", "opt"], 7, 3], 
  [["job", "van"], 12, 3], 
  [["lap", "pet"], 4, 3], 
  [["law", "tie"], 8, 3], 
  [["log", "two"], 8, 3], 
  [["beef", "loop"], 10, 4], 
  [["bias", "task"], 18, 4], 
  [["bury", "slip"], 17, 4], 
  [["cold", "frog"], 3, 4], 
  [["dawn", "hear"], 4, 4], 
  [["deed", "noon"], 10, 4], 
  [["defy", "stun"], 15, 4], 
  [["folk", "iron"], 3, 4], 
  [["hide", "stop"], 11, 4], 
  [["meet", "wood"], 10, 4], 
  [["open", "stir"], 4, 4], 
  [["arena", "river"], 17, 5]
]
```
Some of these are really fun that I didn't spot in the two big lists: `[["job", "van"], 12, 3]`, `[["lap", "pet"], 4, 3]`, `[["defy", "stun"], 15, 4]`, etc. `[["open", "stir"], 4, 4]` reads like having canned soup for dinner.

That was fun! I'll probably go back to this some time in the future, presumably after I figure out a better algorithm, find a better wordlist, think of more stuff to do with this, read more about this anywhere, or any combination of the above. For now I have nothing more to say and this is the end of this post. I wish you a happy life. See you later.