/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-back-top', {

    onSetMod : {

        'js' : function() {
            var bpage = this.findBlockOutside('b-page').domElem;

            this.bindToWin('scroll', function(e) {
                var opacity = this._getOpacity(bpage.height(), e.data.domElem.scrollTop());
                if ( opacity <= 0.05 ) {
                    this.domElem.css( { display: 'none' });
                } else {
                    this.domElem.css({ 'opacity': opacity, display: 'block' });
                }
            });

            this.bindTo('click', function() {
                bpage.animate( { scrollTop: 0 }, 500);

                /**
                 * хак для IE
                 */
                $("body,html").animate( { scrollTop: 0 }, 500);
            });
        }

    },

    '_getOpacity': function(pageHeight, scrollTop) {
        var res;
        res = scrollTop / pageHeight;

        if (res > 0.5) {
            res = 1;
        }

        return res;
    }

});

})();
