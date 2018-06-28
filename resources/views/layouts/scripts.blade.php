<script src="js/head.min.js"></script>
<script src="js/reveal.js"></script>

<script>
	// More info about config & dependencies:
	// - https://github.com/hakimel/reveal.js#configuration
	// - https://github.com/hakimel/reveal.js#dependencies
	Reveal.initialize({
		dependencies: [
			{ src: 'js/plugin/markdown/marked.js' },
			{ src: 'js/plugin/markdown/markdown.js' },
			{ src: 'js/plugin/notes/notes.js', async: true },
			{ src: 'js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
		]
	});
</script>
