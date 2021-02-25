import {useState,useEffect} from 'react';
import axios from 'axios'
const Display=()=>{
    const[res,setData]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/data/get').then(res=>{
            console.log(res.data);
            setData(res.data);
      })
    });
    return(
			<div className="product">
        {
            res.map(data=>(
                <div className="container">
                <div className="img">
                <img src={data.photo} alt="not found"/>
                </div>
                <div className="title">
                <h3>{data.title}</h3>
                </div>
                <div className="description">
                <p>{data.desc}</p>
                </div>
                </div>
                ))
        }
        </div>
        
        )

}
export default Display;