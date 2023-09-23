
import { useContext, useState } from 'react'
import search from '../assets/search.png'
import BookContext from '../context/BookContext'
import axios from 'axios'

const SearchBar = () => {
  let {setBooksData} = useContext(BookContext)
  const [searchTerm,setSearchTerm] = useState('')
  
  function handleData(){
    try{
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
    .then(response => setBooksData(response.data.items))
    }
    catch(error){
   console.log(error.message);
    }
     
  }

    return (
        <div className='search-box'>
            <input type='text' placeholder='Search for the book you want and read it now... Sherlock Holmes, Harry Pot...' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
            <img src={search} alt="search-icon"/>
            <button onClick={handleData}>Search</button>
            </div> 
            
    )
}

export default SearchBar