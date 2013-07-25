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
                                    block: 'b-link',
                                    url: 'http://events.yandex.ru/shri/',
                                    content: 'на этой странице'
                                },
                                '.'
                            ]
                        }
                    ]
                },
                {
                    block: 'b-form',
                      tag: 'form',
                    attrs:
                        {
                             method:'post',
                            enctype:'multipart/form-data'
                        },
                    content: [
                        {
                            elem: 'title',
                            tag: 'h3',
                            content: 'Заполните анкету'
                        },
                        {
                              block: 'b-form-table',
                                tag: 'table',
                            content: [
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Год рождения.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Город, в котором вы живёте.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Вуз, факультет, специальность, кафедра.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Год окончания вуза.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: 'Уровень владения английским языком:'
                                        },
                                        {
                                            block: 'b-question-checkbox',
                                            fieldName: 'q5',
                                            items: [
                                                'начальный;',
                                                'средний;',
                                                'свободное владение.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Чего вы ожидаете от участия в Школе?'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Откуда вы о нас узнали?'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Расскажите о вашем опыте разработки. Нам будет интересно всё &mdash; как серьезный интерфейс, так и просто домашняя страничка.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: 'Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?'
                                    }
                                },
                                {
                                    block: 'b-question',
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: 'Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:'
                                        },
                                        {
                                            tag: 'p',
                                            content: '4! + 0! + 5! + 8! + 5! = 40585'
                                        },
                                        {
                                            tag: 'strong',
                                            content: [
                                                'В качестве ответа на вопрос пришлите ссылку на ',
                                                {
                                                    block: 'b-link',
                                                    url: 'http://jsfiddle.net/',
                                                    content: 'http://jsfiddle.net/'
                                                },
                                                ' с вашим кодом или на ваш репозиторий на ',
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/',
                                                    content: 'https://github.com/'
                                                },
                                                '.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-question',
                                    content: [
                                        {
                                            tag: 'strong',
                                            content: 'Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить .'
                                        },
                                        {
                                            tag: 'strong',
                                            content: {
                                                tag: 'p',
                                                content: 'Задание'
                                            }
                                        },
                                        {
                                            tag: 'strong',
                                            content: {
                                                tag: 'p',
                                                content: 'Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.'
                                            }
                                        },
                                        {
                                            tag: 'strong',
                                            content: {
                                                tag: 'p',
                                                content: 'Полное условие задачи доступно на'
                                            }
                                        },
                                        {
                                            tag: 'strong',
                                            content: {
                                                tag: 'p',
                                                content: [
                                                    {
                                                        block: 'b-link',
                                                        url: 'https://github.com/yandex-shri/introtask-space',
                                                        content: 'https://github.com/yandex-shri/introtask-space'
                                                    },
                                                    '.'
                                                ]
                                            }
                                        },
                                        {
                                            tag: 'strong',
                                            content: [
                                                'В качестве ответа на вопрос пришлите ссылку на ',
                                                {
                                                    block: 'b-link',
                                                    url: 'http://jsfiddle.net/',
                                                    content: 'http://jsfiddle.net/'
                                                },
                                                ' с вашим кодом или на ваш репозиторий на ',
                                                {
                                                    block: 'b-link',
                                                    url: 'https://github.com/',
                                                    content: 'https://github.com/'
                                                },
                                                '.'
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'b-question',
                                    content: {
                                        tag: 'strong',
                                        content: [
                                            'Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:',
                                            {
                                                block: 'b-text',
                                                elem: 'ul',
                                                content: [
                                                    {
                                                        elem: 'li',
                                                        content: {
                                                            elem: 'p',
                                                            content: 'проверка полноты и правильности заполнения полей (где это возможно);'
                                                        }
                                                    },
                                                    {
                                                        elem: 'li',
                                                        content: {
                                                            elem: 'p',
                                                            content: 'возможность свернуть и развернуть разделы (аккордеон);'
                                                        }
                                                    },
                                                    {
                                                        elem: 'li',
                                                        content: {
                                                            elem: 'p',
                                                            content: 'индикатор заполнения анкеты;'
                                                        }
                                                    },
                                                    {
                                                        elem: 'li',
                                                        content: {
                                                            elem: 'p',
                                                            content: 'что-нибудь ещё.'
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Подумайте над тем, как эти данные будут отправляться на сервер.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Будет плюсом, если вы сверстаете страницу, используя БЭМ.'
                                            },
                                            {
                                                tag: 'p',
                                                content: 'Дополнительные задания'
                                            },
                                            {
                                                tag: 'p',
                                                content: '1. Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.'
                                            },
                                            {
                                                tag: 'p',
                                                content: '2. Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.'
                                            },
                                            {
                                                tag: 'p',
                                                content: [
                                                    'Разработку необходимо вести на ',
                                                    {
                                                        block: 'b-link',
                                                        url: 'https://github.com/',
                                                        content: 'https://github.com/'
                                                    },
                                                    '. В качестве ответа на вопрос пришлите ссылку на проект.'
                                                ]
                                            }
                                        ]
                                    }
                                },
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
