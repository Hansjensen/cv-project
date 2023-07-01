import React, {Component, useState} from "react";
import '../styles/title.css'

function Title() {
        const [userName, setUserName] = useState('Odin Borson')
        const [userTitle, setUserTitle] = useState("Software Engineer")
        const [edit, setEdit] = useState(false)


        const handleToggle = (e) => {
            e.preventDefault()
            setEdit((current) => !current);
          };

        const handleNameChange = (e) => {
            setUserName(e.target.value)
        }

        const handlePositionChange = (e) => {
            setUserTitle(e.target.value)
        }

        return (
            <div className="titleContainer">
             <div className="titleBox">
                <h1 className="nameTitle">{userName}</h1>
                <p className ="positionTitle">{userTitle}</p>
                <button id="editButt" onClick={handleToggle}>EDIT</button>
             </div>
             {edit && <div className="formBox">
                <form > 
                    <label for="nameTitleInput">Name</label>
                    <input defaultValue={userName} onChange={handleNameChange} id="nameTitleInput" ></input>
                    <label for="positionTitleInput">Position</label>
                    <input value={userTitle} onChange={handlePositionChange} id="positionTitleInput"></input>
                    <button onClick={handleToggle}>Edit</button>
                </form>
             </div> }
           
            </div>
        )
}

export default Title;