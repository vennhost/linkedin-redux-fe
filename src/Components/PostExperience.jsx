const PostExperience = async (experience) => {
        let res = await fetch("https://strive-school-testing-apis.herokuapp.com/api/profile/user20/experiences",{
            headers:{
                "Authorization":"basic dXNlcjIwOlkyY0paMzhVUE1tblBkQVc=",
                "Content-type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(experience)
            
        })

        if (res.ok) {
            return await res.json()
        }
        
    }

    export default PostExperience;
