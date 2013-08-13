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
            .liveBindTo('roll', 'showAll', function() {
                var todo;
                this.delMod('show');
                this.elem('roll').html('&ndash;');
                todo = 'show';
                BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));
            })
            .liveBindTo('roll', 'hideAll', function() {
                var todo;
                this.setMod('show', 'yes');
                this.elem('roll').html('+');
                todo = 'hide';
                BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));
            })
            .liveBindTo('roll', 'open', function() {
                var todo;
                if (this.hasMod('show', 'yes')) {
                    this.delMod('show');
                    this.elem('roll').html('&ndash;');
                    todo = 'show';
                    BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));
                }
            })
        ;

    }

});

})();
