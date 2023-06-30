import React, {Component} from 'react'
import '../styles/Work.css'
import uniqid from 'uniqid'

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
                id: 21
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

    render() {
        const {add} = this.state
        return (
        <div className="workDiv">
            <WorkList handleRemove={this.handleRemove} experiences={this.state.experiences}/>
            {add && 
                <PopUpAdd />}
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
                    <input type="text" id="companyInput"></input>
                    <label htmlFor="locationInput">Location</label>
                    <input type="text" id="locationInput"></input>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" id="startDate"></input>
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" id="endDate"></input>
                    <label htmlFor="position">Position</label>
                    <input type="text" id="position"></input>
                    <label htmlFor="job1">Job Duty</label>
                    <input type="text" id="job1"></input>
                    <label htmlFor="job2">Job Duty</label>
                    <input type="text" id="job2"></input>
                    <label htmlFor="job3">Job Duty</label>
                    <input type="text" id="job3"></input>
                    <button>Add Work</button>
                        
                    
                </form>
            </div>
        )
    }

}

export default Work;