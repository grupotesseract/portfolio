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

{{-- JQuery --}}
<script
  src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>

<script src="js/app.js"></script>
