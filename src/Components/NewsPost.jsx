import React from "react";
import { Toast, ToastHeader, ToastBody, Input, Button } from 'reactstrap';
import ProfileHeading from './ProfileHeading';
import '../index.css'
import PostStatus from './PostApi';
import {connect} from "react-redux"


const mapStateToProps = state => state;
class Post extends React.Component {
    state = {}
    render() {
        return (
            <>
                {this.props.messages.posts.map((post, index) =>
                    <div key={index} className="p-3 bg-info my-2 rounded post-div">
                        <Toast>
                            <ToastHeader icon="info">
                                {post.username}
                            </ToastHeader>
                            <ToastBody>
                                {post.text}
                            </ToastBody>
                        </Toast>
                    </div>
                )}
            </>
        );
    }
}

export default connect(mapStateToProps)(Post);
