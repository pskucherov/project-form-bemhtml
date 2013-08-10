/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-layout-table', {

    onSetMod : {
        'js' : function() {

            BEM.blocks['b-layout-table'].on('show', function(e, name) {
                this.elem('row', 'downrow', name).removeClass('b-layout-table__row_hide_yes');
                this.elem('text', 'upcell', name).removeClass('b-layout-table__text_height_20');
            }, this);

            BEM.blocks['b-layout-table'].on('hide', function(e, name) {
                this.elem('row', 'downrow', name).addClass('b-layout-table__row_hide_yes');
                this.elem('text', 'upcell', name).addClass('b-layout-table__text_height_20');
            }, this);

        }
    }

});

})();
