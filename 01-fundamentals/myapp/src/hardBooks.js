import theLostBookShelv from "./imgs/books/thLostBookShop.jpg"

export  let books = [
    {
        title : "One Lost Soul: A chilling British detective crime thriller (The Hidden Norfolk Murder Mystery Series Book 1)",
        imgRef : "./images/books/oneLostSoul.jpg",
        auth : {
            name: "J. M.",
            lastName : "Dalgliesh"
        }
    },
    {
        title : "React BOOK",
        imgRef : "logo192.png",
        auth : {
            name: "Rychy",
            lastName : "Hernández"
        }
    },
    {
        title : "The Democrat Party Hates America",
        imgRef : "./images/books/TheDemocrat.jpg",
        auth : {
            name: "R. Levin",
            lastName : "Mark"
        }
    },
    {
        title : "Never LIE",
        imgRef : "./images/books/NeverLie.jpg",
        auth : {
            name: "Freida",
            lastName : "McFadden"
        }
    },
    {
        title : "The lost BookShop",
        // require is valid option
        // imgRef : require("./imgs/books/thLostBookShop.jpg"),
        imgRef:theLostBookShelv,
        auth : {
            name: "Evie",
            lastName : "Woods"
        }
    }
];
