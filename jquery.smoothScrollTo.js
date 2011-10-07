/*!
 * Smooth Scroll To, jQuery plugin
 *
 * http://indamix.github.com
 *
 */
(function($){
	$.fn.smoothScrollTo = function(callback){
		$($.browser.safari ? 'body' : 'html').animate({
			scrollTop: this.offset().top
		}, 1000, 'swing', typeof callback === 'function' ? callback : $.noop);
	}
})(jQuery);