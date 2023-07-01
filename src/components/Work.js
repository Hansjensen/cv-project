import React, {Component, useState} from 'react'
import '../styles/Work.css'
import uniqid from "uniqid"
function Work () {
    const [company, setCompany] = useState("")
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [position, setPosition] = useState("")
    const [job1, setJob1] = useState("")
    const [job2, setJob2] = useState("")
    const [job3, setJob3] = useState("")
    const [id, setId] = useState(uniqid())
    const [experiences, setExperiences] = useState([{
        company: "Mcdonalds Inc",
        location:"Dallas, TX",
        startDate: "Mar 2019",
        endDate: "Current",
        position:"Customer Service Agent",
        job1:"Flip burgers until burgers are cooked then make burger for customer",
        job2:"Try to fix ice cream machine. Never successfully",
        job3:"Ensure fries are salted and crispy because nobody likes soggy fries.",
        id:32

    }, {
        company: "Burger King",
        location:"Dallas, TX",
        startDate: "Dec 2015",
        endDate: "Mar 2019",
        position:"Customer Service Agent",
        job1:"Flip burgers until burgers are cooked then make burger for customer",
        job2:"Try to fix ice cream machine. Never successfully",
        job3:"Ensure fries are salted and crispy because nobody likes soggy fries.",
        id:33

    }])
    const [add, setAdd] = useState(false)

    const handleRemove = (e) => {

        setExperiences(experiences.filter((experience) => experience.company !== e.target.id))

    }

    const handleAddPop = () => {

        setAdd((current) => !current)

    }

    const handleLocationChange = (e) => {
            setLocation(e.target.value)
    }

    const handleCompanyChange = (e) => {

        setCompany(e.target.value)

    }

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
    }

    const handleEndDateChange = (e) => {
        setEndDate(e.target.value)
    }

    const handlePositionChange = (e) => {
        setPosition(e.target.value)
    }

    const handleJob1Change = (e) => {
        setJob1(e.target.value)
    }

    const handleJob2Change = (e) => {
        setJob2(e.target.value)
    }

    const handleJob3Change = (e) => {

        setJob3(e.target.value)
        
    }

    const handleAddWorkSubmit = () => {
        setExperiences(  experiences.concat({
            company: company,
            location: location,
            startDate: startDate,
            endDate: endDate,
            position: position,
            job1: job1,
            job2: job2,
            job3:job3,
            id: id
        }))
        setCompany("")
        setLocation("")
        setStartDate("")
        setEndDate("")
        setPosition("")
        setJob1("")
        setJob2("")
        setJob3("")
        setId(uniqid())
        handleAddPop()
    }

    return (
        <>
        {add && 
            <PopUpAdd 
                company={handleCompanyChange}
                location={handleLocationChange}
                startDate={handleStartDateChange}
                endDate={handleEndDateChange}
                position={handlePositionChange}
                job1={handleJob1Change}
                job2={handleJob2Change}
                job3={handleJob3Change}
                addWork={handleAddWorkSubmit}
                />}
    <div className="workDiv">
        <WorkList handleRemove={handleRemove} experiences={experiences}/>
        
        
        <button id="addWorkButt" onClick={handleAddPop}>Add Work</button>
        
    </div>
    </>
    
    )
}

function WorkList (props) {
    return (
        <ul id="experienceList">
         {props.experiences.map((experience) => {
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
             <button className="removeWork" id={experience.company} onClick={props.handleRemove}>Remove</button>

         </div>
         
         )
         })}
      </ul> 
     )
}


function popUpAdd (props) {
    return (
            
         
        <div className="popUpAdd">
            <form id="popForm" >
                <label htmlFor="companyInput">Company</label>
                <input type="text" id="companyInput" onChange={props.company}></input>
                <label htmlFor="locationInput">Location</label>
                <input type="text" id="locationInput" onChange={props.location}></input>
                <label htmlFor="startDate">Start Date</label>
                <input type="text" id="startDate" onChange={props.startDate}></input>
                <label htmlFor="endDate">End Date</label>
                <input type="text" id="endDate" onChange={props.endDate}></input>
                <label htmlFor="position">Position</label>
                <input type="text" id="position" onChange={props.position}></input>
                <label htmlFor="job1">Job Duty</label>
                <input type="text" id="job1" onChange={props.job1}></input>
                <label htmlFor="job2">Job Duty</label>
                <input type="text" id="job2" onChange={props.job2}></input>
                <label htmlFor="job3">Job Duty</label>
                <input type="text" id="job3" onChange={props.job3}></input>
                <button onClick={props.addWork}>Add Work</button>
                    
                
            </form>
        </div>
    )
}


class PopUpAdd extends Component {

    constructor (props) {
        super(props)
    }

    preventDefault(e) {
        e.preventDefault()
    }

    render () {

        

        return (
            
         
            <div className="popUpAdd">
                <form id="popForm" >
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
                    <button onClick={this.props.addWork}>Add Work</button>
                        
                    
                </form>
            </div>
        )
    }

}

export default Work;