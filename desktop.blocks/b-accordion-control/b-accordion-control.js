/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-accordion-control', {

    onSetMod : {
        'js' : function() {

        }
    }

}, {

    live : function() {

        this
            .liveBindTo('roll', 'click', function() {

                var todo = '';
                if (this.hasMod('show', 'yes')) {
                    this.delMod('show');
                    this.elem('roll').html('&ndash;');
                    todo = 'show';
                } else {
                    this.setMod('show', 'yes');
                    this.elem('roll').html('+');
                    todo = 'hide';
                }

                BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));

            })
        ;
    }

});

})();
