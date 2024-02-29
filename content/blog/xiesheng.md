---
title: Phonological information in the Chinese writing system
description: On the phonological information encoded in the Chinese characters and how that is utilized in the reconstruction of Old Chinese initials
date: 2024-01-19
post: yes
comments: no
latex: no
draft: false
tags: 
 - old chinese
 - philology
---

## opening words

The insights in this post are neither in depth nor new; please see this as a study note of some sorts, attempting to organize my intermittent stray learnings on this topic back in 2023 into something more or less coherent. 

<span style="font-family:var(--monospace);">(Post last modified: 2024-02-25)</span>

## intro

The foundation of the current Old Chinese (OC) model is the philological interpretations of three major kinds of evidence: [the rhymes in *Shījīng*]{.sc}, a.k.a. the *Book of Odes*; [the Chinese characters]{.sc}, or more specifically a large body thereof that formed within the more-or-less correct time-frame; and finally, the documented [Middle Chinese (MC)]{.sc} system—how we managed to figure out Middle Chinese from the documents is a topic for another day. 

The first two kinds of data are materials from the OC period; the OC phonology we reconstruct should be able to explain their behaviours where relevant. They come with the obligatory caveat that A. neither of them was chronologically flat or socio-geographically uniform, and B. though they are roughly contemporaneous, they do not align perfectly in terms of chronology (general considerations for these points are discussed in e.g. [Sagart 1999 § 1.2.1](https://archive.org/details/rootsofoldchines0000saga/page/4), and point A as it pertains to the Chinese characters is discussed in [the sidenote below](#sidenote-ref1){id="sidenote-backref1"}). The third kind—the MC phonology—was a daughter of OC phonology, at least in broad strokes; the OC model must be reconcilable with it as well. At the core of every OC reconstruction is an attempt to reconcile this tripartite bundle of data phonologically. 

While the reconstruction of OC has been surely moving toward a consensus in terms of the general OC structure, details are revealed to be messy once under scrutiny. The primary reason for such messiness is that the data involved are systemically highly complex, often with great geographical and chronological uncertainties. This is especially true for Chinese characters. Unfortunately, since *Shījīng* rhyming provides little insights other than, well, rimes, the reconstruction of OC initials relies largely on the Chinese characters and the Middle Chinese records. This post will focus on that.

## xiéshēng

The majority of the Chinese characters are each composed of some sound-bearing (<dfn>phonetic</dfn>, <dfn>phonophoric</dfn>, among other terms) element and some meaning-distinguishing (<dfn>semantic</dfn>, <dfn>taxonomic</dfn>, among other terms) element (hereafter termed the <dfn>taxogram</dfn> following [Handel 2019](https://search.worldcat.org/title/1066186000)). As an example, [曉]{lang="zh-Hant"} \[Modern Standard Mandarin (pinyin) *xiǎo*, MC (Baxter's) *xewX*, "daybreak"\] is comprised of: 

* the phonetic [堯]{lang="zh-Hant"}, itself used to write the morpheme \[*yáo*, *ngew*, "lofty"\]; with the same phonetic element are [饒]{lang="zh-Hant"} \[*ráo*, *nyew*, "abundant"\], [撓]{lang="zh-Hant"} \[*náo*, *nraewX*, "to trouble"\]… 
* the taxonomic [日]{lang="zh-Hant"}, itself used to write the morpheme \[*rì*, *nyit*, "sun"\]; with the same taxogram are [暉]{lang="zh-Hant"} \[*huī*, *xjw+j*, "sunlight"\], [時]{lang="zh-Hant"} \[*shí*, *dzyi*, "time, season"\], [晏]{lang="zh-Hant"} \[*yàn*, *‘aenH*, "(of the weather) clear"\]…

The phonetic element is phonetically significant but semantically irrelevant, whereas the taxogram is semantically significant but phonetically irrelevant. I think of it this way: the phonetic element points to a pool of near-homophonous morphemes (recall that in Old Chinese almost all morphemes are monosyllabic), and the taxogram is essentially a classificatory label that offers additional semantic information needed to locate the intended morpheme in that pool.

Traditionally, the relationship among the members of one such pool of phonetic-element-sharing near-homophones is called <dfn>xiéshēng</dfn> [諧聲]{lang="zh-Hant"} (XS, literally "sound harmony"), and such pools are referred to as <dfn>XS series</dfn> (the term <dfn>phonetic series</dfn> is also common). We say there is <dfn>XS contact</dfn> between two OC or MC phonological entities (e.g. initials, rimes, etc.) if there exist two morphemes \[X\] and \[Y\], each with one of said entities, that can be written with the same phonetic element.

## XS and MC in tandem

The following table contains all phonologically distinct MC initials:

| labial | dental 1 | retroflex 1 | dental 2 | retroflex 2 | palatal | posterior ||
| :----: | :----: | :----: | :----: | :----: | :----: | :----: |
| *p*, [p]{.IPA} [幫]{lang="zh-Hant"} | *t*, [t]{.IPA} [端]{lang="zh-Hant"} | *tr*, [ʈ]{.IPA} [知]{lang="zh-Hant"} | *ts*, [t͡s]{.IPA} [精]{lang="zh-Hant"} | *tsr*, [ʈ͡ʂ]{.IPA} [莊]{lang="zh-Hant"} | *tsy*, [t͡ɕ]{.IPA} [章]{lang="zh-Hant"} | *k*, [k]{.IPA} [見]{lang="zh-Hant"} | *‘*, [ʔ]{.IPA} [影]{lang="zh-Hant"} |
| *ph*, [pʰ]{.IPA} [滂]{lang="zh-Hant"} | *th*, [tʰ]{.IPA} [透]{lang="zh-Hant"} | *trh*, [ʈʰ]{.IPA} [徹]{lang="zh-Hant"} | *tsh*, [t͡sʰ]{.IPA} [清]{lang="zh-Hant"} | *tsrh*, [ʈ͡ʂʰ]{.IPA} [初]{lang="zh-Hant"} | *tsyh*, [t͡ɕʰ]{.IPA} [昌]{lang="zh-Hant"} | *kh*, [kʰ]{.IPA} [溪]{lang="zh-Hant"} || 
| *b*, [b]{.IPA} [並]{lang="zh-Hant"} | *d*, [d]{.IPA} [定]{lang="zh-Hant"} | *dr*, [ɖ]{.IPA} [澄]{lang="zh-Hant"} | *dz*, [d͡z]{.IPA} [從]{lang="zh-Hant"} | *dzr*, [ɖ͡ʐ]{.IPA} [崇]{lang="zh-Hant"} | *dzy*, [d͡ʑ]{.IPA} [常]{lang="zh-Hant"} | *g*, [g]{.IPA} [群]{lang="zh-Hant"} ||
| *m*, [m]{.IPA} [明]{lang="zh-Hant"} | *n*, [n]{.IPA} [泥]{lang="zh-Hant"} | *nr*, [ɳ]{.IPA} [娘]{lang="zh-Hant"} |  |  | *ny*, [ɲ]{.IPA} [日]{lang="zh-Hant"} | *ng*, [ŋ]{.IPA} [疑]{lang="zh-Hant"} ||
|  |  |  | *s*, [s]{.IPA} [心]{lang="zh-Hant"} | *sr*, [ʂ]{.IPA} [生]{lang="zh-Hant"} | *sy*, [ɕ]{.IPA} [書]{lang="zh-Hant"} | *x*, [x]{.IPA} [曉]{lang="zh-Hant"} ||
|  |  |  | *z*, [z]{.IPA} [邪]{lang="zh-Hant"} | *zr*, [ʐ]{.IPA} [俟]{lang="zh-Hant"} | *zy*, [ʑ]{.IPA} [船]{lang="zh-Hant"} | *h*, [ɣ]{.IPA} [匣]{lang="zh-Hant"} ||
|  | *l*, [l]{.IPA} [來]{lang="zh-Hant"} |  |  |  | *y*, [j]{.IPA} [以]{lang="zh-Hant"} | *hj*, [w]{.IPA} [云]{lang="zh-Hant"} ||

The Chinese character in each cell is the traditional name for that initial. The traditional names differ slightly from the ones shown in [Baxter & Sagart (2014](https://search.worldcat.org/title/841206012): 15): they have [/dʑ/]{.IPA} [禪]{lang="zh-Hant"} and [/ʐ/]{.IPA} \[unnamed\] while I follow another tradition with [/dʑ/]{.IPA} [常]{lang="zh-Hant"} and [/ʐ/]{.IPA} [俟]{lang="zh-Hant"}. The first in each cell is Baxter's MC transcription, followed by the phonological value proposed by [Huang (1995](https://search.worldcat.org/title/34697412): 22&ndash;34, in Mandarin).

Since there was a large gap of time from OC to MC, at MC times the XS situation had become more opaque, and how one should interpret the MC reflection of XS as an OC phenomenon has invoked much debate, especially when it comes to the initials. I will explain one important example here with my understanding of the present model. Please forgive inevitable oversimplifications. 

### the becoming of OC coronal stops 

The MC initial stops \{ *t*, *th*, *d*, *tsy*, *tsyh*, *dzy*, *tr*, *trh*, *dr* \} behave as a tight class in XS: contact among them is ordinary and systematic, and in general, series primarily populated by these initials rarely also come into contact with any other initials (except that \{ *y*, *d*, *dr*, *sy*, *th*, *trh* \} form another significant class, which will be discussed later). A typical XS series of this kind is the one with the phonetic element [蜀]{lang="zh-Hant"}:

- \[*duwk*, "solitary"\], [獨]{lang="zh-Hant"}
- \[*draewk*, "muddy, not clear"\], [濁]{lang="zh-Hant"}
- \[*tsyowk*, "to join together"\], [屬]{lang="zh-Hant"}
- \[*tsyhowk*, "to ram (with horns)"\], [觸]{lang="zh-Hant"}
- \[*dzyowk*, "category, class"\], [屬]{lang="zh-Hant"}
- \[*drjek-drjowk*, "to walk about without advancing"\], [躑躅]{lang="zh-Hant"}

The character(s) following each morpheme is the one(s) usually employed for that morpheme in the received classical texts. More examples include the series with [卓]{lang="zh-Hant"}…

- \[*traewk*, "high, tall, elevated; great, excellent"\], [卓]{lang="zh-Hant"}, [倬]{lang="zh-Hant"}
- \[*trhaewk*, "distant"\], [逴]{lang="zh-Hant"}
- \[*dawH*, "to mourn; to be afraid, to be shaken"\], [悼]{lang="zh-Hant"}
- \[*tsyhjak*, "ample; graceful"\], [綽]{lang="zh-Hant"}

…the series with [真]{lang="zh-Hant"}…

- \[*ten*, "top of the head; top"\], [顛]{lang="zh-Hant"}
- \[*den*, "to fill"\], [填]{lang="zh-Hant"}
- \[*trinH*, "to repress"\], [鎮]{lang="zh-Hant"}
- \[*tsyin*, "true"\], [真]{lang="zh-Hant"}

…and so on. 

> [(sidenote)]{.bl-h} Note that the examples of XS I used in this post are all based on the "received" XS, i.e. XS reflected in the inherited Chinese script "of the classics" (Baxter 1992: 347). It is of course indefensible to use received XS indiscriminately as evidence, since the body of this system did not fully stabilize before Hàn times (see e.g. [Barnard 1978](https://archive.org/details/ancientchinastud0000unse/page/181), [Baxter 1991](https://benjamins.com/catalog/cilt.77.02bax), Sagart 1999 § 1.2.1 on some discussion on this); it can be unclear if a particular case of XS mapping could reflect pre-Qín habits, or if it was a late innovation against inertia. The style and structure of Chinese characters had also changed drastically from the pre-cleric to the cleric (*lìshū* [隸書]{lang="zh-Hant"}) and post-cleric scripts, enough so that some XS relations could be obfuscated in the received XS. When investigating received XS it's then necessary to single out late inventions wherever possible, and on top of that it's safer to only speak of significant tendencies, keeping a wary eye on XS behaviours that are statistically scarce and otherwise poorly corroborated. 
> 
> It's easy to see how the writing evidence from the dated excavated texts (e.g. that from the early-Zhōu bronze inscriptions or Warring-States writings on bamboo slips) has been crucial in clarifying, correcting and confirming our conclusions that had been previously drawn (or failed to be drawn) from received XS; Baxter and Sagart, as a wellknown example, have stressed this in their 2014 work. I cite only received XS examples in this post simply for convenience; as demonstrations they suffice. (`2024-02-14` addendum, further modified `2024-02-25`)
> 
> If you came from the link above, [click here to return](#sidenote-backref1). {id="sidenote-ref1"}

Though the MC values of these initials can be subdivided into three groups of distinct places of articulation \{ *t*, *th*, *d* \} (dental), \{ *tsy*, *tsyh*, *dzy* \} (alveopalatal) and \{ *tr*, *trh*, *dr* \} (retroflex), such substructure is not reflected in the XS behaviour; while some phonetic elements do appear to be specialized, the three groups come into XS contact with each other with no overall inhibition. The MC dental and retroflex affricates \{ *ts*, *tsh*, *dz*, *tsr*, *tsrh*, *dzr* \} form a similar XS class, with much analogical XS behaviour. As an example, observe the following series with phonetic element [且]{lang="zh-Hant"}:

- \[*tsuX*, "ancestor"\], [祖]{lang="zh-Hant"}
- \[*dzu*, "go to"\], [徂]{lang="zh-Hant"}
- \[*tsrae*, "Chinese hawberry (*Crataegus pinnatifida*)"\], [柤]{lang="zh-Hant"}, [樝]{lang="zh-Hant"}, [楂]{lang="zh-Hant"}
- \[*tsjo*, utterance-final article\], [且]{lang="zh-Hant"}
- \[*dzjoX*, "to stop"\] [沮]{lang="zh-Hant"}
- \[*tsrjoX*, "to stop"\], [阻]{lang="zh-Hant"}
-  \[*dzrjoH*, "to aid"\], [助]{lang="zh-Hant"}

A statistical investigation of XS among *Guǎngyùn* items is found in [msoeg (2020), on zhihu.com, in Mandarin](https://zhuanlan.zhihu.com/p/139359388). (Incidentally, I'm not aware of any academically published investigation of this kind, though that could be my own insufficient or negligent reading; there *has* to be one already, right?) These observations raise suspicion that the MC three-way place distinction in such series is secondary. 

The suspicion grows once we take into account the distribution of these MC initials. MC finals are traditionally arranged into four <dfn>divisions</dfn>; here I refrain from discussing their natures, only noting that, in Baxter's transcription, MC division-III finals are marked by a medial yod *-j-* (we now have good reason to conclude that this yod is secondary) or *-i-* as the main vowel. Division-II finals have the vowels *-ae-* or *-ea-*, and division-IVs have *-e-*. The rest is division-I. MC initial coronal stops show an incredibly unbalanced pattern in relation to division of finals (some example items below are taken from [Jacques 2006](https://www.academia.edu/2261552/Introduction_to_Chinese_historical_phonology){.downloadable}: 27 where the same discussion is offered; also see [Baxter 1992](https://search.worldcat.org/title/25628474): 49&ndash;55):

| | dI | dIV | dII | dIII |
| ---: | :--- | :--- | :--- | :---- |
| *T*: *t*, *th*, *d* | [棠]{lang="zh-Hant"} *dang*  | [亭]{lang="zh-Hant"} *deng* | `x` | `x` |
| *Tr*: *tr*, *trh*, *dr* | `x` | `x`  | [棖]{lang="zh-Hant"} *draeng* | [長]{lang="zh-Hant"} *drjang* |
| *Tsy*: *tsy*, *tsyh*, *dzy* |  `x` | `x` | `x` | [常]{lang="zh-Hant"} *dzyang* |
| *Ts*: *ts*, *tsh*, *dz* | [藏]{lang="zh-Hant"} *dzang* | [清]{lang="zh-Hant"} *tsheng* | `x` |  [將]{lang="zh-Hant"} *tsjang* |
| *Tsr*: *tsr*, *tshr*, *dzr* | `x` | `x` | [傖]{lang="zh-Hant"} *dzraeng*  |  [莊]{lang="zh-Hant"} *tsrjang* |

The systematic gaps are striking. With non-division-III finals, *T, Ts* and *Tr, Tsr* are completely complementary: *T, Ts* never combine with division-II finals, ^[The only exceptional items are <span lang="zh-Hant">打</span> \[*taengX* besides *tengX*, "to hit"\] and <span lang="zh-Hant">地</span> [*dijH*, "ground"].] and *Tr, Tsr* always combine with division-II finals. Additionally, the MC initial palatal affricates (the *Tsy*-type) only combine with division-III finals (for this reason in Baxter's transcription the division-III yod is omitted after them).

This distribution is not entirely straightforward to interpret historically. There has been a long history of scholarship leading us to the present conclusion, which is as follows: the retroflexion in *Tr* and *Tsr* is secondary; as is the palatalization of the *Tsy* group. A syllable feature (which we will call "\[&plus;*ρ*\]" at this point, *r* for retroflex) gave rise to the initial retroflexion, as well as the division-II vowel qualities. A palatalizing syllable feature ^[Or rather, as is actually the case, the absence of a palatalization-blocking feature; see below.] ("\[&plus;*π*\]", *p* for palatalizing) gave rise to both the palatal *Tsy*- initials (from the same source as *T-*, but palatalized) and yodized division-III finals. \[&pm;*ρ*\] and \[&pm;*π*\] are orthogonal, partitioning the division III into two. An earlier distribution of these MC initials must have been:

| dI \[&minus;*ρ*, &minus;*π*\] | dIV \[&minus;*ρ*, &minus;*π*\] | \[&plus;*ρ*, &minus;*π*\] | \[&minus;*ρ*, &plus;*π*\] | \[&plus;*ρ*, &plus;*π*\] |
| :--- | :--- | :--- | :---- | :--- |
|  [棠]{lang="zh-Hant"} *dang*  | [亭]{lang="zh-Hant"} *deng* | [棖]{lang="zh-Hant"} *draeng* | [常]{lang="zh-Hant"} *dzyang* | [長]{lang="zh-Hant"} *drjang* | 
|  [藏]{lang="zh-Hant"} *dzang* | [清]{lang="zh-Hant"} *tsheng* |  [傖]{lang="zh-Hant"} *dzraeng*  | [將]{lang="zh-Hant"} *tsjang* | [莊]{lang="zh-Hant"} *tsrjang* | 

In the model of Baxter (1992), "\[&plus;*ρ*\]" is "presence of a [\*-r-]{.IPA} medial", and "\[&plus;*π*\]" is "presence of a medial yod"; the pre-histories of the initials forming the XS classes \{ *t*, *th*, *d*, *tsy*, *tsyh*, *dzy*, *tr*, *trh*, *dr* \} and \{ *ts*, *tsh*, *dz*, *tsr*, *tsrh*, *dzr* \} are reconstructed as follows:

| | [\*C-]{.IPA}  | [\*Cr-]{.IPA} | [\*Cj-]{.IPA} | [\*Crj-]{.IPA} |
| :--- | :--- | :--- | :--- | :---- | :--- |
| *C* = *T* | [\*t-]{.IPA} > *t-* <br> [\*th-]{.IPA} > *th-* <br> [\*d-]{.IPA} > *d-* | [\*tr-]{.IPA} > *tr-* <br> [\*thr-]{.IPA} > *trh-* <br> [\*dr-]{.IPA} > *dr-* | [\*tj-]{.IPA} > *tsy-* <br> [\*thj-]{.IPA} > *tsyh-* <br> [\*dj-]{.IPA} > *dzy-* | [\*trj-]{.IPA} > *trj-* <br> [\*thrj-]{.IPA} > *trhj-* <br> [\*drj-]{.IPA} > *drj-* | 
| *C* = *Ts* | [\*ts-]{.IPA} > *ts-* <br> [\*tsh-]{.IPA} > *tsh-* <br> [\*dz-]{.IPA} > *dz-* | [\*tsr-]{.IPA} > *tsr-* <br> [\*tshr-]{.IPA} > *tsrh-* <br> [\*dzr-]{.IPA} > *dzr-* |  [\*tsj-]{.IPA} > *tsj-* <br> [\*tshj-]{.IPA} > *tshj-* <br> [\*dzj-]{.IPA} > *dzj-* | [\*tsrj-]{.IPA} > *tsrj-* <br> [\*tshrj-]{.IPA} > *tsrhj-* <br> [\*dzj-]{.IPA} > *dzrj-* |

It's obvious that the model adopted by Baxter & Sagart (2014) is isomorphic…

| | [\*Cˤ-]{.IPA} | [\*Cˤr-]{.IPA} | [\*C-]{.IPA} | [\*Cr-]{.IPA} |
| :--- | :--- | :--- | :--- | :---- | :--- |
| *C* = *T* | [\*tˤ-]{.IPA} > *t-* <br> [\*tʰˤ-]{.IPA} > *th-* <br> [\*dˤ-]{.IPA} > *d-* | [\*tˤr-]{.IPA} > *tr-* <br> [\*tʰˤr-]{.IPA} > *trh-* <br> [\*dˤr-]{.IPA} > *dr-* | [\*t-]{.IPA} > *tsy-* <br> [\*tʰ-]{.IPA} > *tsyh-* <br> [\*d-]{.IPA} > *dzy-* | [\*tr-]{.IPA} > *trj-* <br> [\*tʰr-]{.IPA} > *trhj-* <br> [\*dr-]{.IPA} > *drj-* | 
| *C* = *Ts* | [\*tsˤ-]{.IPA} > *ts-* <br> [\*tsʰˤ-]{.IPA} > *tsh-* <br> [\*dzˤ-]{.IPA} > *dz-* | [\*tsˤr-]{.IPA} > *tsr-* <br> [\*tsʰˤr-]{.IPA} > *tsrh-* <br> [\*dzˤr-]{.IPA} > *dzr-* |  [\*ts-]{.IPA} > *tsj-* <br> [\*tsʰ-]{.IPA} > *tshj-* <br> [\*dz-]{.IPA} > *dzj-* | [\*tsr-]{.IPA} > *tsrj-* <br> [\*tsʰr-]{.IPA} > *tsrhj-* <br> [\*dz-]{.IPA} > *dzrj-* |

…the only change being that the Division-III yod is not reconstructed back to OC anymore; instead, the "non-division-III-ness" in OC is marked by pharyngealization, and division III is explained to be previously unmarked (for discussion of this see B&S 2014: 68&ndash;76).

With this reconstruction, the XS behaviour discussed above is explained as follows:

- \[[\*dˤok]{.IPA} > *duwk*, "solitary"\], [獨]{lang="zh-Hant"}
- \[[\*dˤrok]{.IPA} > *draewk*, "muddy, not clear"\], [濁]{lang="zh-Hant"}
- \[[\*tok]{.IPA} > *tsyowk*, "to join together"\], [屬]{lang="zh-Hant"}
- \[[\*tʰok]{.IPA} > *tsyhowk*, "to ram (with horns)"\], [觸]{lang="zh-Hant"}
- \[[\*dok]{.IPA} > *dzyowk*, "category, class"\], [屬]{lang="zh-Hant"}
- \[[\*drek-drok]{.IPA} > *drjek-drjowk*, "to walk about without advancing"\], [躑躅]{lang="zh-Hant"}

…and, in the case of OC coronal affricates:

- \[[\*tsˤaʔ]{.IPA} > *tsuX*, "ancestor"\], [祖]{lang="zh-Hant"}
- \[[\*dzˤa]{.IPA} > *dzu*, "go to"\], [徂]{lang="zh-Hant"}
- \[[\*tsˤra]{.IPA} > *tsrae*, "Chinese hawberry (*Crataegus pinnatifida*)"\], [柤]{lang="zh-Hant"}, [樝]{lang="zh-Hant"}, [楂]{lang="zh-Hant"}
- \[[\*tsa]{.IPA} > *tsjo*, utterance-final article\], [且]{lang="zh-Hant"}
- \[[\*dzaʔ]{.IPA} > *dzjoX*, "to stop"\], [沮]{lang="zh-Hant"}
- \[[\*tsraʔ]{.IPA} > *tsrjoX*, "to stop"\], [阻]{lang="zh-Hant"}
-  \[[\*dzras]{.IPA} > *dzrjoH*, "to aid"\], [助]{lang="zh-Hant"}

As those two examples show, they now simply reflect contact between homorganic stop initials. This is then entirely of the same nature as other much more straightforward stop series. For instance, MC \{ *p*, *ph*, *b* \} form a XS class, which is simply back projected to OC [\*p]{.IPA}, [\*pʰ]{.IPA} and [\*b]{.IPA}. Consider the series with phonetic element [分]{lang="zh-Hant"}:

- \[[\*pˤrən]{.IPA} > *paen*, "(of animal's head?) big"\], [頒]{lang="zh-Hant"}
- \[[\*pʰˤrəns]{.IPA} > *pheanH*, "(of eyes) black distinct from white?"\], [盼]{lang="zh-Hant"}
- \[[\*bˤən]{.IPA} > *bwon*, "bowel, basin"\], [盆]{lang="zh-Hant"}
- \[[\*pən]{.IPA} > *pjun*, "divide"\], [分]{lang="zh-Hant"}
- \[[\*pʰən]{.IPA} > *phjun*, "numerous, bountiful"\], [紛]{lang="zh-Hant"}
- \[[\*prən]{.IPA} > *pin*, name of an ancient state\], [邠]{lang="zh-Hant"}, [豳]{lang="zh-Hant"}
- \[[\*brən]{.IPA} > *bin*, "poor" \], [貧]{lang="zh-Hant"}

I'll now visit two other kinds of important XS classes very briefly, and their significance in the present model. 

### the voiceless nasals

In general the MC initials *m* [/m/]{.IPA} only comes into XS contact with itself; the same can (with some complications) be said with *ng* [/ŋ/]{.IPA}. However, in primarily *m*- or *ng*-populated series there are a significant number of items with *x* [/x/]{.IPA} involved; the frequency of contact is statistically meaningful enough that it can't be waved away as chance interactions. In such cases we reconstruct OC voiceless nasals [\*m̥]{.IPA} and [\*ŋ̊]{.IPA} respectively. 

* \[[\*mˤaŋ]{.IPA} > *mang*, "blurry, indistinct"\], [茫]{lang="zh-Hant"}
* \[[\*mˤraŋ]{.IPA} > *maeng*, "blind"\], [盲]{lang="zh-Hant"}
* \[[\*maŋ]{.IPA} > *mjang*, "to escape, to flee; to die"\], [亡]{lang="zh-Hant"}
* \[[\*m̥ˤaŋ]{.IPA} > *xwang*, "(of land) wasted, uncultivated"\], [荒]{lang="zh-Hant"};
* \[[\*ŋranʔ]{.IPA} > *ngjenX*, a kind of cooking vessel\], [甗]{lang="zh-Hant"}
* \[[\*ŋ̊ans]{.IPA} > *xjonH*, "to perform sacrifice"\], [獻]{lang="zh-Hant"}

The situation with MC *n* requires more thought; among initials that come into contact with *n* we find the *ny* and *nr* to be the most common, and since their distribution in MC is parallel to that of *T*, *Tsy* and *Tr*, their OC reconstructions are straightforward: [\*nˤ]{.IPA} > *n*, [\*n]{.IPA} > *ny*, [\*nˤr]{.IPA} and [\*nr]{.IPA} > *nr*. But if [\*m̥]{.IPA} and [\*ŋ̊]{.IPA} exist, there seems to be no good reason for [\*n̥]{.IPA} to be absent. Well! In series with MC *n*, *ny* and *nr*, we frequently find *th*, *sy* and *trh* items (*sy* only occurring with division III finals, and *th* with I and IV, *trh* with II and III—you know the drill for the last two), awaiting explanation. It's natural to reconstruct [\*n̥ˤ]{.IPA} > *th*, [\*n̥]{.IPA} > *sy*, [\*n̥ˤr]{.IPA} and [\*n̥r]{.IPA} > *trh*.

* \[[\*na]{.IPA} > *nyo*, "to go to"\], [如]{lang="zh-Hant"}
* \[[\*nraʔ]{.IPA} > *nrjoX*, "woman"\], [女]{lang="zh-Hant"}
* \[[\*n̥as]{.IPA} > *syoH*, "to pardon, to forgive"\], [恕]{lang="zh-Hant"}
* \[[\*nˤas]{.IPA} > *nuH*, "to be angry"\], [怒]{lang="zh-Hant"};
* \[[\*nruʔ]{.IPA} > *nrjuwX*, "to knot"\], [紐]{lang="zh-Hant"}
* \[[\*n̥ruʔ]{.IPA} > *trhjuwX*, the second earthly branch\], [丑]{lang="zh-Hant"}


### the voiceless liquids

The MC liquid *l* does not co-occur with MC division-II finals, with very few exceptions ^[The most common one is <span lang="zh-Hant">冷</span> \[*laengX*, "chilly"\].] —that is, it seems to be incompatible with OC [*-r-]{.IPA}. But in XS series it is often mysteriously tangled up with MC grave (especially velar) initials, despite it being acute (coronal); among those grave initial items the overwhelming majority is division II (which, hey, is linked to an [\*-r-]{.IPA} medial). *l* also comes into frequent XS contact with *sr* and *trh*, both MC retroflexes. 

It would seem that—as is now generally agreed upon—that MC *l* was a rhotic in OC. The lack of MC division-II syllables beginning with *l* had in fact been OC phonotactic avoidance of [\*rr-]{.IPA}, and the contact of *l* items with grave-initial division-II syllables are usually explained by (at least at the earliest stage of such series) XS contact between e.g. [\*kr-]{.IPA} (with initial [\*k]{.IPA} and medial [\*-r-]{.IPA}) and [\*k-r]{.IPA} (with initial [\*r]{.IPA} and some sort of pre-initial [\*k-]{.IPA} subject to later loss; for a recent investigation into one of such cases, see [Nohara 2023](https://benjamins.com/catalog/lali.00133.noh){.downloadable} on \[[\*k-rˤon]{.IPA} > *lwanX*, "egg"\]—sections 2 and 4 are the most relevant to the discussion here). External evidence supports the rhotic value: see Baxter & Sagart (2014: 110&ndash;111) for Hmong-Mien and Vietic evidence of a rhotic OC value for MC *r*. An interesting tidbit: in early transcriptions of place names we find [烏弋山離]{lang="zh-Hant"} *‘u yik srean lje* (< [\*ʔˤa-lək-sran-ra]{.IPA}??) "Alexandria", where not only is ME *l* used for foreign *r*, it is also *avoided* for foreign *l*—the foreign *l* is transcribed instead with a *y* item.

The XS situation of *r* is not so clear as the previously discussed cases, even besides the complications with the aforementioned contact with grave initials. The XS class with *r* and sundry is reconstructed by both B&S (2014) and [Schuessler (2008)](https://search.worldcat.org/title/241305053) as follows: besides the straightforward [\*rˤ]{.IPA} and [\*r]{.IPA} > *r*, [\*r̥ˤ]{.IPA} develops into *th* and [\*r̥]{.IPA} into *trh*; apparently both follow Baxter (1992). Since almost all *trh* items in XS series of this kind are division III, [\*r̥]{.IPA} > *trh* is straightforward. On the other hand, the choice of [\*r̥ˤ]{.IPA} > *th* is tremendously unsatisfactory, since as Sagart (1999: 41) has observed, *th* very rarely interact with *r* in XS—certainly no more frequently than *sr* (see again msoeg 2020). msoeg considers *sr* to be a regular outcome of [\*r̥]{.IPA} (his [\*ɻ̥]{.IPA}), which must have been undesirable for B&S et al. because wherever *s*, *sr* appear in an otherwise resonant series, they reconstruct complex onset [\*s-C(-r-)]{.IPA}; naturally for them, then, *sr* that come into XS contact with *r* is [\*s-r(ˤ)]{.IPA}. This leaves no good candidate for the MC outcome of OC [\*r̥ˤ]{.IPA}. The choice of *th* at least has a point in systematicity, for it parallels the development of [\*n̥ˤ]{.IPA} and [\*l̥ˤ]{.IPA}, but I see no great reason why it should. 

* \[[\*rˤo]{.IPA} > *luw*, "tower, superstructure"\], [樓]{lang="zh-Hant"}
* \[[\*roʔ]{.IPA} > *ljuX*, "thread"\], [縷]{lang="zh-Hant"}
* \[[\*s-ros]{.IPA}?? > *srjuH*, "number"\], [數]{lang="zh-Hant"}

The XS situation involving the MC initial yod *y* is highly complex—it's likely not monogenetic. Nevertheless, it has now become clear that at least one source of *y* involves a XS class with the diagnostic members \{ *d*, *y*, *dr*, *th*, *sy*, *trh* \}. *d* and *th*, of course, do not appear with division-III finals, while *y* and *sy* only appear with division-III finals. This distribution is strikingly familiar—parallel to that of the coronal nasals. We then reconstruct this XS class as coronal resonants, voiced and unvoiced. Since [\*r]{.IPA} is reserved for *l* and sundry, the most sensible choice here is [\*l]{.IPA}. It is fortified to a stop when pharyngealized and/or followed by [\*-r-]{.IPA}, and weakened to a yod when not: [\*l-]{.IPA} > *y-*, [\*lˤ-]{.IPA} > *d-*, [\*lr-]{.IPA} and [\*lˤr-]{.IPA} > *dr-*; the developments of the voiceless counterparts are [\*l̥-]{.IPA} > *sy-*, [\*l̥ˤ-]{.IPA} > *th-*, [\*l̥r-]{.IPA} and [\*l̥ˤr-]{.IPA} > *trh-*. This lateral value is of course corroborated by the aforementioned [烏弋山離]{lang="zh-Hant"} *‘u yik srean lje* "Alexandria". For further evidence cited by Baxter and Sagart from Hmong-Mien, Vietic, etc., see Baxter & Sagart (2014: 109&ndash;110, 115). An interesting tidbit: Vietnamese *lúa*, Mường [lɔː³]{.IPA}, Rục [alɔː³]{.IPA}, Arem [alɑːˀ]{.IPA} (< Proto-Vietic [\*C.lɔʔ]{.IPA}, [Ferlus 2010](https://www.academia.edu/35302517/The_Austroasiatic_vocabulary_for_rice_its_origin_and_expansion){.downloadable}: 63) "rice paddy" and Tocharian A/B *klu* "rice" ([Peyrot 2018](https://hdl.handle.net/1887/72349){.downloadable}: 245) are believed to be early loans from Chinese [稻]{lang="zh-Hant"} \[[\*lˤuʔ]{.IPA}, "rice paddy"\].

> [(sidenote)]{.bl-h} Baxter and Sagart also cite possibly retained laterals in modern Sinitic dialects, claiming especially systematic attestations in Wǎxiāng [瓦鄉]{lang="zh-Hant"} (B&S 2014: 109)—but it has been pointed out that the voiced-resonant-initial level-tone syllables in Wǎxiāng are dark (yīnpíng), but the Wǎxiāng level-tone [/l-/]{.IPA} items that correspond to OC [\*lˤ-]{.IPA}, [\*lˤr-]{.IPA} and [\*lr-]{.IPA} are not; this seems to indicate secondary softening of earlier voiced stops instead (<a href="https://www.zhihu.com/question/395555151/answer/2362531855" target="_blank" rel="noreferrer">[百越閒人]{lang="zh-Hant"} 2022, on zhihu.com, in Mandarin</a>). The perfect match with OC lateral items might be purely coincidental then.

* \[[\*laŋ]{.IPA} > *yang*, "sun, sunlight"\], [陽]{lang="zh-Hant"} 
* \[[\*lˤaŋʔ]{.IPA} > *dangX*, "licentious, unbridled"\], [愓]{lang="zh-Hant"}
* \[[\*lˤraŋ]{.IPA} > *drjang*, "intestines"\], [腸]{lang="zh-Hant"}
* \[[\*l̥aŋ]{.IPA} > *syang* (in redup. form [\*l̥aŋ-l̥aŋ]{.IPA}), "amply flowing"\], [湯]{lang="zh-Hant"}
* \[[\*l̥ˤaŋ]{.IPA} > *thang*, "hot liquid"\], [湯]{lang="zh-Hant"}
* \[[\*l̥raŋs]{.IPA} > *trhjangH*, "(land) barren"], [畼]{lang="zh-Hant"}

## closing words

Wow, I have a lot more to write, but I lost steam quickly. The discussions above are quite elementary in terms of XS and OC reconstruction, perhaps presented in a way that's filled with oversimplifications and naïve understandings. There are almost certainly mistakes that I didn't catch. 

There are a lot of thorny subtleties of XS that I didn't mention. Just to throw some out there: though I claimed that the class \{ *t*, *th*, *d*, *tsy*, *tsyh*, *dzy*, *tr*, *trh*, *dr* \} doesn't normally have outsiders interacting with them, *sy* actually interacts with the class quite frequently. More importantly, *sy* items of this kind and *sy* items coming from voiceless resonants actually have different reflexes in Proto-Mǐn (B&S 2014: 92&ndash;93), confirming a distinct source. Or—I haven't talked about the posterior consonants *‘*, *k*, *kh*, *g*, *x*, *h*, *hj* at all, which represent a whole new sort of messiness. Or—some of those posterior obstruents keep interacting with *y*; what's up with that? I haven't even talked about the behaviour of the finals yet. 

With the limited discussion above, though, light can be shed on something fundamental. I've said that the phonetic element locates an OC *near*-homophone pool, not homophone. This is intuitively straightforward: since every phonetic element was presumably originally created to represent a specific morpheme (once again recall the monosyllabicity of OC morphemes), and it was then subsequently used as solely an indicator of sound, the writing system sans taxograms is in essence a syllabary. But the syllable count is too large for every syllable to have a unique phonetic element (creating a *syllabaire imparfait* \[imperfect syllabary\], in [Sagart 2006 \[in French\]](https://shs.hal.science/halshs-00103227){.downloadable}'s words ^[The "imperfection" is, of course, twofold, the other aspect being there is no inhibition for a syllable to have more than one phonetic element.] —thus compromises must be made. We can observe the basic compromises—tolerations—that ancient script-users must have had, using our model of OC initials.

### the XS principle

It turns out that in our model, the XS requirements to be met and the XS tolerations that can be made—i.e. what is usually termed the <dfn>XS principle</dfn>—are in fact reduced to several natural and straightforward rules. For two morphemes \[A\] and \[B\] to appear in the same XS series, below are the requirements:

* The initials of \[A\] and \[B\] should ideally have the same place of articulation. (The situation with posterior consonants might be more complicated, and is not in total agreement.)
* The initials of \[A\] and \[B\] should ideally have the same manner of articulation; that is, both nasals, both oral stops, both rhotics, both laterals, etc.
* (although not discussed in this post) \[A\] and \[B\] should ideally have the same rime.

…and below are the tolerations:

* It's generally tolerated if the initials of \[A\] and \[B\] don't match in voice and/or aspiration.
* It's generally tolerated if between \[A\] and \[B\], one has an pharyngealized onset and the other a non-pharyngealized onset.
* It's generally tolerated if between \[A\] and \[B\], one has a [\*-r-]{.IPA} medial and the other does not.
* It's generally tolerated if \[A\] and \[B\] have different suffixal obstruents (that is, the [\*-ʔ]{.IPA} and [\*-s]{.IPA} in Baxter & Sagart), or if one has it and the other does not.

Tentatively one adds: since a majority of complex onsets with pre-initials are reconstructed mainly to explain XS, we have (albeit with worrying circularity):

*  The absence or presence of pre-initial elements can be tolerated.

Moreover, when there is a poverty of phonetic elements, tolerations can be made that are not usually made. Again recall the example at the beginning of this post with phonetic element [堯]{lang="zh-Hant"}:

* [堯]{lang="zh-Hant"} : thought to have been originally created to write [堯]{lang="zh-Hant"} \[[\*ŋˤew]{.IPA} > *ngew*, "lofty"\]. With conventionalized taxograms we recognize…
    * [曉]{lang="zh-Hant"} = [堯]{lang="zh-Hant"} + [日]{lang="zh-Hant"} \["sun"\] [-->]{style="white-space:nowrap; font-family:var(--monospace);"} read \[[\*ŋ̊ˤewʔ]{.IPA} > *xewX*, "daybreak"\]
    * [饒]{lang="zh-Hant"} = [堯]{lang="zh-Hant"} + [食]{lang="zh-Hant"} \["to eat, to feed"\] [-->]{style="white-space:nowrap; font-family:var(--monospace);"} read \[[\*ŋew]{.IPA} > *nyew*, "abundant"\] (Here [\*ŋ]{.IPA} is palatalized, a sound change I didn't mention.)
    * [撓]{lang="zh-Hant"} = [堯]{lang="zh-Hant"} + [手]{lang="zh-Hant"} \["hand"\] [-->]{style="white-space:nowrap; font-family:var(--monospace);"} read \[[\*nˤrewʔ]{.IPA} (!) > *nraewX*, "to trouble"\]

It's clear that \[[\*nˤrewʔ]{.IPA} > *nraewX*, "to trouble"\] with *nr* is nontypical for such a series. But very few morphemes in its pool are attested in OC times; the only clear ones are \[[\*nˤrewʔ]{.IPA} > *nraewX*, "to trouble, to stir"\], \[[\*nˤrews]{.IPA} > *nraewH*, "to be bent, to surrender"\] (these two might be cognate?), \[[\*nˤrew]{.IPA} > *nraew*, a kind of bell\]. It must have been felt that to create a separate phonetic element for these characters was uneconomic, so [堯]{lang="zh-Hant"}, typically writing syllables with velar nasals, was chosen since it was "close enough": in received texts the former two morphemes are variably written as [撓]{lang="zh-Hant"} or [橈]{lang="zh-Hant"}, and the last is written as [鐃]{lang="zh-Hant"}. These kinds of XS exist, but are in the minority, and in most such cases we'll discover that it was "faute d'un meilleur phonétique" (for the lack of a better phonetic, Sagart 2006).

In excavated early writings, the taxograms (and the presence or absence thereof) are much more variable. Thus you simply can't, say, recognize a graph as [堯]{lang="zh-Hant"} and immediately claim it should read \[[\*ŋˤew]{.IPA}, "lofty"\], or mechanically equate any phonetic-taxogram combination with its modern reading. Instead, since the morpheme&ndash;graphic form correspondence had not been set in stone, a phonetic element—say, [堯]{lang="zh-Hant"}—could potentially stand for any syllable writeable with it; which, from our earlier observation, is in fact any syllable of the shape (imitating Sagart 2006's notation) [\*()(ŋ/ŋ̊)(ˤ)(r)ew()]{.IPA}, i.e. the set \{ [\*ŋew]{.IPA}, [\*ŋewʔ]{.IPA}, [\*ŋews]{.IPA}, [\*ŋˤew]{.IPA}, [\*ŋˤewʔ]{.IPA}, [\*ŋˤews]{.IPA}, [\*ŋrew]{.IPA}, [\*ŋrewʔ]{.IPA}, [\*ŋrews]{.IPA}, [\*ŋˤrew]{.IPA}, [\*ŋˤrewʔ]{.IPA}, [\*ŋˤrews]{.IPA}, [\*ŋ̊ew]{.IPA}, [\*ŋ̊ewʔ]{.IPA}, [\*ŋ̊ews]{.IPA}, [\*ŋ̊ˤew]{.IPA}, [\*ŋ̊ˤewʔ]{.IPA}, [\*ŋ̊ˤews]{.IPA}, [\*ŋ̊rew]{.IPA}, [\*ŋ̊rewʔ]{.IPA}, [\*ŋ̊rews]{.IPA}, [\*ŋ̊ˤrew]{.IPA}, [\*ŋ̊ˤrewʔ]{.IPA}, [\*ŋ̊ˤrews]{.IPA} \}, with potential pre-initials. That is our "near-homophone" pool. Obviously no phonetic element is used to write *all* possible members in its pool, but those are the possibilities. Any proposed reading *outside* of those possibilities are immediately doubtful, unless compelling explanation can be offered.

The set above can be written as [ŊEW]{.IPA}; that is, [ŊEW]{.IPA} = [\*()(ŋ/ŋ̊)(ˤ)(r)ew()]{.IPA}. This all-caps notation has precedence in e.g. <a href="https://search.worldcat.org/title/21524937" target="_blank" class="worldcat" rel="noreferrer">[Старостин]{lang="ru"} (1989, in Russian)</a>, [Hill (2015)](https://sci-hub.ru/https://doi.org/10.1163/2405478X-00801003){.downloadable} and has been used for a while in China at least among online enthusiasts—see <a href="https://zhuanlan.zhihu.com/p/616038124" target="_blank" rel="noreferrer">[布之道]{lang="zh-Hant"} (2021, on zhihu.com, in Mandarin)</a> for a compendiously written overview. (What I've been referring to as a "near-homophone pool" that the phonetic element points to, they—the Chinese online enthusiasts—call it the [諧聲域]{lang="zh-Hant"} <dfn>xiéshēng domain</dfn> of that phonetic element, which is also very neat.) 

Most importantly—we have abstracted the XS domain from the phonetic element. Writing the phonetic element [堯]{lang="zh-Hant"} is then basically equivalent to writing [ŊEW]{.IPA}, and, by a more tolerating extension, [NEW]{.IPA}; for [蜀]{lang="zh-Hant"}, [TOK]{.IPA}; for [且]{lang="zh-Hant"}, [TSA]{.IPA}; for [亡]{lang="zh-Hant"}, [MAŊ]{.IPA}; for [昜]{lang="zh-Hant"}, [LAŊ]{.IPA}… and so on. We now actually have a clear and simple way of recognizing what a phonetic element can mean, and what it typically cannot. This is invaluable for the palaeographical interpretation of early texts, and perhaps the most important takeaway from this entire post.

Hey, that was a long "closing words" section. Here's the real closing words: I wish you a happy life. See you later.