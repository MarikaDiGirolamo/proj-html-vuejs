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

    p_datas: [
        "Curabitur non mi et turpis pharetra vuluptate. Cras consequa, rius nec commodo vehicula, nisi est laoreeet leo, ac convallis nisi nibi id velit. Aliquam mattus metus a nisi pretium.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde rem aperiam fugiat mollitia, deleniti autem exercitationem facilis, sunt minima amet itaque aliquam in velit perspiciatis magnam quam dolor voluptatibus doloribus.",
        "Curabitur non mi et turpis pharetra vuluptate. Cras consequa, rius nec commodo vehicula, nisi est laoreeet leo, ac convallis nisi nibi id velit. Aliquam mattus metus a nisi pretium."


    ],

    // icon_lists: [
    //     { id: "fa-regular fa-heart", name: "2032" },
    //     { id: "fa-regular fa-earth-americas", name: "Active Project" },
    //     { id: "fa-solid fa-dollar-sign", name: "Donated" }
    // ],

    articleArr: [
        {
            image: "droplet-solid.svg",
            // color: $newThemeColor,
            title: "Clean Water",
            description: "Nullam convallis, orci in congue aluquet, diamo mauris cursus urna,is mazimus lectus magna maximus.",
        },
        {
            image: "stethoscope-solid.svg",
            title: "Vaccinations",
            description: "Nullam convallis, orci in congue aluquet, diamo mauris cursus urna,is mazimus lectus magna maximus.",
        },
        {
            image: "graduation-cap-solid.svg",
            title: "Education",
            description: "Nullam convallis, orci in congue aluquet, diamo mauris cursus urna,is mazimus lectus magna maximus.",
        },
        {
            image: "wheat-awn-solid.svg",
            title: "Farming",
            description: "Nullam convallis, orci in congue aluquet, diamo mauris cursus urna,is mazimus lectus magna maximus.",
        },

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
        // {
        //     "image": "IMG_1.jpeg",
        //     "title": "Understand Community Complexity",
        //     "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut itaque quos magni eligendi.",
        // },
        {
            "image": "IMG_2.jpeg",
            "title": "The Human Sotry of Uniqueness",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut itaque quos magni eligendi.",
        },
        {
            "image": "IMG_3.jpeg",
            "title": "Sustainable Trade Tattics",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut itaque quos magni eligendi.",
        },
        {
            "image": "IMG_4.jpeg",
            "title": "Farmers Making a Difference",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut itaque quos magni eligendi."
        },
        {
            "image": "IMG_5.jpeg",
            "title": "Meeting Remote Tribes in Perù",
            "text": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa aut itaque quos magni eligendi."
        },

    ]
})