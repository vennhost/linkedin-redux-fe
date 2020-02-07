 import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';



class Remove extends React.Component {
    state = {
        experience: []
    }

    render() {
        return(
            <div>
                <MaterialIcon id="plus" icon="delete" size={30} onClick={() => this.remove(item)} parentUpdate={this.parentUpdate} />
            </div>
        )
    }

    parentUpdate = (item) => {
        this.setState({
            
            item: item
           
        })
    }

   
}





 
export default Remove;  