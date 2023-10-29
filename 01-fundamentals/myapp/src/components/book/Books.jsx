import Book from "./Book"

export default function Books({booksList}) {
    return <div
        className="row row-cols-1 row-cols-md-3 g-4"
    >
        {
            booksList.map((book,index)=>
                <Book 
                    key={index}
                    title = {book.title}
                    imgRef = {book.imgRef}
                    auth = {{
                        name: book.auth.name,
                        lastName : book.auth.lastName
                    }} 
                />
            )
        }
    </div>;
};