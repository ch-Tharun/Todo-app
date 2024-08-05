import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom';
export default function Create() {
    const [name,setName]=useState('');
    const [age,setAge]=useState(0);
    const values={name,age};
    const navigate = useNavigate();

    function submit(){
        const data={
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(values),
        }
        fetch("http://127.0.0.1:5000/data",data)
        .then((res)=>res.json())
        .then((data)=>console.log(data))

        navigate('/');
    }
    return (
        <div>
            <h1>Create Component</h1>
            <div className='container w-50 border border-primary rounded'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label d-flex float-right">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value);}} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label d-flex float-right">Age</label>
                        <input type="text" className="form-control" id="age" placeholder="Enter Your Age" onChange={(e)=>{setAge(e.target.value);}}/>
                    </div>
                    <button type="submit" onClick={submit} className="btn btn-primary d-flex float-right mb-2">Submit</button>
                </form>
            </div>
        </div>
    )
}
