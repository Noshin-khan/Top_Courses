 import React from 'react'
 const Filters = (props) => {
     let filterData=props.filterData;
     let category=props.category;
     let setCategory=props.setCategory

     function filterHandler(title){
        setCategory(title);
     }
     return(
         <div>
         {
             filterData.map((data) => (
            <button key={data.id} onClick={() => filterHandler(data.title)}>{data.title}</button>
             )

            

            )


         }
     
        </div>
    );
 }
export default Filters;