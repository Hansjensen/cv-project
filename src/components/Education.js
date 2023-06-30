import React, {Component} from "react";
import "../styles/Education.css"
import uniqid from "uniqid"

class Education extends Component {

    constructor () {
        super()

        this.state = {
            degree: "",
            school: "",
            remark1: "",
            remark2: "",
            id: uniqid(),
            add: false,
            list: [{degree:"Masters Computational Science and Engineering", school: "Harvard", remark1: "Super good grades", remark2: "Barely did any drugs to get the good grades.", id:2}]
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleDegreeChange = this.handleDegreeChange.bind(this)
        this.handleSchoolChange = this.handleSchoolChange.bind(this)
        this.handleRemark1Change = this.handleRemark1Change.bind(this)
        this.handleRemark2Change = this.handleRemark2Change.bind(this)
        this.handleAddPop = this.handleAddPop.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleRemove = (e) => {
        this.setState({
            list: this.state.list.filter((list) => list.degree !== e.target.id)
        })
    }
    handleDegreeChange = (e) => {
        this.setState({
            degree: e.target.value
        })
    }

    handleSchoolChange = (e) => {
        this.setState({
            school: e.target.value
        })
    }

    handleRemark1Change = (e) => {
        this.setState({
            remark1: e.target.value
        })
    }

    handleRemark2Change = (e) => {
        this.setState({
            remark2: e.target.value
        })
    }

    handleAddPop = () => {
        console.log('k')
        this.setState(prevState => ({
            add: !prevState.edit
            }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.setState({
            list: this.state.list.concat({
                degree: this.state.degree,
                school: this.state.school,
                remark1: this.state.remark1,
                remark2: this.state.remark2,
                id: this.state.id,
            }),
            degree: "",
            school: "",
            remark1: "",
            remark2: "",
            id: uniqid(),
        })
        this.setState(prevState => ({
            add: !prevState.add
            }))
    }

    render () {
        
        return (
            <>
            {this.state.add &&
                <PopUpAdd
                    degree={this.handleDegreeChange}
                    school={this.handleSchoolChange}
                    remark1={this.handleRemark1Change}
                    remark2={this.handleRemark2Change}
                    addEdu={this.handleSubmit}/>}
            <div id="edu">
                <EduList
                    list={this.state.list}
                    remove={this.handleRemove}
                />
                <button id="addEduButt" onClick={this.handleAddPop}>Add School</button>
            </div>
            </>
            
        )
    }

}

class EduList extends Component {

    constructor(props) {
        super(props)
    }

    render () {
       
        return (
           <div>
            {this.props.list.map((edu) => {
                return (
                    <div className="eduEntry">  
                        <div className="degreeSchool"><h5>{edu.degree}</h5><h6>{edu.school}</h6></div>
                        <div><p>{edu.remark1} | {edu.remark2}</p></div>
                        <button className="eduRemove" id={edu.degree} onClick={this.props.remove}>Remove</button>
                    </div>
                )
            })}
            </div>
        )
    }

}

class PopUpAdd extends Component {

    constructor (props) {
        super(props)
    }


    render () {

        

        return (
            
         
            <div className="popUpAdd">
                <form id="popForm" >
                    <label htmlFor="degreeInput">Degree</label>
                    <input type="text" id="degreeInput" onChange={this.props.degree}></input>
                    <label htmlFor="schoolInput">School</label>
                    <input type="text" id="schoolInput" onChange={this.props.school}></input>
                    <label htmlFor="remark1Input">Remarks</label>
                    <input type="text" id="remark1Input" onChange={this.props.remark1}></input>
                    <label htmlFor="remark2">Remarks</label>
                    <input type="text" id="remark2Input" onChange={this.props.remark2}></input>
         
                    <button onClick={this.props.addEdu}>Add School</button>
                        
                    
                </form>
            </div>
        )
    }

}

export default Education