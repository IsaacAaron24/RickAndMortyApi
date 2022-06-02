import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChaptersInfo from './ChaptersInfo';

const ResidentInfo = ({ characters }) => {

    const [perfil, setPerfil] = useState({})

    useEffect(() => {
        axios.get(characters)
            .then(res => setPerfil(res.data))
    }, [characters])

    console.log(perfil)

    return (
        <div className='col-4 mb-3'>
            <div className="card" style={{ width: "26rem" }}>
                <img src={perfil.image} className="card-img-top" alt={perfil.name} />
                <div className="card-body">
                    <h3 className='card-title'>{perfil.name}</h3>
                    <p> <span className='fw-bold'>  Status:   </span> <span> {perfil.status} </span> </p>
                    <p className='card-text'> <span className='fw-bold'> Specie: </span><span> {perfil.species} </span></p>
                    <p> <span className='fw-bold'>  Origin:  </span> <span> {perfil.origin?.name} </span> </p>
                    <p className='fw-bold'> Episode: </p>
                    {
                        perfil.episode?.map(chapter => (
                            <ChaptersInfo chapter={chapter} key={chapter} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;