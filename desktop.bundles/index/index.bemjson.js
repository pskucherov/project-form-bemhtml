({
    block: 'b-page',
    title: 'Анкета второй Школы разработки интерфейсов в Москве',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: 'Форма-анкета с заданиями для кандидатов' }}
    ],
    content: [
        {
            block: 'b-questionnaire',
            content: [
                {
                       elem: 'title',
                        tag: 'h1',
                    content: 'Анкета второй Школы разработки интерфейсов в Москве'
                },
                {
                    block: 'b-text',
                    mods: { textstyle: 'head' },
                    content: [
                        { elem: 'p', content: 'Яндекс открывает набор во вторую Школу разработки интерфейсов в Москве.' },
                        { elem: 'p', content: 'Для поступления необходимо заполнить анкету с тестовыми заданиями. Приём заявок закрывается 19 августа в 23:59 по московскому времени. По результатам теста мы пригласим в Школу 30-40 человек.' },
                        { elem: 'p',
                            content: [
                                'Подробности о Школе читайте ',
                                {
                                    block: 'b-link',
                                    url: 'http://events.yandex.ru/shri/',
                                    content: 'на этой странице'
                                },
                                '.'
                            ]
                        }
                    ]
                }
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})
