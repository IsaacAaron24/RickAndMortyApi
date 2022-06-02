import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';
import image from '../image/morty.png'

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("")

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))
    }, [])

    const search = () => {
        if (id <= 126) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`)
                .then(res => setLocation(res.data))
        } else {
            alert("ID limit is 126")
        }
    }

    console.log(location)

    return (
        <div className='container'>
            <div> <img src={image} className="img-fluid" alt="" /> </div>
            <h1 className='text-center my-3'>{location.name}</h1>
            <div className='row'>
                <div className='col'>
                    <p><b>Type: </b> {location.type}</p>
                </div>
                <div className='col'>
                    <p><b>Dimension: </b> {location.dimension}</p>
                </div>
                <div className='col'>
                    <p><b>Residents: </b> {location.residents?.length}</p>
                </div>
            </div>
            <div className='d-flex justify-content-end mb-4' >
                <input
                    type="text"
                    onChange={e => setId(e.target.value)}
                    value={id}
                    className="form-control w-25 me-2"
                    placeholder='Buscar'
                />
                <button onClick={search} className='btn btn-primary'>
                    Search
                </button>
            </div>
            <div className='mt-3 row'>
                {
                    location.residents?.map(characters => (
                        <ResidentInfo characters={characters} key={characters} />
                    ))
                }
            </div>
        </div>
    );
};

export default Location;