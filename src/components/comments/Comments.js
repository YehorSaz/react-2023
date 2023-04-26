import {Component} from "react";

import {commentsService} from "../../services/comments.service";
import {Comment} from "./Comment";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(value => value.data).then(value => this.setState({comments: value}))
    }

    render() {

        return (

            <div className={'container'}>

                <div className={'name'}>Comments:
                    <hr/>
                </div>

                <div className={'comments'}>
                    {
                        this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                    }
                </div>

            </div>
        )
    }
}

export {
    Comments
}