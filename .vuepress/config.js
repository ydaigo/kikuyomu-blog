module.exports = {
    "title": "きくよむのブログ",
    "description": "技術系の記事を中心に書いていきます。",
    "dest": "public",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    locales: {
        '/': {
            lang: 'ja-JP',
        },
    },
    "themeConfig": {
        noFoundPageByTencent: false,
        "nav": [{
                "text": "Home",
                "link": "/",
                "icon": "reco-home"
            },

            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [{
                    "text": "GitHub",
                    "link": "https://github.com/ydaigo",
                    "icon": "reco-github"
                }]
            }
        ],
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "Category"
            },
            "tag": {
                "location": 3,
                "text": "Tag"
            }
        },
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "daigo",
        "authorAvatar": "/avatar.png",
        "startYear": "2021"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        [
            '@vuepress-reco/vuepress-plugin-kan-ban-niang', {
                theme: [
                    'blackCat', 'whiteCat', 'wanko',
                ],
                clean: true,
                modelStyle: { left: '30px', bottom: '-20px' },
                width: 25 * 5,
                height: 32 * 5
            }
        ],
        'vuepress-plugin-mermaidjs'
    ],
}
