import logo from '../assets/icon.png'
import SearchBar from './SearchBar'
import likedBooks from '../assets/bx_bx-book-heart.png'
import Notification from '../assets/ic_round-notifications-none.png'
import Premium from '../assets/fluent_premium-person-20-regular.png'
import Profile from '../assets/profile.png'
const Nav = () => {

    return (
        <header>
         <nav>
            <div className='nav-left'>
         <img src= {logo} alt='logo'/>
         <span className='logo-name'>
            <span>KeazoN</span><span>Books</span>
            </span>   
         </div> 
           <SearchBar/>
           <div className='nav-right'>
            <img src={likedBooks} alt='liked-books'/>
            <img src={Notification} alt='notify-books'/>
            <img src={Premium} alt='premium-books'/>
            <img src={Profile} alt='profile-logo'/>
           </div>
         </nav>

        </header>
    )
}

export default Nav