import React, { useEffect, useState } from 'react';
import './mountain-api.scss';
import HomeNav from '../HomeNav/HomeNav';

const MountainAPI = () => {

    const [mountains, setMountains] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44317/api/mountains')
            .then(res => res.json())
            .then(json => setMountains(json))
            .catch(err => err)
    }, []);

    return (
        <>
            <HomeNav />
            <div className="MountainAPI">
                <div>
                    <h2>Mountains All Around The World</h2>
                </div>
                {mountains.map(mountain => (
                    <div key={mountain.id} className="row">
                        <div className="col-md-12">
                            <p>{mountain.name}</p>
                            <ul>
                                <li>Height: {mountain.height}</li>
                                <li>Color: {mountain.color}</li>
                                <li>Type: {mountain.type}</li>
                                <li>Place: {mountain.place}</li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MountainAPI;