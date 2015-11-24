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
		'pwp-twitter': '&#xf099;',
		'pwp-facebook': '&#xf09a;',
		'pwp-github': '&#xf09b;',
		'pwp-google-plus': '&#xf0d5;',
		'pwp-adn': '&#xf170;',
		'pwp-slack': '&#xf198;',
		'pwp-behance': '&#xf1b4;',
		'pwp-soundcloud': '&#xf1be;',
		'pwp-vine': '&#xf1ca;',
		'pwp-git': '&#xf1d3;',
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
		'pwp-select-0': '&#xe900;',
		'pwp-select-1-checkbox': '&#xe901;',
		'pwp-select-1-radio': '&#xe902;',
		'pwp-arrow-down': '&#xe903;',
		'pwp-arrow-left': '&#xe904;',
		'pwp-arrow-right': '&#xe905;',
		'pwp-arrow-select': '&#xe906;',
		'pwp-arrow-up': '&#xe907;',
		'pwp-bigcontrol-cannotplay': '&#xe908;',
		'pwp-bigcontrol-pause': '&#xe909;',
		'pwp-bigcontrol-play': '&#xe90a;',
		'pwp-chapters': '&#xe90b;',
		'pwp-circled-checkmark': '&#xe90c;',
		'pwp-circled-close': '&#xe90d;',
		'pwp-circled-minus': '&#xe90e;',
		'pwp-circled-plus': '&#xe90f;',
		'pwp-circled-question': '&#xe910;',
		'pwp-clock': '&#xe911;',
		'pwp-contributors-two': '&#xe912;',
		'pwp-contributors': '&#xe913;',
		'pwp-controls-back-15': '&#xe914;',
		'pwp-controls-back-30': '&#xe915;',
		'pwp-controls-back': '&#xe916;',
		'pwp-controls-fast-forward': '&#xe917;',
		'pwp-controls-forward-15': '&#xe918;',
		'pwp-controls-forward-30': '&#xe919;',
		'pwp-controls-forward': '&#xe91a;',
		'pwp-controls-next-chapter': '&#xe91b;',
		'pwp-controls-pause': '&#xe91c;',
		'pwp-controls-play': '&#xe91d;',
		'pwp-controls-previous-chapter': '&#xe91e;',
		'pwp-controls-rewind': '&#xe91f;',
		'pwp-controls-speaker-next': '&#xe920;',
		'pwp-controls-speaker-previous': '&#xe921;',
		'pwp-controls-speed-minus': '&#xe922;',
		'pwp-controls-speed-plus': '&#xe923;',
		'pwp-controls-stop': '&#xe924;',
		'pwp-delete': '&#xe925;',
		'pwp-download': '&#xe926;',
		'pwp-fullscreen-off': '&#xe927;',
		'pwp-fullscreen-on': '&#xe928;',
		'pwp-info': '&#xe929;',
		'pwp-location': '&#xe92a;',
		'pwp-loupe': '&#xe92b;',
		'pwp-menu': '&#xe92c;',
		'pwp-message': '&#xe92d;',
		'pwp-more': '&#xe92e;',
		'pwp-pictures': '&#xe92f;',
		'pwp-podlove-logo': '&#xe930;',
		'pwp-podlove-subscribe': '&#xe931;',
		'pwp-rss': '&#xe932;',
		'pwp-settings': '&#xe933;',
		'pwp-share': '&#xe934;',
		'pwp-shownotes-full': '&#xe935;',
		'pwp-shownotes': '&#xe936;',
		'pwp-transcript': '&#xe937;',
		'pwp-upload': '&#xe938;',
		'pwp-volume-mute': '&#xe939;',
		'pwp-volume-on': '&#xe93a;',
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
