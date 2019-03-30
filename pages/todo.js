import React, { Component  } from 'react';

class todo extends Component {

constructor(props) {
    super(props);

    this.state={
        newItem:"",
        list: []
    }
}                                      


render() {
 
return (
<div className="todo">
<div>


add an item..


<br/>


<input
type="text"

placeholder="type item here"

value={this.state.newitem}
onChange={e => this.updateInput("newItem",e.target.value)}

/>




</div>

</div>
   
);

}





}




export default todo;