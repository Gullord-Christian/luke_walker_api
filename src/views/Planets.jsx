import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

const Planets = () => {
    const {id} = useParams()
    const [planet, setPlanets] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then (response =>  {
            setPlanets(response.data)
        })
        .catch(err => 
            console.log(err))
    }, [id])


    return (
    <fieldset>
        {
            planet &&
            <div>
                <h1>{planet.name}</h1>
                <p>Climate: {planet.climate}</p>
                <p>Gravity: {planet.gravity}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
        }
    </fieldset>
    )
}

export default Planets