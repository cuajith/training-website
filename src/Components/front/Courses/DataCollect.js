import React from 'react';
import Courses from './Courses';
import Data from './Data'
import './Courses.css'
const DataCollect =()=>
{
    return(
        <>
             
             <section >
                 
                <div className="row justify-content-center">
                        {Data.courseData.map((item,index)=>{
                         return(
                             
                            <Courses img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            key={index}/>
                         )
                     })}
                 </div>
             </section>
             
        </>
    )
}
export default DataCollect;