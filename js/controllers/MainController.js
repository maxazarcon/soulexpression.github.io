app.controller('MainController', ['$scope',
function($scope) {
	$scope.projects = [{
		name : 'Bold 47 Photography',
		img : '../../images/bold47Capture.PNG',
		description : 'Bold 47 is the brand of Tony Cottengim, a good friend of mine. He was a freelance photographer, and one of the best guys I know for the job. Some of his best works (in my opinion) are featured on the website. I used a few little jQuery tricks I learned to build the site, and feel like it came out pretty well. Unfortunately, Tony is no longer doing the photography thing, but at least we've got his website to remind us of what he did.'
	}, {
		name : 'Imgur Extender',
		img : '../../imgurExtenderCapture.PNG',
		description : 'Imgur Extender is a project by @ZacMuerte and (me) @SoulExpression, developed to change the loading icon and highlight the admins on Imgur. I designed the extender to look near-identical to the settings page of Imgur. To view my end of the project (the non-functional version), visit my Github Project page.'
	}, {
		name : 'Trinity\'s Edge Web Design',
		img : 'trinityCapture.PNG',
		description : 'Trinity's Edge Web Design is a brand of freelance web design that I decided to start a while back. The website is unfinished, but once it's done I intend to use it as a portal for new and returning clients to request projects through. I've got the contact form up, but I'm still looking for images to use on the site. I'm also terrible at content writing for myself, so there's not much there as far as description of service.'
	}, {
		name : 'MakeshiftCake - A Minecraft Server',
		img : 'makeshiftCapture.PNG',
		description : 'MakeshiftCake was the first website I ever made. I built it for a Minecraft server I ran when it was still in early beta. It's not a particularly good site, but it's something I made for a small community I managed. The site is broken right now, but I'm still trying to restore it to what it used to be.'
	}];
}
]);