(function() {

var MIN_OFFSET = 10;

BEM.DOM.decl({ name : 'popup', modName : 'direction', modVal : 'fixed' }, {

    _pos : function() {

        var under = this._getUnder(),
            marginLeft = -under.domElem.outerWidth() / 2,
            marginTop = -under.domElem.outerHeight() / 2,
            windowSize = this.__self.getWindowSize();

        under.show({
            left : '50%',
            top : '50%',
            marginLeft : windowSize.width / 2 - MIN_OFFSET + marginLeft < 0?
                -windowSize.width / 2 + MIN_OFFSET :
                marginLeft,
            marginTop : windowSize.height / 2 - MIN_OFFSET + marginTop < 0?
                -windowSize.height / 2 + MIN_OFFSET :
                marginTop
        });

        return this;
    }
});

})();
