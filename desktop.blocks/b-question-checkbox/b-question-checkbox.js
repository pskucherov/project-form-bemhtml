/** @requires BEM */
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
