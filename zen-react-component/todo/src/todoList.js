import React, { Component } from 'react';
import List from './list'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos:
            [
                {completed : false, value : "Practice DS daily"},
                {completed : false, value : "Solve tough problems"},
                {completed : false, value : "Study to new concept"},
                {completed : false, value : "Apply for the job"}
            ] }
    }

    changeStyle = (index) => {
        let clickData = this.state.todos[index];
        clickData.completed = !clickData.completed;
        let list = [];
        list[index] = clickData;
        this.setState(prevState => ({prevState : list}));
        console.log(this.state.todos)
    }

    componentDidUpdate(){
        console.log('yes');
    }

    render() { 
        let list = this.state.todos.map((data, index) => 
                    <List class ={data.completed ? 'line-through' : 'none'}
                    key = {data.value} data = {data.value} changeStyle = {this.changeStyle.bind(this, index)}/>)
        return ( 
            <div className="Ulist">
                <ul>
                    {list}
                </ul>
            </div>
         );
    }
}
 
export default TodoList;