import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from "react-toastify";

const Card =(props) => {
    let course=props.course;
    let LikedCourses=props.LikedCourses;
    let setLikedCourses=props.setLikedCourses;
    function clickHandler(){
        if(LikedCourses.includes(course.id)){
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid!==course.id)));
            toast.warning("like removed");
        }
        else{
            //pehle se like nhi hai ye course
            //insert krna hai ye course liked coursrs me
            if(LikedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev) => [...prev,course.id]);
            }
            toast.success("liked successfully");
        }

    }
    return(<div>
     <div>
        <img src={course.image.url}/>
     </div>
     <div>
        <button onClick={clickHandler}>
       {
        LikedCourses.includes(course.id) ? (<FcLike/>) : (<FcLikePlaceholder/>)
       }
        </button>
     </div>
     <div>
        <p>{course.title}</p>
        <p>{
            course.description.length>100 ?
             (course.description.substr(0,100)) + "..." :
              (course.description)
        }</p>
     </div>

    </div>);
}
export default Card;