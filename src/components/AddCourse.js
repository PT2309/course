import React, { Component } from 'react';
import './display.css';

// Controlled Components
class AddCourse extends Component{
    
    state = {
        name: '',
        duration: '',
        description: ''
    }

    handleChange = (event) => {
        console.log('Target Element =>', event.target.id)
        // if(event.target.value === ''){
            this.setState({
                [event.target.id]: event.target.value
            })
        // }
        // else{
                // alert('Enter a value')
            // }
    }

    handleSubmit = (event) => {
        this.props.addCourse(this.state);
        this.setState({
            name: '', duration: '', description: ''
        })
        event.preventDefault();

    }


    render(){
        // console.log(this.state);
        return(
            <form onSubmit={this.handleSubmit} className='course-card'>
                <label htmlFor='name'>Course Name</label><br />
                <input 
                    type='text' 
                    id='name' 
                    onChange={this.handleChange} 
                    placeholder='Enter Name of the course....'
                    required
                    value={this.state.name}></input> <br />
                <label htmlFor='duration'>Duration</label><br />
                <input 
                    type='number' 
                    id='duration' 
                    onChange={this.handleChange}
                    placeholder='Enter the duration..'
                    required
                    value={this.state.duration}></input> <br />
                <label htmlFor='description'>Description</label><br />
                <input 
                    type='text' 
                    id ='description' 
                    onChange={this.handleChange}
                    placeholder='Enter the description..'
                    required
                    value={this.state.description}></input> <br /> <br />
                <input type='submit' value='Add Course'></input>
            </form>
        )
    }
}

export default AddCourse;


// let obj = {
//     name: 'John',
//     age: 14
// }
// obj.name = obj['name']
// obj.age = obj['age']

 // handleName = (e) =>{
    //     console.log(e);
    //     console.log(e.target.value)
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // handleDuration = (e) =>{
    //     console.log('Duration')
    //     this.setState({
    //         duration: e.target.value
    //     })
    
    // }
    // handleDescription = (e) =>{
    //     console.log('Description')
    //     this.setState({
    //         description: e.target.value
    //     })
    // }