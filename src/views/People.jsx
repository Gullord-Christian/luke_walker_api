import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const People = () => {
    const {id} = useParams()
    const [person, setPerson] = useState("")
    useEffect (() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            setPerson(response.data)
        })
        .catch(err =>
            console.log(err))
    }, [id])

    return (
    <fieldset>
        {
            person && 
            <div>
                <h1>{person.name}</h1>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Birth year: {person.birth_year}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Eye Color: {person.eye_color}</p>
            </div>
        }
    </fieldset>
    )
}

export default People