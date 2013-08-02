({
	mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: [
        {
            mods: {
                'focused': 'yes',
                'warning': 'yes',
                'checked': 'yes'
            }
        }
    ]
})
