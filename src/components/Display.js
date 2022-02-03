import React from 'react';
import Loading from './Loading';
import './display.css';

function Display({courseDetails, deleteCourse}){
    // console.log(props.courseDetails);

    /**
     *  Object Destructuring
     *  let name = { firstname: 'John', middlename:'', lastname: ''}
     *  { firstname, middlename, lastname } = name;
     *  firstname // John 
     * 
     */

    // Conditional Rendering
    let itemList = courseDetails.length ? courseDetails.map((item, index) => {
        
        // Object Destructuring
        let {id, name, duration, description} = item;
        return(
            <div key={id} className='course-card'>
                <h2>{name}</h2>
                <h3>{duration}</h3>
                <p>{description}</p>
                <button onClick={() => {deleteCourse(id)}}>Delete Course</button>
            </div>
        )}) : (<Loading></Loading>)

    return(
        <div className='course-list'>
            {itemList}
        </div>
    )
}

export default Display;