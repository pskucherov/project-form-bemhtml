(function($) {

/**
 * Шаблон для подложки
 * @private
 * @type jQuery
 */
var template,

/**
 * Пул подложек
 * @private
 * @type Array
 */
    underPool = [],

    browser = $.browser;

/**
 * Достает подложку из пула, при необходимости создает новую
 * @private
 * @returns jQuery
 */
function getUnder() {

    return underPool.length?
        underPool.shift() :
        template?
            template.clone() :
            template = createUnder();

}

/**
 * Возвращает подложку в пул
 * @private
 * @param {jQuery} under
 */
function putUnder(under) {

    underPool.push(under);

}

/**
 * Создает подложку
 * @private
 * @returns {jQuery}
 */
function createUnder() {

    // TODO пока только для мобильного сафари отдаем div, нужно сделать более умно для тех браузеров, которым достаточно div
    return '<div/>';
    return $((browser.safari || browser.webkit) && navigator.userAgent.toLowerCase().indexOf('mobile') > -1?
        '<div/>' :
        '<iframe' + (browser.msie && browser.version < 9? ' frameborder="0"' : '') + '/>');

}

BEM.DOM.decl('i-popup', {

    onSetMod : {

        'visibility' : {

            'visible' : function() {

                var under = this._getUnder(),
                    underParent = under; //under.parent();

                /*
                this.hasMod(under, 'type', 'paranja')?
                    underParent.is('body') || under.appendTo('body') :
                    (underParent[0] !== this.domElem[0]) && under.prependTo(this.domElem);
                */

                this._inBody || (this._inBody = !!this.domElem.appendTo('body'));

                this.trigger('show');

            },

            '' : function() {

                var under = this._getUnder();

                this.hasMod(under, 'type', 'paranja') && under.remove();
                this._putUnder();
                this.trigger('hide');

            }

        }

    },

    /**
     * Получает элемент подложки
     * @private
     * @returns {jQuery}
     */
    _getUnder : function() {

        return this._under /*||
            (this._under = getUnder().attr(
                'class',
                this._underClass || (this._underClass = this.findElem('under').remove().attr('class'))))*/;

    },

    /**
     * Возвращает элемент подложки
     * @private
     */
    _putUnder : function() {

        putUnder(this._under);
        delete this._under;

    },

    /**
     * Открывает попап
     * @param {Object} css объект css-свойств, описывающих положение попапа
     * @returns {BEM.DOM}
     */
    show : function(css) {

        css && this.domElem.css(css);
        return this.setMod('visibility', 'visible');

    },

    /**
     * Закрывает попап
     * @returns {BEM.DOM}
     */
    hide : function() {

        return this.delMod('animate').delMod('visibility');

    }

}, {

    live : true

});

})(jQuery);

