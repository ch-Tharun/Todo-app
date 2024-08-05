import React,{useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'


export default function Delete() {
    const navigate=useNavigate();
    const {id}=useParams();
    function fun(){
        fetch("http://127.0.0.1:5000/delete/" + `${id}`)
            .then((res) => res.json())
            .then((data) => console.log(data))

        navigate('/');
    }
    useEffect(()=>{
        fun();
    },[])

  return (
    <div>
    </div>
  )
}
