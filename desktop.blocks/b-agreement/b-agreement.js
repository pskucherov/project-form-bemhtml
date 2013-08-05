/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-agreement', {

    onSetMod : {
        'js' : function() {

            var er = this.findElem('error');
            BEM.blocks['b-form-checkbox'].on('showError', function() {
                er.addClass("b-agreement__error_visible_yes");
            });
            BEM.blocks['b-form-checkbox'].on('hideError', function() {
                er.removeClass("b-agreement__error_visible_yes");
            });

        }
    }

}, {

    live : function() {

        this.liveInitOnBlockInsideInit('b-form-checkbox');

        this
            .liveBindTo('e-text', 'click', function () {
                var field = this.findBlockInside('b-form-checkbox').findElem('field');
                if (field.attr('checked') === 'checked') {
                    field.removeAttr('checked');
                } else {
                    field.attr('checked', 'checked');
                }
                field
                    .trigger('focusin')
                    .trigger('change');
            })
        ;

    }

});

})();
