


// import React, { Component } from "react";



//  class index extends Component {


// constructor(props){
//   super(props);


// this.state = {
//   userInput: '',
//   list: []
// }

// }


// changeUserInput(input){

//   this.setState({

//     userInput: input
//   }, () => console.log(input))//you cany add a console.log() to check what you did was okay.
// }

// addToList(input){
//   let listArray = this.state.list;

//   listArray.push(input);

//   this.setState({
//     list: listArray,
//     userInput: ''
//   })

// }


// render(){

// return(

// <div className="to-do-list-main"> 

// <input
//  onChange={ (e)=>this.changeUserInput(e.target.value)}// all this are inside the input
//   value={this.state.userInput}
//    type="text" 
//    />

// <button onClick={ () => this.addToList(this.state.userInput)}  > PRESS ME</button>
// <ul>
// {this.state.list.map((val)=> <li>{val}</li>)};
// </ul>

// </div>


// );


// }


// }

import React, { Component  } from 'react';

class index extends Component {

constructor(props) {
    super(props);

    this.state={
        newItem:"",
        list: []
    }   
}                                      



updateInput(key, value){
this.setState({
  [key]: value
});
}




addItem(){
  //create item with unique id
  const newItem={
    id: 1 + Math.random(),
    value: this.state.newItem.slice()
  };
  //copy of current list of items
const list = [...this.state.list];
//add new item to list
list.push(newItem);
//update state with new list and reset newItem input
this.setState({
  list,
  newItem: ''
});

}



deleteItem(id){
//copy current list of items
  const list = [...this.state.list];
//filter out item being deleted
  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
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

<button onClick={e => this.addItem()}>
add
</button>
<br/>

<ul>
{this.state.list.map(item => {
  return(
    <li key={item.id}>
    {item.value}
    <button  onClick={() => this.deleteItem(item.id)}> 
    x 
    </button>
    </li>
  )
})}
</ul>


</div>

</div>
   
); // this is where return stops

}//this is where render() stops





}




export default index;