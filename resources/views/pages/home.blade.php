@extends('layouts.master')

@section('content')

<div class="reveal">
	<div class="slides">
		@include('projects.vivala')

		@include('projects.boitata')

		@include('projects.acordo-rapido')

		@include('projects.seus-direitos')

		@include('projects.tesseract')

		@include('projects.shanti')
		{{--
		@include('projects.alabamaot')
		--}}
	</div>
</div>

@endsection
