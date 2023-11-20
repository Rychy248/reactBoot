import Book from "./Book"
import AddBookForm from "./addBook/AddBookForm";

export default function Books({booksList, setBookList}) {
    return (
        <>
            <AddBookForm
                setBookList={setBookList}
            />
            <div className="row row-cols-2 row-cols-md-5 g-4" >
                {
                    booksList.map((book,index)=>
                        <Book 
                            key={index}
                            // title = {book.title}
                            // imgRef = {book.imgRef}
                            // auth = { book.auth} 
                            {...book}
                            number={index + 1}
                        />
                    )
                }
            </div>
        </>
    );
};

