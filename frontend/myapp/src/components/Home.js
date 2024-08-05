import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const navigateToCreate = () => {
    navigate('/create');
  }

  

  function fun() {
    return fetch("http://127.0.0.1:5000/api")
      .then((resp) => resp.json())
      .then((res) => setData(res))
  }

  useEffect(() => {
    fun();
  }, []);

  return (
    <div>
      <div className="container w-75">
        <div className="card">
          <div className="card-body d-flex">
            <div className="col-md-3"><b>ID</b></div>
            <div className="col-md-3"><b>Name</b></div>
            <div className="col-md-3"><b>Age</b></div>
            <div className="col-md-3">
              <b>Action</b>
              <button className="btn btn-primary mx-5" onClick={navigateToCreate} >Create</button>
            </div>
          </div>
          <hr />
          <div className="card-body">{data.map((obj, ind) => {
            return (
              <>
                <div className="d-flex">
                  <div className="col-md-3">{obj._id}</div>
                  <div className="col-md-3">{obj.name}</div>
                  <div className="col-md-3">{obj.age}</div>
                  <div className="col-md-3"><Link to={`/edit/${obj._id}`}>Edit</Link> | <Link to={`/delete/${obj._id}`}>Delete</Link></div>
                </div>
                <hr />
              </>
            );
          })}</div>
        </div>
      </div>
    </div>
  );
}
