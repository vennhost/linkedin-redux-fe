import React from "react"
import imagePost from "./ImagePostApi"

class FileUpload extends React.Component {
    state = { 
        selectedFile:null
     }

    fileSelectedHandler=event=>{
 console.log(event.target.files[0])
this.setState({
    selectedFile:event.target.files[0]
})
    }

    fileUploadHandler=async()=>{
        const fd=new FormData();
        let uploadPic=   fd.append("image",this.state.selectedFile.image)
        await imagePost(uploadPic)
     }
    render() { 
        return ( 
            <div>
<input type="file" style={{display:"none"}} onChange={this.fileSelectedHandler} ref={fileInput=>this.fileInput=fileInput}/>
<button onClick={()=>this.fileInput.click()}>Pick image</button>
<button onClick={()=>this.fileUploadHandler()}>Upload Image</button>
            </div>
         );
    }
}
 
export default FileUpload;