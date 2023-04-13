import React from 'react';

const Mission = ({value}) => {
    if (+value.launch_year < 2020 || +value.launch_year > 2020)
    return (

        <div className={'mission-out'}>
            
                Mission name: {value.mission_name}<br/>
                Launch year: {value.launch_year}<br/>

            <div className={'img-div'}>
                <img src={value.links.mission_patch_small} alt="{value.mission_name}" className={'img-size'}/>
            </div>
            
        </div>

    );
};

export default Mission;