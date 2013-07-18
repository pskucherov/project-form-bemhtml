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
            block: 'b-anketa',
            content: [
                {
                       elem: 'title',
                        tag: 'h1',
                    content: 'Анкета второй Школы разработки интерфейсов в Москве'
                },
                {
                    block: 'b-about',
                    content: [
                        { tag: 'p', content: 'Яндекс открывает набор во вторую Школу разработки интерфейсов в Москве.' },
                        { tag: 'p', content: 'Для поступления необходимо заполнить анкету с тестовыми заданиями. Приём заявок закрывается 19 августа в 23:59 по московскому времени. По результатам теста мы пригласим в Школу 30-40 человек.' },
                        { tag: 'p',
                            content: [
                                'Подробности о Школе читайте ',
                                {
                                        tag: 'a', attrs: { href: 'http://events.yandex.ru/shri/' },
                                        url: 'http://bem.info',
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
