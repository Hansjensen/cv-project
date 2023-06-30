import React, {Component} from 'react'
import '../styles/Work.css'
import uniqid from "uniqid"

class Work extends Component {
    constructor () {
        super()

        this.state = {
            experience: {
                company: "",
                location:"",
                startDate: "",
                endDate: "",
                position:"",
                job1:"",
                job2:"",
                job3:"",
                id: uniqid()
            },
            experiences: [{
                company: "Mcdonalds Inc",
                location:"Dallas, TX",
                startDate: "Mar 2019",
                endDate: "Current",
                position:"Customer Service Agent",
                job1:"Flip burgers until burgers are cooked then make burger for customer",
                job2:"Try to fix ice cream machine. Never successfully",
                job3:"Ensure fries are salted and crispy because nobody likes soggy fries.",
                id:32

            }],
            add: false
        }

        this.handleRemove = this.handleRemove.bind(this)
        this.handleAddPop = this.handleAddPop.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleCompanyChange = this.handleCompanyChange.bind(this)
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
        this.handlePositionChange =this.handlePositionChange.bind(this)
        this.handleJob1Change = this.handleJob1Change.bind(this)
        this.handleJob2Change = this.handleJob2Change.bind(this)
        this.handleJob3Change = this.handleJob3Change.bind(this)
        this.handleAddWorkSubmit =this.handleAddWorkSubmit.bind(this)
    }

    handleRemove = (e) => {
        this.setState({
            experiences: this.state.experiences.filter((experience) => experience.company !== e.target.id)
        })
    }

    handleAddPop = () => {
        this.setState(prevState => ({
            add: !prevState.add
            }))
            console.log(this.state.add)

    }

    handleCompanyChange = (e) => {
        this.setState({
            experience:{
            company: e.target.value
            }
        }
        )
        
    }
    
    
    handleLocationChange = (e) => {
        this.setState({
            experience:{
            location: e.target.value
            }
        }
        )
        
    }

    handleStartDateChange = (e) => {
        this.setState({
            experience:{
            startDate: e.target.value
            }
        }
        )
        
    }
    
    handleEndDateChange = (e) => {
        this.setState({
            experience:{
            endDate: e.target.value
            }
        }
        )
        
    }

    handlePositionChange = (e) => {
        this.setState({
            experience:{
            position: e.target.value
            }
        }
        )
        
        
    }

    handleJob1Change = (e) => {
        this.setState({
            experience:{
            job1: e.target.value
            }
        }
        )
        console.log(this.state.experience.job1)
        
    }

    handleJob2Change = (e) => {
        this.setState({
            experience:{
            job2: e.target.value
            }
        }
        )
        console.log(this.state.experience.job2)
        
    }

    handleJob3Change = (e) => {
        this.setState({
            experience:{
            job3: e.target.value
            }
        }
        )
        console.log(this.state.experience.job3)
        
    }

    handleAddWorkSubmit = (e) => {
        e.preventDefault()
        this.setState({
            experiences: this.state.experiences.concat(this.state.experience),
            experience: {
                company: "",
                location:"",
                startDate: "",
                endDate: "",
                position:"",
                job1:"",
                job2:"",
                job3:"",
                id: uniqid()
            }
        })
        console.log(this.state.experiences)
        this.setState(prevState => ({
            add: !prevState.add
            }))
        
    }

    


    render() {
        const {add} = this.state
        return (
        <div className="workDiv">
            <WorkList handleRemove={this.handleRemove} experiences={this.state.experiences}/>
            {add && 
                <PopUpAdd 
                    company={this.handleCompanyChange}
                    location={this.handleLocationChange}
                    startDate={this.handleStartDateChange}
                    endDate={this.handleEndDateChange}
                    position={this.handlePositionChange}
                    job1={this.handleJob1Change}
                    job2={this.handleJob2Change}
                    job3={this.handleJob3Change}
                    addWork={this.handleAddWorkSubmit}
                    />}
            <button id="addWorkButt" onClick={this.handleAddPop}>Add Work</button>
        </div>
        
        )
    }
}

class WorkList extends Component {
    constructor(props){
        super(props)
     }



    render() {
        const {experiences} = this.props
        return (
           <ul>
            {experiences.map((experience) => {
            return (
               
            <div className="workEntry">
                <div className="workTitleLoc">
                <p className="company">{experience.company}</p>
                <p>|  {experience.location}</p>
                </div>
                <div className="workPosDate">
                <p className="position">{experience.position}</p>
                <p>|  {experience.startDate} - {experience.endDate}</p>
                
                </div>
                <div className="workDesc">
                    <ul>
                        <li className='desc'>{experience.job1}</li>
                        <li className='desc'>{experience.job2}</li>
                        <li className='desc'>{experience.job3}</li>
                    </ul>
                </div>
                <button className="removeWork" id={experience.company} onClick={this.props.handleRemove}>Remove</button>

            </div>
            
            )
            })}
         </ul> 
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
                <form id="popForm">
                    <label htmlFor="companyInput">Company</label>
                    <input type="text" id="companyInput" onChange={this.props.company}></input>
                    <label htmlFor="locationInput">Location</label>
                    <input type="text" id="locationInput" onChange={this.props.location}></input>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate" onChange={this.props.startDate}></input>
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" id="endDate" onChange={this.props.endDate}></input>
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position" onChange={this.props.position}></input>
                    <label htmlFor="job1">Job Duty</label>
                    <input type="text" id="job1" onChange={this.props.job1}></input>
                    <label htmlFor="job2">Job Duty</label>
                    <input type="text" id="job2" onChange={this.props.job2}></input>
                    <label htmlFor="job3">Job Duty</label>
                    <input type="text" id="job3" onChange={this.props.job3}></input>
                    <button onClick={this.handleAddWorkSubmit}>Add Work</button>
                        
                    
                </form>
            </div>
        )
    }

}

export default Work;