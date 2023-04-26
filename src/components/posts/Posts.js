import {Component} from "react";

import {postService} from "../../services/post.service";
import {Post} from "./Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postService.getAll().then(value => value.data).then(value => this.setState({posts: value}))
    }

    render() {

        return(

            <div className={'container'}>

                <div className={'name'}>Posts:<hr/></div>

                <div className={'posts'}>
                    {
                        this.state.posts.map(post => <Post key={post.id} post={post}/>)
                    }
                </div>

            </div>
        )
    }
}

export {
    Posts
}