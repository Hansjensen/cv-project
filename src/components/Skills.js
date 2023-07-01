import React, {Component, useState} from 'react';
import '../styles/skills.css'
import uniqid from "uniqid"

function Skills () {
    const [skill, setSkill] = useState({title: '', id: uniqid()})
    const [skills, setSkills] = useState([{title: "React", id:23}, {title: "CSS", id:27}, {title: "JavaScript", id:28}, {title: "HTML", id:69}, {title: "Webpack", id:42}, {title: "Git", id:88}])

    const handleAdd = () => {
        if(skill.title === "") {
            return;
        }
        setSkills(skills.concat(skill))
        setSkill({title: '', id: uniqid()})
    }

    const handleChange = (e) => {
        setSkill({title: e.target.value})

    }

    const handleRemove = (e) => {
        setSkills(skills.filter((skill) => skill.title !== e.target.id))
    }

    return (
        <div className="skillsList">
            <SkillsList skills={skills} 
            handleRemove={handleRemove}/>
            
            
                <div id="addDiv">
                  <input type="text" value={skill.title} onChange={handleChange}id="addInput" ></input>
                  <button id="addSkill"  onClick={handleAdd}>Add</button>
                </div>
            

        </div>
    )
}

function SkillsList (props) {

    return <ul className="list">
            {props.skills.map((skill) => {
                return (
                <div className="skillsDiv">
                    <p> {skill.title}</p>
                    <button id={skill.title} onClick={props.handleRemove}> Remove </button>
                </div>)
            })}
        </ul>
}



export default Skills;