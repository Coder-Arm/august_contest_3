import React from 'react'
const SingleCard = ({item}) => {
    console.log(item);
  return (
    <div className='single-card'>
      <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title}/>
      <div style={{marginLeft : '45px'}}>
      <h2>{item.volumeInfo.title}</h2>
      <span style={{fontSize : '1.1em',fontWeight : 'bold',opacity : '0.75'}}>{item.volumeInfo.authors}</span>
      <p>{item.volumeInfo.description.substr(0,250)}</p>
      <div style={{marginTop : '25px'}}>
        <span>Avg Rating : {item.volumeInfo.averageRating } | </span>
        <span>Rating Count : {item.volumeInfo.ratingsCount} | </span>
        <span>Publisher : {item.volumeInfo.publisher} | </span>
        <span>Language : {item.volumeInfo.language}</span> 
     </div>
     <div className='publish-date'>
        Published on : {item.volumeInfo.publishedDate}
     </div>
     <div className='btns'>
     <button> <a href ={item.volumeInfo.previewLink} target='_blank'>Now Read!</a></button>
     <button><a href ={item.volumeInfo.infoLink} target='_blank'>More info!</a></button>
     </div>
      </div>
    </div>
  )
}

export default SingleCard
