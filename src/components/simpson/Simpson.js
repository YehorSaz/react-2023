const Simpson = ({item}) => {
    return (
        <div>
            <div><h2>{item.name} {item.surname}</h2></div>
            <div><h3>Age - {item.age}</h3></div>
            <div>{item.info}</div>
            <img src={item.photo} alt="image"/>
            <hr/>
        </div>
    );
}

export default Simpson;