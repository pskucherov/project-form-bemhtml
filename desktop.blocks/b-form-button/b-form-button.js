BEM.DOM.decl('b-form-button', {

    onSetMod : {

        'js' : function() {

            var disabled = this.isDisabled();

            (this._href = this.domElem.attr('href')) && disabled &&
                this.domElem.removeAttr('href');

            this.elem('input').attr('disabled', disabled);

        },

        'focused' : {

            'yes' : function() {

                if(this.isDisabled())
                    return false;

                this
                    .bindTo('keydown', this._onKeyDown)
                    .elem('input').focus();

            },

            '' : function() {

                this
                    .unbindFrom('keydown')
                    .elem('input').blur();

            }

        },

        'disabled' : function(modName, modVal) {

            var disable = modVal == 'yes';

            this.elem('input').attr('disabled', disable);

            this._href && (disable?
                this.domElem.removeAttr('href') :
                this.domElem.attr('href', this._href));

            disable && this.domElem.keyup();

        },

        'pressed' : function(modName, modVal) {

            this.isDisabled() || this.trigger(modVal == 'yes'? 'press' : 'release');

        },

        'hovered' : {

            '' : function() {

                this.delMod('pressed');

            }

        },

        '*' : function(modName) {

            if(this.isDisabled() && 'hovered pressed'.indexOf(modName) > -1)
                return false;

        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Получение/установка урла (для кнопки-ссылки)
     * @param {String} [val] урл
     */
    url : function(val) {

        if(typeof val == 'undefined') {
            return this._href;
        } else {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');
                    delete this._keyDowned;
                    // делаем переход по ссылке по space
                    if(keyCode == 32 && this.domElem.attr('href')) {
                        document.location = this.domElem.attr('href');
                    }
                });
        }

    },

    _onClick : function(e) {

        this.isDisabled()?
            e.preventDefault() :
            this.afterCurrentEvent(function() {
                this.trigger('click');
            });
    }

}, {

    live : function() {

        var eventsToMods = {
            'mouseover' : { name : 'hovered', val : 'yes' },
            'mouseout' : { name : 'hovered' },
            'mousedown' : { name : 'pressed', val : 'yes' },
            'mouseup' : { name : 'pressed' },
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused' }
        };

        this
            .liveBindTo('leftclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which == 1 && this.setMod(mod.name, mod.val || '');
            });
    }

});
