import Sectionalize from "./components/Sectionalize";
import Gretting from "./components/form/Greeting";
import Books from "./components/book/Books";
import { useState } from "react";

export default function App() {
    const [booksList, setBookList] = useState([
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
        }
    ]);

    return (
        <div className="container text-center mt-4">
            <Sectionalize
                components={[
                    {
                        Component:Gretting,
                        cardLayout:{ title:"Hello World!", footer:"First Cad"}
                    },
                    {
                        Component:Books,
                        cardLayout:{ title:"BookList!", footer:"Awesome books"}, 
                        argsForComp:{
                            booksList:booksList,
                            setBookList:setBookList
                        }
                    }
                ]}
            />
        </div>
    );
};

