import React from 'react';

const User = ({user}) => {

    const {id, name, username, email, phone, website} = user;
    const {street, suite, city, zipcode} = user.address;
    const {lat, lng} = user.address.geo;
    const {name: companyName, catchPhrase, bs} = user.company;
    
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>
                <div><b>Address:</b></div>
                <div>street: {street}</div>
                <div>suite: {suite}</div>
                <div>city: {city}</div>
                <div>zipcode: {zipcode}</div>
                <div>
                    <div><b>Geo:</b></div>
                    <div>lat: {lat}</div>
                    <div>lng: {lng}</div>
                </div>
            </div>
            <div>
                <div><b>Company:</b></div>
                <div>companyName: {companyName}</div>
                <div>catchPhrase: {catchPhrase}</div>
                <div>bs: {bs}</div>
            </div>
            <hr/>
        </div>
    );
};

export default User;