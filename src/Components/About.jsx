import React from "react"

class About extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="my-5">
                {this.props.aboutUs}
            </div>
         );
    }
}
 
export default About;