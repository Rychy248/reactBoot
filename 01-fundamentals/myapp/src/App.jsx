import Sectionalize from "./components/Sectionalize";
import Gretting from "./components/form/Greeting";
import Books from "./components/book/Books";
import { useState } from "react";
import { books } from "./hardBooks";

export default function App() {
    const [booksList, setBookList] = useState(books);

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

