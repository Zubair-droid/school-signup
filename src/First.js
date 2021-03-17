import React from 'react'
import "./First.css"
// import LibraryBooksRoundedIcon from '@material-ui/icons/LibraryBooksRounded';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
function First() {
    return (
        <div className = "firstComponent">
             <div className = "container">
           
             <div className = "icon">
               <SchoolRoundedIcon className = "book-icon" />
             </div>

            <div className = "schoolNameText">
            <h2 className = "h2Text">Skyline School of Development</h2>
            </div>
           
            
              
            </div>
        </div>
    )
}

export default First
