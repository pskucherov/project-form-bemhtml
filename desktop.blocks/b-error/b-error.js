/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-error', {

    onSetMod : {

        'js' : function() {
            /* ... */
        }

    }

}, {

    live : function() {
        /* ... */
    },

    'verification': function(name, val) {
        var tests = {};
        tests['agree'] = true;
        tests['q1'] = true;
        tests['email'] = true;
        tests['q13'] = true;
        tests['q14'] = true;
        tests['q15'] = true;


        if (typeof val === 'undefined') {
            if (tests[name] === true) {
                return true;
            } else {
                return false;
            }
        } else {

            if (tests[name] === true) {
                switch(name) {

                    case 'q1':
                        val = parseInt(val, 10);
                        if ( val && val >= 1828 && val <= 2000 ) {
                            return true;
                        }
                        return false;
                        break;

                    case 'agree':
                        if ( !!(val) === true) {
                            return true;
                        }
                        return false;
                        break;

                    case 'email':
                        return (/^([a-z0-9_-]+.)*[a-z0-9_-]+@([a-z0-9][a-z0-9-]*[a-z0-9].)+[a-z]{2,4}$/i).test(val);
                        break;

                    case 'q13':
                    case 'q14':
                        if ((/github\.com/im).test(val) || (/jsfiddle\.net/im).test(val)) {
                            return true;
                        }
                        return false;
                        break;
                    case 'q15':
                        return (/github\.com/im).test(val);
                        break;
                }
            }
            return false;
        }
    }

});

})();
