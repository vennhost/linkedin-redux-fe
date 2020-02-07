import React from 'react';
import {Toast, ToastHeader, ToastBody, Input, Button} from 'reactstrap';
import ProfileHeading from './ProfileHeading';
import '../index.css'
import PostStatus from './PostApi'



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
                <div className="bg info">
                    <Input type="text" value={this.state.currentPost} onChange={(val) => this.setState({currentPost: val.target.value})} placeholder="Start a post" id="post" />
                    <Button id="share" onClick={() => PostStatus(this.state.currentPost)} className="btn btn-outline-info btn-sm">Share Now</Button>
                </div>
                <div>
                    {this.state.posts.map((post, index) => 
                        <div key={index} className="p-3 bg-info my-2 rounded">
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
                </div>
            </>
            );
    }

   
    componentDidMount=async ()=>{
        let response=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc="
            }
        })
        let posts = await response.json()
        this.setState({
            posts: posts
        })
    }


   postStatus = async (posts) => {
        let response=await fetch("https://striveschool.herokuapp.com/api/posts/",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
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
 
export default NewsFeed;