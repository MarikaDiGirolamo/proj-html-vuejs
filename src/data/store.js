import { reactive } from 'vue';

export const store = reactive({


    // navLinks: [
    //     "Home",
    //     "Mission",
    //     "Causes",
    //     "Journal"

    // ],

    drops: [
        "First Choise",
        "Second Choise",
        "Third Choise",
    ],

    buttons: [
        "Our Mission",
        "Donate"
    ],

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