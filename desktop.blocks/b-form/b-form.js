/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-form', {

    filled: 0,
    fillStat: {},
    onSetMod : {
        'js' : function() {

            this.findInputs();
            this._checkAll();

            BEM.blocks['b-form'].on('checkFields', this._checkOneBox, this);

            BEM.blocks['b-form'].on('checkInputBoxes', this._checkInputBoxes, this);

            BEM.blocks['b-form'].on('checkAgree', this._checkAgree, this);
            BEM.blocks['b-form'].on('checkAttach', this._checkAttach, this);
            BEM.blocks['b-form'].on('checkSelect', this._checkSelect, this);

            BEM.blocks['b-form'].on('checkQ5', this._checkQ5, this);

            this.bindTo('submit-button', 'click', function() {

                if ( this._reqFieldsFilled() ) {
                    this.domElem.submit();
                } else {
                    this._checkAll();
                    this._setErrorsBlock();
                    this.findBlockInside('b-form-checkbox').elem('field').trigger('verification').trigger('focusout');
                }
            });

            /**
             * При фокусе на элементе скрывает ошибку
             */
            BEM.blocks['b-form'].on('hideError', function(e, a) {
                this._errorControl(a.data.domElem.attr('name'), false);
            }, this);


        }
    },

    '_reqFieldsFilled': function() {
        var i
            , elm;

        if (BEM.blocks['b-error'].verification('agree')) {
            if (!BEM.blocks['b-error'].verification('agree', this.fillStat['agree'])) {
                return false;
            }
        }

        for (i = 0; i < this.inputs.length; i++) {
            elm = this.inputs[i].elem('field');
            if (BEM.blocks['b-error'].verification(elm.attr('name'))) {
                if (!this._checkOneBox(elm)) {
                    return this._checkOneBox(elm);
                }
            }
        }
        return true;
    },

    '_openAccordWithErrors': function(to) {
        var i;
        for (i = 0; i < this.accords.length; i++ ) {
            if(this.accords[i].hasMod('to', to)) {
                this.accords[i].elem('roll').trigger('open');
                return true;
            }
        }
        return false;
    },

    '_setLoad' : function() {
        var percent
            , stat
        ;

        stat = this._cntObj(this.fillStat);
        filled = stat[0];
        num    = stat[1];

        if (filled === num) {
            this.progress.css('width', '100%');
        } else {
            percent = parseInt((100 / num) * filled, 10);
            this.progress.css('width', percent + '%');
        }
        this.findBlockInside('b-progress-bar').elem('mark').html(filled + ' / ' + num);
    },

    'findInputs': function() {

        this.progress    = this.findBlockInside('b-progress-bar').elem('load');
        this.inputs      = this.findBlocksInside('b-input-box');
        this.checkBox_q5 = this.findBlockInside('b-question-checkbox').findElem('field');
        this.attach      = this.findBlockInside('b-form-attach').findElem('text');
        this.select      = this.findBlockInside('b-form-select').findElem('select');
        this.agree       = this.findBlockInside('b-form-checkbox').findElem('field');
        this.errors      = this.findBlocksInside('b-error');
        this.accords     = this.findBlocksInside('b-accordion-control');

    },

    /**
     * Показать / скрыть сообщение об ошибки под элементом
     * @param to {string} - модификатор (название) обрабатываемого поля
     * @param show {boolean} - показать или скрыть ошибку
     * @returns {boolean}
     */
    '_errorControl': function(to, show) {
        var i;
        for (i = 0; i < this.errors.length; i++) {
            if (this.errors[i].hasMod('to', to)) {
                if(show) {
                    this.errors[i].setMod('visible', 'yes');
                } else {
                    this.errors[i].delMod('visible');
                }
                return true;
            }
        }
        return false;
    },

    '_focusControl': function(to, setWarning) {
        var j;

        for (j = 0; j < this.inputs.length; j++) {
            if ( this.inputs[j].elem('field').attr('name') === to ) {
                if (setWarning) {
                    this.inputs[j].elem('field').trigger('focus_warning');
                } else {
                    this.inputs[j].elem('field').trigger('del_focus_warning');
                }
                return true;
            }
        }

        return false;
    },

    '_setErrorsBlock': function(name) {
        var k;
        if (typeof name !== 'undefined') {
            k = name;
            if (this._errorControl(k, !this.fillStat[k])) {
                this._focusControl(k, !this.fillStat[k]);
            }
        } else {
            for (k in this.fillStat) {
                if (!this.fillStat[k]) {
                    if (this._errorControl(k, !this.fillStat[k])) {
                        this._focusControl(k, !this.fillStat[k]);
                        this._openAccordWithErrors(k);
                    }
                }
            }
        }
    },

    '_checkQ5': function(redraw) {
        var i;
        if (!this.fillStat['q5']) {
            for (i = 0; i < this.checkBox_q5.length; i++ ) {
                if (this.checkBox_q5[i].checked) {
                    this.fillStat['q5'] = true;
                    break;
                }
            }
        }
        if(this.fillStat['q5']) {
            this._errorControl('q5', false);
            this._focusControl('q5', false);
        }
        if(typeof redraw !== 'boolean' || redraw !== false) {
            this._setLoad();
        }
    },

    '_checkAttach': function(redraw) {
        if (this.attach.html() === 'файл не выбран') {
            this.fillStat['attach'] = false;
        } else {
            this.fillStat['attach'] = true;
        }
        if(typeof redraw !== 'boolean' || redraw !== false) {
            this._setLoad();
        }
    },

    '_checkAgree': function(redraw) {
        if (this.agree.attr('checked') === 'checked') {
            this.fillStat[this.agree.attr('name')] = true;
        } else {
            this.fillStat[this.agree.attr('name')] = false;
        }
        if(typeof redraw !== 'boolean' || redraw !== false) {
            this._setLoad();
        }
    },

    '_checkSelect': function(redraw) {
        if (this.select.val() === 'no') {
            this.fillStat[this.select.attr('name')] = false;
        } else {
            this.fillStat[this.select.attr('name')] = true;
        }
        if(typeof redraw !== 'boolean' || redraw !== false) {
            this._setLoad();
        }
    },

    /**
     * Проверяем заполнено ли поле + проверка на ошибки, описанные в b-error (если такие имеются)
     * @param elm {domElem}    - элемент, который проверяем
     * @param elmTrg {domElem} - элемент, который был передан через trigger. Если есть - проверяем его
     * @returns {boolean}
     */
    '_checkOneBox': function(elm, elmTrg) {

        if (typeof elmTrg !== 'undefined') {
            elm = elmTrg.data.domElem;
        }

        var fName = elm.attr('name');

        if (typeof fName !== 'undefined') {
            if (elm.val().length) {
                this.fillStat[fName] = true;
            } else {
                this.fillStat[fName] = false;
                if (fName === 'q5') {
                    this._checkQ5(false);
                }
            }
            if (BEM.blocks['b-error'].verification(fName)) {
                this.fillStat[fName] = BEM.blocks['b-error'].verification(fName, elm.val());
            }
        }

        if (typeof elmTrg !== 'undefined') {
            this._setErrorsBlock(fName);
        }

        return this.fillStat[fName];
    },

    '_checkInputBoxes': function(redraw) {
        var i;

        for (i = 0; i < this.inputs.length; i++) {
            this._checkOneBox(this.inputs[i].elem('field'));
        }
        if(typeof redraw !== 'boolean' || redraw !== false) {
            this._setLoad();
        }
    },

    '_checkAll': function() {

        /**
         * проверить изменения в полях ввода
         */
        this._checkInputBoxes(false);

        /**
         * проверить выбран ли чекбокс на вопросах
         */
        this._checkQ5(false);

        /**
         * проверить выбран ли файл
         */
        this._checkAttach(false);

        /**
         * проверить select
         */
        this._checkSelect(false);

        /**
         * проверить отмечено ли согласие на передачу данных
         */
        this._checkAgree(false);


        this._setLoad();
    },
    
    _cntObj: function(obj) {

        var k
            , len = 0
            , filled = 0;

        for (k in obj) {
            if (obj[k]) {
                ++filled;
            }
            ++len;
        }
        return [filled, len];
    }

});

})();
