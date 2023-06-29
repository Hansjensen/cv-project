import React, {Component} from "react";
import '../styles/infoTitle.css'


class InfoTitle extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <div className="infoTitle">
            <h3>{this.props.title}</h3>
        </div>
        )
    }
}

export default InfoTitle;