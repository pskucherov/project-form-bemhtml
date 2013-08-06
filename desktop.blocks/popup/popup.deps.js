({
    mustDeps: [
        { block: 'i-jquery', elems: 'leftclick' },
        { block: 'i-bem', elems: ['dom', 'html'] }
    ],
    shouldDeps: [
        {
            elems: 'shadow',
            mods: {
                'dropdowna': 'yes',
                'theme': 'ffffff',
                'direction': 'fixed'
            }
        },
        { block: 'i-popup', mods : { 'visibility': 'visible' } },
        {
            block: 'i-popup',
            elems: [{
                name: 'under', mods: { color: 'white', type: 'paranja' }
            }]
        }
    ]
})

/*([

    {
        tech: '',
        mustDeps: [
            { block: 'i-jquery', elems: 'leftclick' },
            { block: 'i-bem', elems: ['dom', 'html'] }
        ],
    },

    {
        tech: 'js',
        shouldDeps: [
            {
                block: 'i-popup',
                tech: 'bemhtml'
            },
            {
                block: 'i-popup',
                tech: 'css'
            }
        ]
    }

])*/
