
const PostStatus = async (posts) => {
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

export default PostStatus;