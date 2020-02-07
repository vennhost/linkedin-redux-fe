const imagePost = async (img) => {
    let URL = "https://striveschool.herokuapp.com/api/profile/user20/picture/"
    try {
        let response = await fetch(URL, {
            method: "POST",
            body:img,
            headers: {
                "Authorization": "Basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=" ,
                "Content-Type": "image/jeg"
            }
            
        })
        if (response.ok) {
            return await response.json()
        }
    } catch (error) {
        console.log(error);
    }
}

export default imagePost;