(function($) {

var KEYDOWN_EVENT = $.browser.opera? 'keypress' : 'keydown';

BEM.DOM.decl({ name : 'i-popup', modName : 'autoclosable', modVal : 'yes' }, {

    onSetMod : {

        'visibility' : {

            'visible' : function() {

                this.afterCurrentEvent(function() {
                    // Из-за асинхронности, модификатор уже может быть снят
                    // в этот момент, поэтому нужно его еще раз
                    // проверить, чтобы не оказалось "повисших" подписок.
                    if (this.hasMod('visibility', 'visible')) {

                        var under = this._under;

                        this.bindToDoc('leftclick', function(e) {
                                this.containsDomElem($(e.target)) || this._onOutClick(e);
                            })
                            .bindToDoc(KEYDOWN_EVENT, function(e) {
                                // на Escape закрываем
                                e.keyCode == 27 && this.hide();
                            });

                        if (under && under.is('iframe') && this.hasMod(under, 'type', 'paranja')) {

                            // NOTE Предусматривать отвязку не нужно, т.к. после
                            //      вызова метода hide сам элемент (паранжа) удаляется.
                            // NOTE У пустого iframe:
                            //      IE7-8 ловят клик на contentWindow.document
                            //      Другие браузеры ловят только на contentWindow.
                            this.bindToDomElem(
                                $([under[0].contentWindow, under[0].contentWindow.document]),
                                'leftclick',
                                this.hide
                            );
                        }
                    }
                });
                this.__base.apply(this, arguments);

            },

            '' : function() {

                return this
                    .unbindFromDoc('leftclick ' + KEYDOWN_EVENT)
                    .__base.apply(this, arguments);

            }

        }

    },

    _onOutClick : function(domEvent) {

        var e = $.Event('outside-click');
        this.trigger(e, { domEvent : domEvent });
        e.isDefaultPrevented() || this.hide();

    }

});
})(jQuery);