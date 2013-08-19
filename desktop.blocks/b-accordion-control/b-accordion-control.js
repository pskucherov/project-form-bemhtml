/**
 * Свернуть / развернуть вопросы.
 */
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
            /**
             * При клике на кнопку свернуть / развернуть вопрос, меняется содержание кнопки на "+" или "-" (&ndash;)
             * после чего тригерится событие на таблицу, котороая сворачиваеи или разворачивает нужные ячейки
             */
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
            /**
             * Развернуь все вопросы
             */
            .liveBindTo('roll', 'showAll', function() {
                var todo;
                this.delMod('show');
                this.elem('roll').html('&ndash;');
                todo = 'show';
                BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));
            })
            /**
             * Свернуть все вопросы
             */
            .liveBindTo('roll', 'hideAll', function() {
                var todo;
                this.setMod('show', 'yes');
                this.elem('roll').html('+');
                todo = 'hide';
                BEM.blocks['b-layout-table'].trigger(todo, this.getMod('to'));
            })
            /**
             * Открыть определённый вопрос.
             * В отличии от события click - только разворачивает (используется, чтобы развернуть неправильно заполненные
             * вопросы при отправке формы, а если они уже развёрнуты - то ничего с ними не делать)
             */
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
