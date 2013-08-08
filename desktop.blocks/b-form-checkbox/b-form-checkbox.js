/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-form-checkbox', {

    onSetMod : {
        'js' : function() {
        },
        focused: {
            yes: function () {
                this.elem('field').focus()
            },
            '': function () {
                this.elem('field').blur()
            }
        },
        checked: function (b, a) {
            this.elem('field').attr('checked', a == 'yes');
            this.afterCurrentEvent(function () {
                this.trigger('change');
            })
        }
    },
    _onClick: function () {
        this.setMod('focused', 'yes');
    },
    _onChange: function (a) {
        if (a.target.checked) {
            this.setMod('checked', 'yes');
            this.trigger('hideError');
        } else {
            this.delMod('checked');
            this.trigger('showError');
        }
    }

}, {

    live : function() {
        this
            .liveBindTo('field', 'click settick', function (a) {
                this._onClick(a);
            })
            .liveBindTo('field', 'change', function (a) {
                this.delMod('warning');
                this._onChange(a);
                BEM.blocks['b-form'].trigger('checkAgree');
            })
            .liveBindTo('field', 'focusin', function () {
                this.setMod('focused', 'yes');
                this.toggleMod();
            })
            .liveBindTo('field', 'focusout', function (a) {
                this.delMod('focused');
                if (!a.target.checked) {
                    this.setMod('warning', 'yes');
                }
            })
        ;
    }

});

})();
