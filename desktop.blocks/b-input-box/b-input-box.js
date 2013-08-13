/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-input-box', {

    onSetMod : {

        'js' : function() {
        }

    }

}, {

    live : function() {
        var eventsToMods = {
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused' }
        };

        this
            .liveBindTo('field', 'focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');

                if (e.type === 'focusout') {
                    BEM.blocks['b-form'].trigger('checkFields', e);
                } else {
                    BEM.blocks['b-form'].trigger('hideError', e);
                }
            })
            .liveBindTo('keyup', function() {
                BEM.blocks['b-form'].trigger('checkInputBoxes');
            })
            .liveBindTo('field', 'focus_warning', function() {
                this.setMod('focused', 'warning');
            })
            .liveBindTo('field', 'del_focus_warning', function() {
                this.delMod('focused');
            })
        ;
    }

});

})();
