import React, {useEffect, useState} from 'react';
import Mission from "../mission/Mission";


const Missions = () => {

    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(allMissions => {
                setMissions(allMissions);
            });
    }, []);


    return (

        <div>
            {
                missions.map((value, index) =>
                <Mission
                value={value}
                key={index}/>
                )
            }
        </div>
    );
};

export default Missions;