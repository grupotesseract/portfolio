/* Esconde os botões para tirar o print. */
$(".button-hide").on("click",function(){
    $(".header").css("display","none");
    $(".img-logo").css("display","none");
    $(".controls").css("display","none");
    $(".button-hide").css("display","none");
});

/* Eventos */
Reveal.addEventListener( 'vivala', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://vivala.com.br/";
		y = x[i].children;
		y[0].style.color = "#FF6147";
		y[1].style.textDecorationColor = "#FF6147";
		y[1].innerHTML = "vivala.com.br";
	}
}, false );

Reveal.addEventListener( 'boitata', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://coletivoboitata.com.br/";
		y = x[i].children;
		y[0].style.color = "#C3002F";
		y[1].style.textDecorationColor = "#C3002F";
		y[1].innerHTML = "coletivoboitata.com.br";
	}
}, false );

Reveal.addEventListener( 'acordoRapido', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://www.acordorapido.net.br/";
		y = x[i].children;
		y[0].style.color = "#96CA5B";
		y[1].style.textDecorationColor = "#96CA5B";
		y[1].innerHTML = "acordorapido.net.br";
	}
}, false );

Reveal.addEventListener( 'seusDireitos', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://play.google.com/store/apps/details?id=com.seusdireitos";
		y = x[i].children;
		y[0].style.color = "#0087AF";
		y[1].style.textDecorationColor = "#0087AF";
		y[1].innerHTML = "Play Store - Seus Direitos";
	}
}, false );

Reveal.addEventListener( 'abenepi2', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://www.grupotesseract.com.br/";
		y = x[i].children;
		y[0].style.color = "#972038";
		y[1].style.textDecorationColor = "#972038";
		y[1].innerHTML = "Em Desenvolvimento";
	}
}, false );

Reveal.addEventListener( 'tesseract', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://www.grupotesseract.com.br/";
		y = x[i].children;
		y[0].style.color = "#000000";
		y[1].style.textDecorationColor = "#000000";
		y[1].innerHTML = "Site Institucional";
	}
}, false );

Reveal.addEventListener( 'shanti', function() {
	var x = document.getElementsByClassName("hrefLink");
	for(i = 0; i < x.length; i++) {
		x[i].href = "https://dev.institutoshanti.com/";
		y = x[i].children;
		y[0].style.color = "#862943";
		y[1].style.textDecorationColor = "#862943";
		y[1].innerHTML = "dev.institutoshanti.com";
	}
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
