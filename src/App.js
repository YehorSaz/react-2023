import './App.css';
import Posts from "./components/posts/Posts";
import {useState} from "react";
import FullPostInfo from "./components/fullPostInfo/FullPostInfo";
import Missions from "./components/missions/Missions";
import Users from "./components/usersAdvanced/users/Users";
import AllPosts from "./components/usersAdvanced/allPosts/AllPosts";


function App() {

    const [chosenPost, setChosenPost] = useState(null);
    const lift = (obj) => {
        setChosenPost({...obj})
    };

    const [chosenUser, setChosenUser] = useState(null);
    const liftUser = (object) => {
        setChosenUser({...object})
    };

    return (
        <div className={'wrapper'}>
            <div className={'posts-container'}>

                <div className={'left'}>
                    <Posts lift={lift}/>
                </div>

                {
                    chosenPost &&
                    (
                        <div className="right">
                            <FullPostInfo value={chosenPost}/>
                        </div>
                    )
                }

            </div>


            <div className={'wrapper-bottom'}>

                <div className={'missions'}>
                    <Missions/>
                </div>

                <div className={'advanced'}>
                    <Users liftUser={liftUser}/>

                    {
                        chosenUser &&
                        (
                            <div className={'all-posts'}>

                                <AllPosts value={chosenUser}/>
                            </div>
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default App;
