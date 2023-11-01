import Sectionalize from "./components/Sectionalize";
import Gretting from "./components/Greeting";
import Books from "./components/book/Books";

export default function App() {

    return (
        <div className="container text-center mt-4">
            <Sectionalize
                components={[
                    {Component:Gretting, title:"Hello World!", footer:"First Cad"},
                    {Component:Books, title:"BookList!", footer:null, 
                        argsForComp:{
                            booksList:[
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
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
};
