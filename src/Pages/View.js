import { useParams, Link } from "react-router-dom";
import "./View.css";
import { useContactQuery } from "../features/contactsApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const View = () => {
  const { id } = useParams();
  const { data, isLoading, error, isSuccess } = useContactQuery(id);

  useEffect(()=>{
    if(error){
      toast.error("Something went wrong");
    }
  },[error])

  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{data && data.id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{data && data.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{data && data.email}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{data && data.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
