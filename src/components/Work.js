import React, {Component} from 'react'
import '../styles/Work.css'
import uniqid from "uniqid"

class Work extends Component {
    constructor () {
        super()

        this.state = {
            
                company: "",
                location:"",
                startDate: "",
                endDate: "",
                position:"",
                job1:"",
                job2:"",
                job3:"",
                id: uniqid(),
            
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
          

    }

    handleCompanyChange = (e) => {
        this.setState({
            
            company: e.target.value
            
        }
        )
        
    }
    
    
    handleLocationChange = (e) => {
        this.setState({
            
            location: e.target.value
            
        }
        )
        
        
    }

    handleStartDateChange = (e) => {
        this.setState({
            
            startDate: e.target.value
            
        }
        )
        
    }
    
    handleEndDateChange = (e) => {
        this.setState({
           
            endDate: e.target.value
            
        }
        )
        
    }

    handlePositionChange = (e) => {
        this.setState({
            
            position: e.target.value
            
        }
        )
        
        
    }

    handleJob1Change = (e) => {
        this.setState({
         
            job1: e.target.value
            
        }
        )
       
        
    }

    handleJob2Change = (e) => {
        this.setState({
           
            job2: e.target.value
            
        }
        )
        
    }

    handleJob3Change = (e) => {
        this.setState({
           
            job3: e.target.value
            
        }
        )
       
        
    }

    handleAddWorkSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            experiences: this.state.experiences.concat({
                company: this.state.company,
                location:this.state.location,
                startDate: this.state.startDate,
                endDate: this.state.endDate,
                position: this.state.position,
                job1:this.state.job1,
                job2:this.state.job2,
                job3:this.state.job3,
                id: this.state.id
            })
        ,
            
                company: "",
                location:"",
                startDate: "",
                endDate: "",
                position:"",
                job1:"",
                job2:"",
                job3:"",
                id: uniqid()
        
        })
        
        this.setState(prevState => ({
            add: !prevState.add
            }))
      
        
    }

    


    render() {
        const {add} = this.state
        return (
            <>
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
        <div className="workDiv">
            <WorkList handleRemove={this.handleRemove} experiences={this.state.experiences}/>
            
            
            <button id="addWorkButt" onClick={this.handleAddPop}>Add Work</button>
            
        </div>
        </>
        
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
           <ul id="experienceList">
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