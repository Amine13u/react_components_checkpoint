import React from "react";
import './App.css';
import ProfilPhoto from "./Component/Profile/ProfilPhoto.js";
import FullName from "./Component/Profile/FullName.js";
import Address from "./Component/Profile/Address.js"

const alt = "It's me";
const src = "/Image/John-Doe.jpg";
const name = "John Doe";
const address = "123 Main St Anytown, USA";

function App() {
  return (
    <React.Fragment>
      <ProfilPhoto src={src} alt={alt} />
      <FullName name={name} />
      <Address address={address} />
    </React.Fragment>
    
  );
}

export default App;
