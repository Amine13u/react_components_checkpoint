import React from "react";

const  ProfilPhoto = (props) => {
    return (
        <img className="photo" src={props.src} alt={props.alt} /> 
    );
}

export default ProfilPhoto;