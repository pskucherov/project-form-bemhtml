({
	mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: [
        {
            block: 'b-form-checkbox',
            mods: {
                'focused': 'yes',
                'warning': 'yes',
                'checked': 'yes'
            }
        },
        {
            elem: 'error'
        }
    ]
})
