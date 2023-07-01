import React, {Component} from "react";
import '../styles/Instructions.css'

class Instructions extends Component {

    constructor() {
        super()
    }

    render() {
        return <div id="mainPage">
            <h1>Instructions</h1>
            <h3>Title</h3>
            <p>Hover over the title box and press the Edit Button that appears. Change the name and position and press Edit to save the Changes.</p>
            <h3>Details</h3>
            <p>Hover over the details box and press the Edit button that appears. Change the values and press Edit to save the Changes.</p>
            <h3>Skills</h3>
            <p>Hover over the individual skills and press the Remove button to remove. Enter skill into the text input and press Add to add.</p>
            <h3>Profile</h3>
            <p>Hover over the profile box and press the Edit Button that appears. Change the text and press Edit to save the Changes.</p>
            <h3>Work</h3>
            <p>Hover over individual Jobs and press the Remove button to remove. Press add work to bring up a new form. When form is completed press Add work button to add.</p>
            <h3>Education</h3>
            <p>Hover over individual education entries and press the Remove button to remove. Preas add school to bring up the form. When form is completed press add school button to add.</p>
        </div>
    }
}

export default Instructions;