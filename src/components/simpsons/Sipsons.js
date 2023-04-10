import Simpson from "../simpson/Simpson";

function Simpsons({data}) {

    return (
        <>
            {
                data.map((value, index) => (<Simpson item={value} key={index}/>))
            }
        </>
    );
}

export default Simpsons;