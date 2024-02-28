const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItBracketedSpans = require("markdown-it-bracketed-spans");
const markdownItMultimdTable = require("markdown-it-multimd-table");
const wordcountPlugin = require("eleventy-plugin-wordcount-extended");
const markdownItFootnote = require('markdown-it-footnote');
const markdownItForInline = require('markdown-it-for-inline');

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginBundle = require("@11ty/eleventy-plugin-bundle");
const pluginNavigation = require("@11ty/eleventy-navigation");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const pluginDrafts = require("./eleventy.config.drafts.js");
const pluginImages = require("./eleventy.config.images.js");

module.exports = function(eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	  };
	// Copy the contents of the `asset` folder to the output folder
	// For example, `./asset/css/` ends up in `_site/css/`
	eleventyConfig.addPassthroughCopy({
		"./asset/": "/",
		"./node_modules/prismjs/themes/prism-okaidia.css": "/css/prism-okaidia.css",
	});

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	eleventyConfig.addPairedShortcode("sidenote", function(content, sidenoteTag) 
	{
		return `<label for="sn-${sidenoteTag}" class="margin-toggle sidenote-number"></label><input type="checkbox" id="sn-${sidenoteTag}" class="margin-toggle"/><small class="sidenote"><span class="visually-hidden">[Note: ]</span>&nbsp;${content}<span class="visually-hidden">[End of note.]</span></small>`;
	});

	eleventyConfig.addPairedShortcode("marginnote", function(content, marginnoteTag) 
	{
		return `<label for="sn-${marginnoteTag}" class="margin-toggle margin-toggle-inline-symbol">&para; </label><input type="checkbox" id="sn-${marginnoteTag}" class="margin-toggle"/><small class="marginnote"><span class="visually-hidden">[Note: ]</span>${content}<span class="visually-hidden">[End of note.]</span></small>`;
	});
	
	// App plugins
	eleventyConfig.addPlugin(pluginDrafts);
	eleventyConfig.addPlugin(pluginImages);

	eleventyConfig.addPlugin(wordcountPlugin);

	// Official plugins
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
	eleventyConfig.addPlugin(pluginBundle);

	// Filters
	eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "yyyy LLL dd");
	});

	eleventyConfig.addFilter('htmlDateString', (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
	});

	// Get the first `n` elements of a collection.
	eleventyConfig.addFilter("head", (array, n) => {
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	});

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers);
	});

	// Return all the tags used in a collection
	eleventyConfig.addFilter("getAllTags", collection => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	});

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	});

	eleventyConfig.setLibrary("md", markdownIt(options));

	// Customize Markdown library settings:
	eleventyConfig.amendLibrary("md", mdLib => {
		
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.ariaHidden({
				placement: "after",
				class: "header-anchor",
				symbol: "#",
				ariaHidden: false,
			}),
			level: [1,2,3,4],
			slugify: eleventyConfig.getFilter("slugify")
		});
		mdLib.use(markdownItAttrs);

		mdLib.use(markdownItBracketedSpans);

		mdLib.use(markdownItMultimdTable, {
			multiline:  true,
			rowspan:    true,
			headerless: true,
			multibody:  true,
			autolabel:  true,
		  });
		
		mdLib.use(markdownItFootnote).renderer.rules.footnote_block_open = () => (
			'<section class="footnotes">\n' +
			'<h2 class="footnotes-heading">footnotes</h2>\n' +
			'<ol class="footnotes-list">\n');
		
		// https://v2.franknoirot.co/posts/external-links-markdown-plugin/
		mdLib.use(markdownItForInline, 'url_new_win', 'link_open', function (tokens, idx) {
			const [, href] = tokens[idx].attrs.find(attr => attr[0] === 'href')
    
			if (href && (!href.startsWith('/') && !href.startsWith('#'))) {
			  tokens[idx].attrPush([ 'target', '_blank' ])
			  tokens[idx].attrPush([ 'rel', 'noreferrer' ])
		  }});
	});

	// Features to make your build faster (when you need them)

	// If your passthrough copy gets heavy and cumbersome, add this line
	// to emulate the file copy on the dev server. Learn more:
	// https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve

	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	return {
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		// These are all optional:
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},

		// -----------------------------------------------------------------
		// Optional items:
		// -----------------------------------------------------------------

		// If your site deploys to a subdirectory, change `pathPrefix`.
		// Read more: https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix

		// When paired with the HTML <base> plugin https://www.11ty.dev/docs/plugins/html-base/
		// it will transform any absolute URLs in your HTML to include this
		// folder name and does **not** affect where things go in the output folder.
		pathPrefix: "/",
	};
};
