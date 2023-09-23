import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookContext from "./BookContext";
const BookProvider = ({children}) => {
    const [booksData,setBooksData] = useState([]);
    useEffect(()=> {
        async function fetchData(){
      const harryPotterBooksResponse =  await axios.get("https://www.googleapis.com/books/v1/volumes?q=harry+potter");
    
     const sherlockHolmesBooksResponse =  await axios.get("https://www.googleapis.com/books/v1/volumes?q=sherlock+holmes")
        const harryPotterBooks = harryPotterBooksResponse.data.items
        const sherlockHolmesBooks = sherlockHolmesBooksResponse.data.items;
        const combinedData = [...harryPotterBooks,...sherlockHolmesBooks];
        setBooksData(combinedData);
        }
        fetchData();
       
    },[])
  
   

    return (
        <BookContext.Provider value={{booksData,setBooksData}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider