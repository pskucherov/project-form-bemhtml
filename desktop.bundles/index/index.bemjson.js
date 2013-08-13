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
                },
                {
                    block: 'b-back-top',
                    content: 'Вверх'
                },
                {
                    block: 'b-form',
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
                            block: 'b-progress-bar'
                        },
                        {
                            block: 'b-table',
                            content: [
                                {
                                    block: 'b-question-1-15',
                                    questions: [
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Год рождения.',
                                            error: 'Укажите год рождения.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Город, в котором вы живёте.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Вуз, факультет, специальность, кафедра.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Год окончания вуза.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            content: [
                                                {
                                                    elem: 'strong',
                                                    content: 'Уровень владения английским языком:'
                                                },
                                                {
                                                    block: 'b-question-checkbox',
                                                    fieldName: 'q5_c',
                                                    items: [
                                                        'начальный;',
                                                        'средний;',
                                                        'свободное владение.'
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Чего вы ожидаете от участия в Школе?'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Откуда вы о нас узнали?'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Сколько времени вы были бы готовы уделять стажировке или работе в Яндексе?'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Расскажите о вашем опыте разработки. Нам будет интересно всё &mdash; как серьезный интерфейс, так и просто домашняя страничка.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Если вы где-нибудь работали, расскажите, какие у вас были должностные обязанности и был ли опыт работы в команде.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Перечислите, какими программными продуктами вы пользуетесь в своей работе — от редактора до специализированных утилит (Intellij Idea, Node.js, Uglify.js, GNU Make). Для каждого инструмента укажите, какие задачи вы с помощью него решаете и почему выбрали именно его.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: 'Пользуетесь ли вы командной строкой? Какими командами вы пользуетесь и какие задачи вы решаете с их помощью? С какими программами вы преимущественно или полностью взаимодействуете через интерфейс командной строки?'
                                        },
                                        {
                                            block: 'b-text',
                                            content: [
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Напишите на JavaScript функцию, которая выводит список всех чисел, которые равны сумме факториалов своих цифр. Пример такого числа:'
                                                },
                                                {
                                                    elem: 'p',
                                                    content: '4! + 0! + 5! + 8! + 5! = 40585'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
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
                                            ],
                                            error: 'В ответе должа быть ссылка на один из указанных проектов.'
                                        },
                                        {
                                            block: 'b-text',
                                            content: [
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Вы — пилот грузового межгалактического корабля. Ваша работа — перевозка грузов с одной планету на другую. Грузоподъемность вашего корабля ограничена, поэтому за один рейс вы можете перевезти не более N кг полезного груза. Ваш корабль умеет сообщать свое состояние (местоположение и степень загруженности), а также летать в любую точку пространства. Каждая планета может содержать на себе груз, который можно взять. Также на каждой планете груз можно оставить .'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Задание'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Даны незавершенные интерфейсы корабля и планеты. Напишите недостающий код.'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Полное условие задачи доступно на'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: [
                                                        {
                                                            block: 'b-link',
                                                            url: 'https://github.com/yandex-shri/introtask-space',
                                                            content: 'https://github.com/yandex-shri/introtask-space'
                                                        },
                                                        '.'
                                                    ]
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
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
                                            ],
                                            error: 'В ответе должа быть ссылка на один из указанных проектов.'
                                        },
                                        {
                                            block: 'b-text',
                                            elem: 'p',
                                            mods: { weight: 'bold' },
                                            content: [
                                                'Сверстайте форму-анкету с нашими заданиями для кандидатов. Страница должна работать в следующих браузерах: MSIE (8, 9, 10), Google Chrome (26, 27), Firefox (20, 21), Opera (12.15, 12.14), Яндекс.Браузер 1.5. По возможности используйте приёмы безопасной деградации CSS. Страница должна содержать интерактив, реализованный с помощью JS и jQuery. Это может быть:',
                                                {
                                                    block: 'b-text',
                                                    elem: 'ul',
                                                    content: [
                                                        {
                                                            elem: 'li',
                                                            content: {
                                                                elem: 'strong',
                                                                content: 'проверка полноты и правильности заполнения полей (где это возможно);'
                                                            }
                                                        },
                                                        {
                                                            elem: 'li',
                                                            content: {
                                                                elem: 'strong',
                                                                content: 'возможность свернуть и развернуть разделы (аккордеон);'
                                                            }
                                                        },
                                                        {
                                                            elem: 'li',
                                                            content: {
                                                                elem: 'strong',
                                                                content: 'индикатор заполнения анкеты;'
                                                            }
                                                        },
                                                        {
                                                            elem: 'li',
                                                            content: {
                                                                elem: 'strong',
                                                                content: 'что-нибудь ещё.'
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Подумайте над тем, как эти данные будут отправляться на сервер.'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Будет плюсом, если вы сверстаете страницу, используя БЭМ.'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: 'Дополнительные задания'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: '1. Выполните задание про форму-анкету, используя один из классических шаблонизаторов: Handlebars, mustache, Dust, Jade и т.п.'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
                                                    content: '2. Выполните задание про форму-анкету, используя один из экзотических шаблонизаторов: XSLT, YATE, BEMHTML и т.п.'
                                                },
                                                {
                                                    elem: 'p',
                                                    mods: { weight: 'bold' },
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
                                            ],
                                            error: 'В ответе должа быть ссылка на github.'
                                        }
                                    ]
                                },
                                {
                                    elem: 'title',
                                    mix: [{block: 'b-form', elem: 'title'}],
                                    tag: 'h3',
                                    content: 'Расскажите нам о себе'
                                },
                                {
                                    block: 'b-layout-table',
                                    mods: { layout: 'cells' },
                                    content: [
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: 'Резюме до 250 КБ'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'b-form-attach',
                                                        content: [
                                                            {
                                                                block: 'b-form-button',
                                                                mods: { size: 'm', theme: 'grey-no-transparent-m', valign: 'middle' },
                                                                type: 'file',
                                                                name: 'attachment',
                                                                content: 'Выбрать файл'
                                                            },
                                                            {
                                                                elem: 'holder',
                                                                content: [
                                                                    {
                                                                        block: 'b-icon'
                                                                    },
                                                                    {
                                                                        elem: 'text',
                                                                        content: 'файл не выбран'
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: 'Ссылка на профиль в Моем Круге'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'b-input-box',
                                                        content: {
                                                            elem: 'field',
                                                            tag: 'input',
                                                            attrs: { name: 'mk' }
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: 'Имя, Фамилия'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'b-input-box',
                                                        content: {
                                                            elem: 'field',
                                                            tag: 'input',
                                                            attrs: { name: 'fio' }
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: 'Телефон'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content:
                                                    [
                                                        {
                                                            block: 'b-input-box',
                                                            content: {
                                                                elem: 'field',
                                                                tag: 'input',
                                                                attrs: { name: 'tel' }
                                                            }
                                                        },
                                                        {
                                                            block: 'b-note',
                                                            content: 'Пожалуйста, укажите код города'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: {
                                                        tag: 'strong',
                                                        content: 'E-mail'
                                                    }
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'b-input-box',
                                                            content: {
                                                                elem: 'field',
                                                                tag: 'input',
                                                                attrs: { name: 'email' }
                                                            }
                                                        },
                                                        {
                                                            block: 'b-error',
                                                            mods: { to: 'email' },
                                                            content: 'Неверный адрес электронной почты.'
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell',
                                                    elemMods: { position: 'l' },
                                                    content: 'Дополнительные сведения'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'b-input-box',
                                                        content: {
                                                            elem: 'field',
                                                            mix: [{ block: 'b-input-box', elem: 'field-textarea' }],
                                                            tag: 'textarea',
                                                            attrs: { cols: 80, rows: 4, name: 'moreabout' }
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        tag: 'span',
                                                        content: 'Откуда вы узнали о нашем предложении?'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: [
                                                        {
                                                            block: 'b-form-select',
                                                            name: 'recommend',
                                                            mods: { size: 'm', theme: 'grey' },
                                                            content: [
                                                                {
                                                                    block: 'b-form-button',
                                                                    mods: { valign: 'middle', size: 'm', theme: 'grey-m' },
                                                                    type: 'button',
                                                                    content: 'Выбрать'
                                                                },
                                                                {
                                                                    elem: 'select',
                                                                    content: [
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'no' },
                                                                            content: 'Выбрать'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'от HR-менеджера Яндекса' },
                                                                            content: 'от HR-менеджера Яндекса'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'Я.Субботник' },
                                                                            content: 'Я.Субботник'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'Yet another Conference' },
                                                                            content: 'Yet another Conference'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'из поиска' },
                                                                            content: 'из поиска'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'по рекомендации' },
                                                                            content: 'по рекомендации'
                                                                        },
                                                                        {
                                                                            elem: 'option',
                                                                            attrs: { value: 'other' },
                                                                            content: 'другое'
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }

                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: [
                                                {
                                                    elem: 'cell'
                                                },
                                                {
                                                    elem: 'cell',
                                                    content: {
                                                        block: 'b-agreement',
                                                        name: 'agree',
                                                        value: 1,
                                                        content: 'Я даю свое согласие на передачу в ООО «ЯНДЕКС» резюме и/или анкеты, содержащих мои персональные данные, и согласен с тем, что они будут храниться в ООО «ЯНДЕКС» в течение 5 лет и будут обрабатываться исключительно для целей предложения мне вакансий группы компаний «ЯНДЕКС», в соответствии с Федеральным законом «О персональных данных».',
                                                        error: 'Подтвердите, пожалуйста, своё согласие на передачу анкеты с вашими персональными данными.'
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                elem: 'cell',
                                                colspan: '2'
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                elem: 'cell',
                                                colspan: '2',
                                                elemMods: { type: 'footer' },
                                                content: [
                                                    {
                                                        block: 'b-form-button',
                                                        mods: { theme: 'grey-m', size: 'm', valign: 'middle' },
                                                        mix: [ { block: 'b-form', elem: 'submit-button'} ],
                                                        /*type: 'check-and-send',*/
                                                        content: 'Отправить'
                                                    },
                                                    {
                                                        block: 'b-form-button',
                                                        mods: { theme: 'grey-m', size: 'm', valign: 'middle', padding: 'left' },
                                                        type: 'reset',
                                                        content: 'Очистить'
                                                    }
                                                ]
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                elem: 'cell',
                                                colspan: '2',
                                                content: '&nbsp;'
                                            }
                                        },
                                        {
                                            elem: 'row',
                                            content: {
                                                elem: 'cell',
                                                colspan: '2',
                                                content: '&nbsp;'
                                            }
                                        }
                                    ]
                                }
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
