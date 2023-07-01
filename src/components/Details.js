import '../styles/details.css'
import React, {Component, useState} from "react";

function Details () {
    const [address, setAddress] = useState("123 Fake St");
    const [address2, setAddress2] = useState ("Noncity, CA 12345")
    const [phone, setPhone] = useState("1-800-321-4321");
    const [email, setEmail] = useState("notanemail@gmail.com")
    const [edit, setEdit] = useState(false)

    const handleToggle = (e) => {
        setEdit((current) => !current)
    } 

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value)
    }

    const handleAddress2Change = (e) => {
        setAddress2(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    return (
    <div className="details">
            <DetailTitle title="Address" />
                <div className="infoBox">
                { !edit &&
                   <div> 
                    <p>{address}</p>
                    <p>{address2}</p>
                </div>}

                {edit && 
                    <form>
                        <input defaultValue={address} onChange={this.handleAdressChange} className="editInput"></input>
                        <input defaultValue={address2} onChange= {this.handleAdress2Change} className="editInput"></input>
                    </form>}
                </div>
            <DetailTitle title="Phone" />
               
                {!edit &&
                <p>{phone}</p>}
                {edit &&

                    <input defaultValue={phone} onChange={this.handlePhoneChange} className="editInput"></input>}
                
            <DetailTitle title="Email" />
                {!edit &&
                <p>{email}</p>}
                {edit &&
                <input defaultValue={email} onChange={this.handleEmailChange} className="editInput"></input>}
            <button className="editButt" onClick={this.handleEdit}>Edit</button>
        </div>
        )
}

function DetailTitle() {
    return <h6 className="detailTitle">{this.props.title}</h6>
}




export default Details;
