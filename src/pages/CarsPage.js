import React from 'react';

import {Cars, CarsForm} from "../components";

const CarsPage = () => {

    return (

        <div>
            <h1>Cars Page</h1>
            <div className={'cars-page-info'}>
                <CarsForm/>
                <Cars/>
            </div>
        </div>
    );
};

export default CarsPage;