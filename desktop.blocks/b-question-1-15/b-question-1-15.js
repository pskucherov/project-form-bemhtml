/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

    BEM.DOM.decl('b-question-1-15', {

        onSetMod : {
            'js' : function() {
                BEM.blocks['b-link'].liveCtxBind(this.elem('accord-opener'), 'click', this._changeAccords, this);
                this.accord = this.findBlocksInside('b-accordion-control');
            }
        },
        _changeAccords : function() {

            var i
                , todo
                , className = 'b-question-1-15__accord-opener_closed_yes'
            ;

            if (this.elem('accord-opener').hasClass(className)) {
                this.elem('accord-opener').removeClass(className);
                todo = 'showAll';
                this.elem('accord-opener').text('Свернуть всё');
            } else {
                todo = 'hideAll';
                this.elem('accord-opener').addClass(className);
                this.elem('accord-opener').text('Развернуть всё');
            }

            for (i = 0; i < this.accord.length; i++) {
                this.accord[i].elem('roll').trigger(todo);
            }

        }

    }, {

        live : function() {
            this.liveInitOnBlockInsideInit('b-link');
        }

    });

})();
