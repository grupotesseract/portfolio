/* Esconde os botões para tirar o print. */
$(".button-hide").on("click",function(){
    $(".header").css("display","none");
    $(".img-logo").css("display","none");
    $(".controls").css("display","none");
    $(".button-hide").css("display","none");
});

/* Eventos */
Reveal.addEventListener( 'vivala', function() {
	document.getElementById("hrefLink").href = "https://vivala.com.br/";
	document.getElementById("showLink").innerHTML = "vivala.com.br";
	document.getElementById("showLink").style.textDecorationColor = "#FF6147";
	document.getElementById("iconLink").style.color = "#FF6147";
}, false );

Reveal.addEventListener( 'boitata', function() {
	document.getElementById("hrefLink").href = "https://coletivoboitata.com.br/";
	document.getElementById("showLink").innerHTML = "coletivoboitata.com.br";
	document.getElementById("showLink").style.textDecorationColor = "#C3002F";
	document.getElementById("iconLink").style.color = "#C3002F";
}, false );

Reveal.addEventListener( 'acordoRapido', function() {
	document.getElementById("hrefLink").href = "https://www.acordorapido.net.br/";
	document.getElementById("showLink").innerHTML = "acordorapido.net.br";
	document.getElementById("showLink").style.textDecorationColor = "#96CA5B";
	document.getElementById("iconLink").style.color = "#96CA5B";
}, false );

Reveal.addEventListener( 'seusDireitos', function() {
	document.getElementById("hrefLink").href = "https://play.google.com/store/apps/details?id=com.seusdireitos";
	document.getElementById("showLink").innerHTML = "Play Store - Seus Direitos";
	document.getElementById("showLink").style.textDecorationColor = "#0087AF";
	document.getElementById("iconLink").style.color = "#0087AF";
}, false );

Reveal.addEventListener( 'abenepi2', function() {
	document.getElementById("hrefLink").href = "https://www.grupotesseract.com.br/";
	document.getElementById("showLink").innerHTML = "Site Institucional";
	document.getElementById("showLink").style.textDecorationColor = "#972038";
	document.getElementById("iconLink").style.color = "#972038";
}, false );

Reveal.addEventListener( 'tesseract', function() {
	document.getElementById("hrefLink").href = "https://www.grupotesseract.com.br/";
	document.getElementById("showLink").innerHTML = "Site Institucional";
	document.getElementById("showLink").style.textDecorationColor = "#000000";
	document.getElementById("iconLink").style.color = "#000000";
}, false );

Reveal.addEventListener( 'shanti', function() {
	document.getElementById("hrefLink").href = "https://dev.institutoshanti.com/";
	document.getElementById("showLink").innerHTML = "dev.institutoshanti.com";
	document.getElementById("showLink").style.textDecorationColor = "#862943";
	document.getElementById("iconLink").style.color = "#862943";
}, false );

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
/*
require('./bootstrap');

window.Vue = require('vue');
*/
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
/*
Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
*/
