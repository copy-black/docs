const moment = require('moment')
moment.locale('zh-CN')

module.exports = {
    title: '万物归一',
    description: '万物归一的宝典',
    head: [
        ['link', { rel: 'icon', href: '/asserts/logo.png' }],
        ['meta', { name: 'author', content: '万物归一的宝典' }],
        ['meta', { name: 'keywords', content: '万物归一宝典介绍'}]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    return moment(timestamp).format('LLLL');
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.jpg',
        // sidebar: 'auto',  方式一
        // sidebar: [
        //     '/',
        //     '/about',
        //     '/guide'
        // ], 方式二
        // sidebar: [
        //     '',
        //     'about',
        //     'guide',
        //     {
        //         title: 'Group foo',   // 必要的
        //         path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/foo/one',
        //             '/foo/two'
        //         ]
        //     }
        // ], 方式三
        sidebar: {
            '/foo/': [
                '',     /* /foo/ */
                'one',  /* /foo/one.html */
                'two'   /* /foo/two.html */
            ],
            '/bar/': [
                '',      /* /bar/ */
                'three', /* /bar/three.html */
                'four'   /* /bar/four.html */
            ],
            // fallback
            '/': [
                '',        /* / */
                'about'    /* /about.html */
            ]
        },
        nav: [
            {text: 'Home', link: '/'},
            {text: 'About', link: '/about/'},
            {text: 'foo', link: '/foo/'},
            {text: 'bar', link: '/bar/'},
            {
                text: 'Languages',
                items: [
                    {
                        text: 'Group1', items: [
                            {text: 'Home', link: '/'},
                            {text: 'Guide', link: '/about/'},
                        ]
                    }
                ]
            },
            {text: 'External', link: 'https://google.com'},
        ]
    }
}