import React, { useContext, useState } from 'react'
import BookContext from '../context/BookContext'
import SingleCard from './SingleCard';
const HeaderBooks = () => {
    const [clicked,setClicked] = useState(false);
    const [item,setItem] = useState('');
    const {booksData} = useContext(BookContext);

    function cardHandler(item){
        setClicked(true);
        setItem(item)
    }

  return (
    <div className='main-header'>
     {
       !clicked && booksData.slice(0,3).map((item,idx) => {
            return (
                <div className='header-card' key={idx}>
                    <img src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title}/>
                    <div style={{marginLeft : '20px'}}>
                        <h3>{item.volumeInfo.title}</h3>
                        <p>{item.volumeInfo.description?.substr(0,100)}</p>
                        <button onClick={() => cardHandler(item)}>Now Read!</button>
                    </div>
                </div>
            )
        })
     } 
     {
        clicked && <SingleCard item={item}/>
     }
    </div>
  )
}

export default HeaderBooks
