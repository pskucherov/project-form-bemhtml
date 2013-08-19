/**
 * Блок соглашения на передачу и обработку персональных данных.
 * Изменяет состояние чекбокса, при клике на сам блок
 */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-agreement', {

    onSetMod : {
        'js' : function() {

            /**
             * Показать / скрыть ошибку под блоком
             */
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
            /**
             * При клике на блок изменяет состояние чекбокса и устанавливает фокус на элемент
             */
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
