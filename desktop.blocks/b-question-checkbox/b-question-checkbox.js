/**
 * Чекбоксы, используемые внутри формы. (В вопросе №5).
 * При клике на вопрос - тригерится проверка поля для перерисовки прогресс-бара
 */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-question-checkbox', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        this
            .liveBindTo('click', function() {
                BEM.blocks['b-form'].trigger('checkQ5');
            })
        ;
    }

});

})();
