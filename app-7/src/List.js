import React, {Component} from 'react';
import Todo from "./Todo";

export default class List extends Component{
    constructor(){
        super();
    }
    render() {
        console.log(this.props);
        let list = this.props.tasks.map((element, index) => {
            return (<div key={index}><Todo task={element}/></div>);
        });

    return<div>{list}</div>
    }
}
