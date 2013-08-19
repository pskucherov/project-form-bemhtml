/**
 * Кнопка "Вверх".
 * Скролит страницу в начало
 */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-back-top', {

    onSetMod : {

        'js' : function() {
            var bpage = this.findBlockOutside('b-page').domElem;

            /**
             * Изменение прозрачности кнопки, при скроле страницы.
             * Если страница в самом начале - устанавливается display: 'none', чтобы скрыть кнопку для браузеров,
             * не поддерживающих прозрачность
             */
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

    /**
     * Вычисление прозрачности кнопки, в зависимости от местоположения на странице
     * @param pageHeight - высота страницы
     * @param scrollTop  - где находится скролл
     * @returns {number}
     */
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
