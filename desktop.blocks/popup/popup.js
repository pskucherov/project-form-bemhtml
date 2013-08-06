(function($) {

/**
 @namespace JS-API блока popup
 @name block */

BEM.DOM.decl('popup',  /** @lends block.prototype */ {

    onSetMod : {

        'js' : function() {

            /**
             * DOM-элемент, для которого открывается попап
             * @private
             * @type jQuery
             */
            this._owner = null;

            /**
             * Состояние видимости
             * @private
             * @type Boolean
             */
            this._isShowed = false;

            /**
             * Приоритетное направление для открытия попапа
             * @private
             * @type String
             */
            this._direction = this.getMod('direction') || 'down';

            /**
             * Последнее удачное направление открытия (когда попап полностью попал в окно)
             * @private
             * @type String
             */
            this._lastDirection = null;

        }

    },

    /**
     * Показывает попап
     * @param {jQuery|Object} owner DOM-элемент или координаты { left : x, top : y }, относительно которых рассчитывается положение
     */
    show : function(owner) {

        if(!this._isShowed || this._owner !== owner) {
            this._owner = owner;
            this._getUnder().show({ left : -10000, top : -10000 });
            this.pos();
            this._getUnder().setMod('animate','yes');
        }

        return this;

    },

    /**
     * Скрывает попап
     */
    hide : function() {

        this._isShowed && this._getUnder().hide();
        return this;

    },

    /**
     * Показывает/скрывает попап в зависимости от текущего состояния
     * @param {jQuery|Object} owner DOM-элемент или координаты { left : x, top : y }, относительно которых рассчитывается положение
     */
    toggle : function(owner) {

        return this.isShowed()?
            this.hide() :
            this.show(owner);

    },

    /**
     * Позиционирует попап
     */
    _pos : function() {

        var params = this._calcParams(this._owner);

        this.elem('tail').css(params.tailOffsets);
        this
            .setMod('direction', params.direction)
            ._getUnder().show(params.offsets);

        return this;

    },

    /**
     * Позиционирует попап, если он виден
     */
    pos : function() {

        if (!this._isShowed)
            return this;

        return this._pos();
    },

    /**
     * Возвращает состояние видимости попапа
     * @returns {Boolean}
     */
    isShowed : function() {

        return this._isShowed;

    },

    /**
     * Устанавливает приоритетное направление открытия попапа
     * @param {String} direction направление (up|right|down|left)
     */
    setDirection : function(direction) {

        if(this._direction != direction) {
            this._direction = direction;
            this.isShowed() && this.pos();
        }

    },

    /**
     * Устанавливает контент попапа
     * @param {String|jQuery} content контент
     * @param {Function} [callback] обработчик, вызываемый после инициализации
     * @param {Object} [callbackCtx] контекст обработчика
     */
    setContent : function(content, callback, callbackCtx) {

        BEM.DOM.update(this.elem('content'), content, callback, callbackCtx);
        return this.isShowed()? this.pos() : this;

    },

    /**
     * Проверяет, является ли владелец попапа DOM-элементом
     * @returns {Boolean}
     */
    _isOwnerNode : function() {

        return !!(this._owner && this._owner.jquery);

    },

    /**
     * Вычисляет необходимые метрики для расчета направления открытия попапа
     * @private
     * @returns {Object}
     */
    _calcDimensions : function() {

        var posElem = this._getUnder().domElem,
            underElem = this._getUnder()._getUnder(),
            win = this.__self.win,
            owner = this._owner,
            isOwnerNode = this._isOwnerNode(),
            ownerOffset = isOwnerNode? owner.offset() : owner,
            ownerWidth = isOwnerNode? owner.outerWidth() : 0,
            ownerHeight = isOwnerNode? owner.outerHeight() : 0,
            scrollLeft = win.scrollLeft(),
            scrollTop = win.scrollTop(),
            winSize = this.__self.getWindowSize(),
            borderWidth = parseInt(this.elem('content').css('border-top-width'), 10);

        return {
            ownerWidth: ownerWidth,
            ownerHeight: ownerHeight,
            ownerLeft: ownerOffset.left,
            ownerTop: ownerOffset.top,
            ownerRight: ownerOffset.left + ownerWidth,
            ownerBottom: ownerOffset.top + ownerHeight,
            ownerHorizMiddle: ownerOffset.left + ownerWidth / 2,
            ownerVertMiddle: ownerOffset.top + ownerHeight / 2,
            posWidth: posElem.outerWidth(),
            posHeight: posElem.outerHeight(),
            underWidth: underElem.outerWidth(),
            underHeight: underElem.outerHeight(),
            borderWidth: isNaN(borderWidth)? 0: borderWidth,
            windowLeft: scrollLeft,
            windowRight: scrollLeft + winSize.width,
            windowTop: scrollTop,
            windowBottom: scrollTop + winSize.height
        };

    },

    /**
     * Вычисляет параметры открытия попапа
     * @private
     * @returns {Object} хэш вида { direction, offset.left, offset.top }
     */
    _calcParams : function() {

        var d = this._calcDimensions();

        if(this.hasMod('adjustable', 'no'))
            return calcDirectionParams(this._direction, d);

        var checkedDirections = {},
            allowedDirections = this.params.directions,
            currentDirectionIdx = $.inArray(this._direction, allowedDirections);

        // обработка случая когда текущее направление открытия не является допустимым
        currentDirectionIdx > -1 || (currentDirectionIdx = 0);

        var priorityDirectionIdx = currentDirectionIdx,
            currentDirection, params;

        do {
            currentDirection = allowedDirections[currentDirectionIdx];
            params = checkedDirections[currentDirection] = calcDirectionParams(currentDirection, d);
            if(!params.factor) {// значит полностью попал в окно
                this._lastDirection = currentDirection;
                return params;
            }

            // находим следующее возможное направление открытия, если оно есть
            ++currentDirectionIdx == allowedDirections.length && (currentDirectionIdx = 0);

        } while(currentDirectionIdx !== priorityDirectionIdx);

        return checkedDirections[this._lastDirection || allowedDirections[0]];

    },

    getDefaultParams : function() {

        return {
            directions : ALLOWED_DIRECTIONS
        };

    },

    destruct : function() {

        var under = this._under;
        if(!under) {
            this.__base.apply(this, arguments);
        }
        else if(!this._destructing) {
            this._destructing = true;
            this.hide();
            BEM.DOM.destruct(false, under.domElem);
            this.__base(true);
        }

    },

    /**
     * Возвращает подложку
     * @private
     * @returns {BEM.DOM.blocks['i-popup']}
     */
    _getUnder : function() {

        if(!this._under) {
            var under = $(BEMHTML.apply({
                block : 'i-popup',
                zIndex : this.params.zIndex,
                mods : {
                    autoclosable : this.getMod('autoclosable') || 'yes',
                    fixed : this.hasMod('direction', 'fixed') && 'yes'
                },
                underMods : this.params.underMods,
                underMix : [{ block : 'popup', elem : 'under' }]
            }));

            (this._under = this.findBlockOn(under, 'i-popup'))
                .on(
                    {
                        'show'          : this._onUnderShowed,
                        'hide'          : this._onUnderHidden,
                        'outside-click' : this._onUnderOutsideClicked
                    },
                    this)
                .elem('content').append(this.domElem);

        }

        return this._under;

    },

    _onUnderShowed : function() {

        this._isShowed = true;

        this
            .bindToWin('resize', this.pos)
            ._isOwnerNode() &&
                this.bindToDomElem(
                    this._owner.parents().add(this.__self.win),
                    'scroll',
                    this.pos);

        this.trigger('show');

    },

    _onUnderHidden : function() {

        this._isShowed = false;

        this
            .unbindFromWin('resize')
            ._isOwnerNode() &&
                this.unbindFromDomElem(
                    this._owner.parents().add(this.__self.win),
                    'scroll');

        this.trigger('hide');
    },

    _onUnderOutsideClicked : function() {

        this.trigger.apply(this, arguments);

    }

}, /** @lends block */ {

    live : function() {

        this.liveBindTo('close', 'leftclick', function() {
            this.hide();
        });

    }

});

var TAIL_OFFSET = 19,
    TAIL_WIDTH_HORIZONTAL = 9,
    TAIL_WIDTH_VERTICAL = 19,
    TAIL_HEIGHT_HORIZONTAL = 19,
    TAIL_HEIGHT_VERTICAL = 10,
    SHADOW_SIZE = 7,
    ALLOWED_DIRECTIONS = [
        'down-right', 'down', 'down-left', 'up', 'up-right', 'up-left',
        'right-down', 'right', 'right-up', 'left-down', 'left', 'left-up'
    ];

/**
 * Рассчитывает параметры открытия попапа в заданном направлении
 * @private
 * @param {String} direction направление
 * @param {Object} d метрики
 * @returns {Object}
 */
function calcDirectionParams(direction, d) {

    var factor, // фактор попадания в окно

        // смещение попапа
        offsets = {
            top: 0,
            left: 0
        },

        // отступы для хвостика
        tailOffsets = {
            marginLeft: 0,
            marginTop: 0
        },

        // генеральное направление (up, down, left, right)
        calcDirection = direction.split('-')[0],

        // коррекция на тот случай, если owner меньше хвостика
        correctionHoriz = d.ownerWidth < TAIL_WIDTH_VERTICAL
            ? (TAIL_WIDTH_VERTICAL - d.ownerWidth)/2
            : 0,
        correctionVert = d.ownerHeight < TAIL_HEIGHT_HORIZONTAL
            ? (TAIL_HEIGHT_HORIZONTAL - d.ownerHeight)/2
            : 0;

    switch(direction) {
        case 'up':
        case 'down':

            offsets.left = d.ownerHorizMiddle - d.posWidth / 2;

            offsets.top = direction == 'down'
                ? d.ownerBottom + TAIL_HEIGHT_VERTICAL
                : d.ownerTop - d.posHeight - TAIL_HEIGHT_VERTICAL;

            tailOffsets.marginLeft = d.posWidth / 2 - TAIL_WIDTH_VERTICAL / 2;

            tailOffsets.marginTop = direction == 'down'
                ? 0 - TAIL_HEIGHT_VERTICAL
                : 0;
        break;

        case 'up-left':
        case 'up-right':
        case 'down-left':
        case 'down-right':

            offsets.left = direction == 'down-right' || direction == 'up-right'
                ? d.ownerLeft - correctionHoriz
                : d.ownerRight - d.posWidth + correctionHoriz;

            offsets.top = calcDirection == 'down'
                ? d.ownerBottom + TAIL_HEIGHT_VERTICAL
                : d.ownerTop - d.posHeight - TAIL_HEIGHT_VERTICAL;

            tailOffsets.marginLeft = d.ownerWidth > d.posWidth
                ? d.posWidth / 2 - TAIL_WIDTH_VERTICAL / 2
                : d.ownerHorizMiddle - offsets.left - TAIL_WIDTH_VERTICAL / 2;

            tailOffsets.marginTop = calcDirection == 'down'
                ? d.borderWidth - TAIL_HEIGHT_VERTICAL
                : 0 - d.borderWidth;
        break;

        case 'left-down':
        case 'right-down':

            offsets.left = direction == 'left-down'
                ? d.ownerLeft - d.posWidth - TAIL_WIDTH_HORIZONTAL
                : d.ownerRight + TAIL_WIDTH_HORIZONTAL;

            offsets.top = d.ownerTop - correctionVert;

            tailOffsets.marginLeft = direction == 'left-down'
                ? 0 - d.borderWidth
                : d.borderWidth - TAIL_WIDTH_HORIZONTAL;

            tailOffsets.marginTop = d.ownerHeight < d.posHeight
                ? d.ownerVertMiddle - offsets.top - TAIL_HEIGHT_HORIZONTAL / 2
                : d.posHeight / 2 - TAIL_HEIGHT_HORIZONTAL / 2;
        break;

        case 'left':
        case 'right':

            offsets.left = direction == 'left'
                ? d.ownerLeft - d.posWidth - TAIL_WIDTH_HORIZONTAL
                : d.ownerRight + TAIL_WIDTH_HORIZONTAL;

            offsets.top = d.ownerVertMiddle - d.posHeight / 2;

            tailOffsets.marginLeft = direction == 'left'
                ? 0 - d.borderWidth
                : d.borderWidth - TAIL_WIDTH_HORIZONTAL;

            tailOffsets.marginTop = d.posHeight / 2 - TAIL_HEIGHT_HORIZONTAL / 2;
        break;

        case 'left-up':
        case 'right-up':

            offsets.left = direction == 'left-up'
                ? d.ownerLeft - d.posWidth - TAIL_WIDTH_HORIZONTAL
                : d.ownerRight + TAIL_WIDTH_HORIZONTAL;

            offsets.top = d.ownerBottom - d.posHeight + correctionVert;

            tailOffsets.marginLeft = calcDirection == 'left'
                ? 0 - d.borderWidth
                : d.borderWidth - TAIL_WIDTH_HORIZONTAL;

            tailOffsets.marginTop = d.ownerHeight > d.posHeight
                ? d.posHeight / 2 - TAIL_HEIGHT_HORIZONTAL / 2
                : d.ownerVertMiddle - offsets.top - TAIL_HEIGHT_HORIZONTAL / 2;
    }

    factor = calcInWindowFactor(offsets, d);

    return {
        direction : calcDirection,
        factor : factor,
        offsets : offsets,
        tailOffsets : tailOffsets
    };
}

/**
 * Вычисляет фактор попадания объекта в окно
 * @param {Object} pos параметры объекта
 * @param {Object} d метрики
 * @returns {Number} фактор попадания (0 - полностью попадает, далее чем больше, тем хуже)
 */
function calcInWindowFactor(pos, d) {

    var res = 0;

    d.windowTop > pos.top && (res += d.windowTop - pos.top);
    pos.top + d.underHeight > d.windowBottom && (res += pos.top + d.underHeight - d.windowBottom);
    d.windowLeft > pos.left && (res += d.windowLeft - pos.left);
    pos.left + d.underWidth > d.windowRight && (res += pos.left + d.underWidth - d.windowRight);

    return res;

}

})(jQuery);
