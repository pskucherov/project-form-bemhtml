({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: {
        elems: 'under',
        mods: {
            'visibility': 'visible',
            'autoclosable': 'yes'
        }
    }
})
