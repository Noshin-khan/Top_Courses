import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Filters from "./Components/Filters";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";


const App = () => {
const [courses,setcourses]=useState(null); 
const [loading,setLoading] = useState(true);
const [category,setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true);
    try{
   let response= await fetch(apiUrl);
   let output= await response.json();
   setcourses(output.data);
    }
    catch(error){
   toast.error("network issue");
    }
    setLoading(false);
  }

  useEffect( () => {
   fetchData();
  },[])
  return (
<div>
  <div>
    <Navbar/>
  </div>
  <div>
    <Filters filterData={filterData} category={category} setCategory={setCategory}/>
  </div>
  <div>{
    loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
  }
    
  </div>
</div>

  );
};

export default App;
