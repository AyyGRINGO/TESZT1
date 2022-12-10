import React from "react";
import { useState, useEffect } from "react";

const userCard = ({avatar_url, login, type, site_admin, inputData})=>{

    const [buttonText, setButtonText] = useState(true)

    const buttonToggle = ()=>{
        setButtonText(prevState=>!prevState)
    }
    return(
        <div className="imageContainer">
            <img src={avatar_url} alt="teszt" />
            <p>{login}</p>
            <button onClick={buttonToggle}>{buttonText? "show more": "show less"}</button>
            {(!buttonText)&&<p>Rank: {type}</p>}
            {(!buttonText)&&<p>Admin: {site_admin? "true": "false"}</p>}
        </div>
    )

}

export default userCard