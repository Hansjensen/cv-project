import React, {Component} from "react";
import '../styles/title.css'

class Title extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "Hans Jensen",
            userTitle: "Software Engineer",
            edit: false
          };
        
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleSubmitClick = this.handleSubmitClick.bind(this)
        this.handlePositionChange = this.handlePositionChange.bind(this)
        this.handleNameChange = this.handleNameChange.bind(this)
    
    }

    handleEditClick () {
        this.setState({
            userName: this.state.userName,
            userTitle:this.state.userTitle,
            edit: true
        });
    }

    handleSubmitClick (e) {

        e.preventDefault()
        this.setState({
            edit: false
        })


    }

    handleNameChange (e) {

        this.setState({
            userName: e.target.value
        })

    }

    handlePositionChange (e) {

        this.setState({
            userTitle: e.target.value
        })
    }


    render() {
        const {userName, userTitle, edit} = this.state

        return (
            <div className="titleContainer">
             <div className="titleBox">
                <h1 className="nameTitle">{userName}</h1>
                <p className ="positionTitle">{userTitle}</p>
                <button id="editButt" onClick={this.handleEditClick}>EDIT</button>
             </div>
             {edit && <div className="formBox">
                <form > 
                    <label for="nameTitleInput">Name</label>
                    <input defaultValue={userName} onChange={this.handleNameChange} id="nameTitleInput" ></input>
                    <label for="positionTitleInput">Position</label>
                    <input value={userTitle} onChange={this.handlePositionChange} id="positionTitleInput"></input>
                    <button onClick={this.handleSubmitClick}>Edit</button>
                </form>
             </div> }
           
            </div>
        )
    }
}

export default Title;