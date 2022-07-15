import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Starships = () => {
    const {id} = useParams()
    const [starship, setStarships] = useState("")
    useEffect (() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then(response => {
            setStarships(response.data)
        })
        .catch(err =>
            console.log(err))
    }, [id])

    return (
        <fieldset>
            {
                starship && 
                <div>
                    <h1>{starship.name}</h1>
                    <p>Model :{starship.model}</p>
                    <p>Manufacturer: {starship.manufacturer}</p>
                    <p>Crew: {starship.crew}</p>
                    <p>Passengers: {starship.passengers}</p>
                    <p>Hyper Drive Rating: {starship.hyperdrive_rating}</p>
                </div>
            }
        </fieldset>
    )
}

export default Starships