import React, {useState} from 'react';
import '../styles/Profile.css'

function Profile() {

    const [profile, setProfile] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    const [edit, setEdit] = useState(false)

    const handleEdit = () => {
        setEdit((current) => !current)
    }

    const handleChange = (e) => {
        setProfile(e.target.value)
    }

    return (
        <div id="profileText">
            {!edit &&
                <p>{profile}</p>
                }
            <button id="editProfile" onClick={handleEdit}>Edit</button>
            {edit && 
                <textarea value={profile} id="textArea" onChange={handleChange}></textarea>
                }
        </div>
    )

}



export default Profile;