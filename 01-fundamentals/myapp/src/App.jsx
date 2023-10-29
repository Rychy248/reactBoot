import Gretting from "./components/Greeting";
import Sectionalize from "./components/Sectionalize";
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
                                    title : "El Mundo de sofia",
                                    imgRef : null,
                                    auth : {
                                        name: "Jostein",
                                        lastName : "Gardein"
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
                                    title : "El Mito de sísifo",
                                    imgRef : "sisifo.png",
                                    auth : {
                                        name: "Albert",
                                        lastName : "Camus"
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