import '../styles/details.css'
import React, {Component} from "react";


class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "123 Fake St",
            address2: "Noncity, CA 12345",
            phone: "1-800-321-4321",
            email: "notanemail@gmail.com",
            edit: false
        }

        this.handleEdit = this.handleEdit.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleAdress2Change = this.handleAdress2Change.bind(this)
        this.handleAdressChange = this.handleAdressChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
    }

    handleEdit (e)  {
        e.preventDefault()
        this.setState(prevState => ({
            edit: !prevState.edit
            })
        )
    }

    handleAdressChange (e) {
        this.setState({
            address: e.target.value
        })
    }

    handleAdress2Change (e) {
        this.setState({
            address2: e.target.value
        })
    }

    handlePhoneChange (e) {
        this.setState({
            phone: e.target.value
        })
    }

    handleEmailChange (e) {
        this.setState({
            email: e.target.value
        })
    }

    render() {

        const { 
            address,
            address2,
            phone,
            email,
            edit

        } = this.state;
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
}


class DetailTitle extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h6 className="detailTitle">{this.props.title}</h6>
    }
}

export default Details;
