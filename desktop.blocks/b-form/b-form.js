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

            BEM.blocks['b-form'].on('checkFields', this._checkAll, this);

            BEM.blocks['b-form'].on('checkInputBoxes', this._checkInputBoxes, this);
            BEM.blocks['b-form'].on('checkAgree', this._checkAgree, this);
            BEM.blocks['b-form'].on('checkAttach', this._checkAttach, this);
            BEM.blocks['b-form'].on('checkSelect', this._checkSelect, this);

            BEM.blocks['b-form'].on('checkQ5', this._checkQ5, this);

        }
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
        this.findBlockInside('b-progress-bar').findElem('mark').html(filled + ' / ' + num);
    },

    'findInputs': function() {
        this.progress    = this.findBlockInside('b-progress-bar').elem('load');
        this.inputs      = this.findBlocksInside('b-input-box');
        this.checkBox_q5 = this.findBlockInside('b-question-checkbox').findElem('field');
        this.attach      = this.findBlockInside('b-form-attach').findElem('text');
        this.select      = this.findBlockInside('b-form-select').findElem('select');
        this.agree       = this.findBlockInside('b-form-checkbox').findElem('field');
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

    '_checkInputBoxes': function(redraw) {
        var i
            , e
            , fName
        ;

        for (i = 0; i < this.inputs.length; i++ ) {
            e = this.inputs[i];
            fName = e.findElem('field').attr('name');
            if (typeof fName !== 'undefined') {
                if (e.findElem('field').val().length) {
                    this.fillStat[fName] = true;
                } else {
                    this.fillStat[fName] = false;
                    if (fName === 'q5') {
                        this._checkQ5(false);
                    }
                }
            }
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
