<!doctype html>
<html lang="{{ app()->getLocale() }}">
	@include('layouts.head')

	<body>		
		@yield('content')

		@include('layouts.scripts')
	</body>
</html>
