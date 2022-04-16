import React from 'react'
import '../css/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
   return (

      // Header
      <div className='header'>

         {/* header img */}
         <img className='header_logo'
            src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
         />

         {/* header search */}
         <div className='header_search'>
            <input className='header_search_input' type='text' />
            <SearchIcon className='header_search_icon' />
         </div>

         {/* header navbar */}
         <div className='header_nav'>

            <div className='header_option'>

               <span className='header_option_line_one'>hello</span>
               <span className='header_option_line_two'>sign in</span>

            </div>

            <div className='header_option'>

               <span className='header_option_line_one'>Return</span>
               <span className='header_option_line_two'> and Orders</span>


            </div>

            <div className='header_option'>

               <span className='header_option_line_one'>your</span>
               <span className='header_option_line_two'>prime</span>

            </div>
            
            <div className='header_option_basket'>
                  <ShoppingCartIcon/>
                  <span className='header_option_line_two header_basket_count'>
                        0
                  </span>
            </div>

         </div>

      </div>
   )
}

export default Header