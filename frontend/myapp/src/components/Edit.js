import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formname, setFormName] = useState('');
    const [formage, setFormAge] = useState(0);
    const [data, setData] = useState([]);
    const values = { formname, formage }
    function fun() {
        return fetch("http://127.0.0.1:5000/data/" + `${id}`)
            .then((resp) => resp.json())
            .then((res) => setData(res))
    }

    useEffect(() => {
        fun();
    }, []);

    const submit=(event)=> {
        event.preventDefault();
        const data = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(values),
        }
        fetch("http://127.0.0.1:5000/update/" + `${id}`, data)
            .then((res) => res.json())
            .then((data) => console.log(data))

        navigate('/');
    }

    return (
        <div>
            <h1>This is Edit page.</h1>
            {data.map((obj, ind) => {
                return (
                    <div className='container w-50 border border-primary rounded'>

                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label d-flex float-right">Name</label>
                                <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name" onChange={(e) => { setFormName(e.target.value); setFormAge(obj.age);}} defaultValue={obj.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="age" className="form-label d-flex float-right">Age</label>
                                <input type="text" className="form-control" id="age" placeholder="Enter Your Age" defaultValue={obj.age} onChange={(e) => { setFormAge(e.target.value); setFormName(obj.name); }} />
                            </div>
                            <button type="submit" className="btn btn-primary d-flex float-right mb-2">Submit</button>
                        </form>

                    </div>
                );
            })}
        </div>
    )
}
