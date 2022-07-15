import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const HeaderForm = () => {
    const [people, setPeople] = useState("");
    const [id, setId] = useState ("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${people}/${id}`)
    }

    return (
    <>
        <fieldset>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select name="people" value={people} onChange={e=> setPeople(e.target.value)}>
                    <option hidden></option>
                    <option>People</option>
                    <option>Planets</option>
                    <option>Starships</option>
                </select>
                <label>Id: </label>
                <input type="number" name="id" onChange={e => setId(e.target.value)}/>
                <button type="submit" style={{backgroundColor:"teal", color: "white"}}> Search </button>
            </form>
        </fieldset>
    </>
    )
}

export default HeaderForm