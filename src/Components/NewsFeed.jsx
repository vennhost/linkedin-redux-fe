import React from 'react';
import { Input, Button, Row, Col } from 'reactstrap';
import ProfileHeading from './ProfileHeading';
import '../index.css'
import PostStatus from './PostApi';
import Post from "./NewsPost";
import { connect } from "react-redux"


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    loadNews: posts => dispatch(loadWithThunk(posts))
})

const loadWithThunk = posts => {
    return async (dispatch, getState) => {
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            headers: {
                "Authorization": "basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let posts = await response.json()
            
        dispatch({
            type: "LOAD_POST",
            payload: posts
        })
    }
}

class NewsFeed extends React.Component {
    state = {
        posts: [],
        currentPost: ""
    }

    /* handleNewPost = async () => {
       let posts = {
           "text": this.state.currentPost
       };
       await this.PostStatus(posts)
       
    } */

    render() {
        return (
            <>
                <div className="bg info post-input">
                <Col>
                    <Row><Input type="text" value={this.state.currentPost} onChange={(val) => this.setState({ currentPost: val.target.value })} placeholder="Start a post" id="post" /></Row>
                    <Row><Button id="share" onClick={() => PostStatus(this.state.currentPost)} className="btn btn-outline-info btn-sm">Post</Button></Row>
                </Col>
                
                    </div>
                <div>

                    <Post />

                </div>
            </>
        );
    }


    componentDidMount = async () => {
       
        await loadWithThunk()

       
    }


    postStatus = async (posts) => {
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/", {
            headers: {
                "Authorization": "basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(posts)

        })
        if (response.ok) {
            return await response.json()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);