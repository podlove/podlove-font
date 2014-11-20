/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'podlove\'">' + entity + '</span>' + html;
	}
	var icons = {
		'pwp-bigcontrol-cannotplay': '&#xe605;',
		'pwp-bigcontrol-pause': '&#xe606;',
		'pwp-bigcontrol-play': '&#xe607;',
		'pwp-arrow-down': '&#xe600;',
		'pwp-arrow-left': '&#xe601;',
		'pwp-arrow-right': '&#xe602;',
		'pwp-arrow-select': '&#xe603;',
		'pwp-arrow-up': '&#xe604;',
		'pwp-chapters': '&#xe608;',
		'pwp-circled-checkmark': '&#xe609;',
		'pwp-circled-close': '&#xe60a;',
		'pwp-circled-info': '&#xe60b;',
		'pwp-circled-minus': '&#xe60c;',
		'pwp-circled-more': '&#xe60d;',
		'pwp-circled-plus': '&#xe60e;',
		'pwp-circled-question': '&#xe60f;',
		'pwp-clock': '&#xe610;',
		'pwp-contributors': '&#xe611;',
		'pwp-controls-back-15': '&#xe612;',
		'pwp-controls-back-30': '&#xe613;',
		'pwp-controls-back': '&#xe614;',
		'pwp-controls-fast-forward': '&#xe615;',
		'pwp-controls-forward-15': '&#xe616;',
		'pwp-controls-forward-30': '&#xe617;',
		'pwp-controls-forward': '&#xe618;',
		'pwp-controls-next-chapter': '&#xe619;',
		'pwp-controls-pause': '&#xe61a;',
		'pwp-controls-play': '&#xe61b;',
		'pwp-controls-previous-chapter': '&#xe61c;',
		'pwp-controls-rewind': '&#xe61d;',
		'pwp-controls-speaker-next': '&#xe61e;',
		'pwp-controls-speaker-previous': '&#xe61f;',
		'pwp-controls-speed-minus': '&#xe620;',
		'pwp-controls-speed-plus': '&#xe621;',
		'pwp-controls-stop': '&#xe622;',
		'pwp-delete': '&#xe623;',
		'pwp-download': '&#xe624;',
		'pwp-fullscreen-off': '&#xe625;',
		'pwp-fullscreen-on': '&#xe626;',
		'pwp-info': '&#xe627;',
		'pwp-location': '&#xe628;',
		'pwp-loupe': '&#xe629;',
		'pwp-menu': '&#xe62a;',
		'pwp-message': '&#xe62b;',
		'pwp-pictures': '&#xe62c;',
		'pwp-podlove-logo': '&#xe62d;',
		'pwp-podlove-subscribe': '&#xe62e;',
		'pwp-rss': '&#xe62f;',
		'pwp-share': '&#xe630;',
		'pwp-shownotes': '&#xe631;',
		'pwp-transcript': '&#xe632;',
		'pwp-upload': '&#xe633;',
		'pwp-volume-mute': '&#xe634;',
		'pwp-volume-on': '&#xe635;',
		'pwp-code': '&#xe646;',
		'pwp-google-drive': '&#xe647;',
		'pwp-instagram': '&#xe648;',
		'pwp-youtube': '&#xe649;',
		'pwp-vimeo': '&#xe64b;',
		'pwp-flickr': '&#xe64c;',
		'pwp-dribbble': '&#xe64d;',
		'pwp-deviantart': '&#xe64e;',
		'pwp-steam': '&#xe64f;',
		'pwp-wordpress': '&#xe650;',
		'pwp-blogger': '&#xe651;',
		'pwp-tumblr': '&#xe652;',
		'pwp-skype': '&#xe653;',
		'pwp-reddit': '&#xe654;',
		'pwp-linkedin': '&#xe655;',
		'pwp-stackoverflow': '&#xe656;',
		'pwp-pinterest': '&#xe657;',
		'pwp-xing': '&#xe658;',
		'pwp-flattr': '&#xe659;',
		'pwp-paypal': '&#xe65a;',
		'pwp-cc': '&#xe63e;',
		'pwp-cc-by': '&#xe63f;',
		'pwp-cc-nc': '&#xe640;',
		'pwp-cc-nc-eu': '&#xe641;',
		'pwp-cc-nc-jp': '&#xe642;',
		'pwp-cc-sa': '&#xe643;',
		'pwp-cc-nd': '&#xe644;',
		'pwp-cc-pd': '&#xe645;',
		'pwp-instagram2': '&#xe64a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/pwp-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
