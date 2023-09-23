import { useContext } from "react"
import BookContext from "../context/BookContext"


const DisplayBooks = () => {
    const {booksData} = useContext(BookContext)
    // console.log(booksData);
   return (
    <div className="container">
        <h2>More Books</h2>
    {
    booksData.slice(3).map(book =>  (
        book.volumeInfo.imageLinks && <div className="card" onClick={() => window.open( book.volumeInfo.previewLink)} key={book.id}>
                <img src= {book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
            </div>
    
            )
        )
     }
   </div>)
}

export default DisplayBooks