import { reactive } from 'vue';

export const store = reactive({

    cards: [
        {
            "image": "IMG_1.jpeg",
        },
        {
            "image": "IMG_2.jpeg",
        },
        {
            "image": "IMG_3.jpeg",
        },
        {
            "image": "IMG_4.jpeg",
        },
    ],

    articles: [
        {
            "image": "IMG_1.jpeg",
            "title": "Bla Bla",
            "description": "Lorem ipsum",
        },
        {
            "image": "IMG_2.jpeg",
            "title": "Bla Bla",
            "description": "Lorem ipsum",
        },
        {
            "image": "IMG_3.jpeg",
            "title": "Bla Bla",
            "description": "Lorem ipsum",
        },
        {
            "image": "IMG_4.jpeg",
            "title": "Bla Bla",
            "description": "Lorem ipsum",
        },
        {
            "image": "IMG_5.jpeg",
            "title": "Bla Bla",
            "description": "Lorem ipsum",
        },

    ]
})