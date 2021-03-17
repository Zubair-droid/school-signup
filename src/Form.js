import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import "./Form.css"


function Form() {
    return (
        
        <div className = "formComponent">
           
           <div className = "form-card">
           <div className = "icon">
            <AccountCircleIcon className = "user-icon"/>
           </div>
          
            <form className = "signup-fom">

                <input className = "formInput" type = "text" placeholder = "Email"></input>
                <input className = "formInput" type = "password" placeholder = "Password" required = "true"></input>

                {/* <input className = "formInput" type = "password" placeholder = "Confirm Password" required = "true">

                </input> */}
                <div className = "restore formInput">
              
                   <p>Forgot mail?</p>
                   
                   <hr className = "vertical"></hr>
                  
                   <p>Forgot Password</p>
                  
                </div>
                <button className = "signup-button formInput">Sign in</button>
            </form>
            </div>
        </div>
    )
}

export default Form
