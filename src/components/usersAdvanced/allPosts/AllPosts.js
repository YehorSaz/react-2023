import React, {useEffect, useState} from 'react';
import OnePost from "../onePost/OnePost";

const AllPosts = ({value}) => {

    const [allposts, setAllposts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${value.id}`)
            .then(value => value.json())
            .then(fullPosts => {
                setAllposts(fullPosts);
            });
    }, [value]);

    return (

        <div>

            <div className={'name'}>
                {value.name}:
            </div>

            {
                allposts.map(value =>
                    <OnePost
                        value={value}
                        key={value.id}/>
                )
            }
        </div>
    );
};

export default AllPosts;