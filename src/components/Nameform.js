import React, {Component} from 'react';

//Uncontrolled Component
class NameForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit.bind(this);
        this.input = React.createRef();
    }
    
    handleSubmit(event){
        event.preventDefault();
        alert('Name entered' + this.input);
        // event.preventDefault();
    }

    componentDidMount(){
        console.log('Inside NameForm');
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <input type='text' ref={this.input}></input>
                </label>
                <input type='submit' value='Submit'></input>
            </form>
        )
    }
}

export default NameForm;