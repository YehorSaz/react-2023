const Character = ({item}) => {

    return (
        <div>
           <div><b>id: {item.id}</b></div>
           <div><b>Name: {item.name}</b></div>
           <div><b>Status: {item.status}</b></div>
           <div><b>Species: {item.species}</b></div>
           <div><b>Gender: {item.gender}</b></div>
           <img src={item.image} alt="image"/>
            <hr/>
            <p></p>
        </div>
    );
}

export default Character;

