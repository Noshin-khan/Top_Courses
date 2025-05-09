import React, { useState } from 'react'
import Card from './Card'
const Cards =(props) => {
    let courses=props.courses;
    let category=props.category;
    const [LikedCourses,setLikedCourses]=useState([]);
    function getCourses(){
        if (category=== "All"){
            let allCourse=[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourse.push(courseData);
            }) 
        })
        return allCourse;
        }
        else{
            //only specific category data array pass hoga
            return courses[category];

        }
        
    }
    return(<div>
     {
        getCourses().map( (course) => (
            <Card key={course.id} course={course} LikedCourses={LikedCourses} setLikedCourses={setLikedCourses}/>
        ))
     }
    </div>);
}
export default Cards;