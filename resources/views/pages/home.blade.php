<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<title>Gerador de Postagem</title>

		<link rel="stylesheet" href="css/reveal.css">
		<!--
		<link rel="stylesheet" href="css/theme/black.css">
		-->

		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="css/zenburn.css">

		<link rel="stylesheet" href="css/app.css">

		<!-- Printing and PDF exports -->
		<script>
			var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );
		</script>
	</head>
	<body>
		<div class="reveal">
			<div class="slides vivala">
				<section>
					<img class="iphone" src="images/vivala-mobile.png">
				</section>

				<section>
					<h4>Open Tibia Server</h4>
				</section>
			</div>
		</div>

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
	</body>
</html>
