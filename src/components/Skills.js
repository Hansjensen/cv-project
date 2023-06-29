import React, {Component} from 'react';
import '../styles/skills.css'
import uniqid from "uniqid"

class Skills extends Component {
    constructor (props) {
        super(props)

        this.state = {
            
            skill: {
                title: "",
                id: uniqid()
            },
            skills: [{title: "React", id:23}, {title: "CSS", id:27}, {title: "JavaScript", id:28}, {title: "HTML", id:69}, {title: "Webpack", id:42}, {title: "Git", id:88}]
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }   

    

    handleChange (e) {
        this.setState({
            skill: {
                title: e.target.value,
                id: this.state.skill.id
            }
        })
    }

    handleAdd () {
        if(this.state.skill.title === "") {
            return;
        }
        this.setState({
            skill: {
                title: "",
                id: uniqid()
            },
            skills: this.state.skills.concat(this.state.skill),
            
        })
    }

    handleRemove (e) {
        
        this.setState({
            skills: this.state.skills.filter((skill) => skill.title !== e.target.id)
        })
    }

    render() {

        const {skills, skill} = this.state
        return (
            <div className="skillsList">
                <SkillsList skills={skills} 
                handleRemove={this.handleRemove}/>
                
                
                    <div id="addDiv">
                      <input type="text" value={skill.title} onChange={this.handleChange}id="addInput" ></input>
                      <button id="addSkill"  onClick={this.handleAdd}>Add</button>
                    </div>
                

            </div>
        )
    }
}

class SkillsList extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {skills} = this.props
        return <ul className="list">
            {skills.map((skill) => {
                return (
                <div className="skillsDiv">
                    <p> {skill.title}</p>
                    <button id={skill.title} onClick={this.props.handleRemove}> Remove </button>
                </div>)
            })}
        </ul>
    }
}

export default Skills;