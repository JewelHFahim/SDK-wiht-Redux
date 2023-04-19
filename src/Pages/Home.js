import { Link } from "react-router-dom";
import "./Home.css";
import {
  useContactsQuery,
  useDeleteContactMutation,
} from "../features/contactsApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  const { data, error, isLoading, isSuccess, isFetching } = useContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  useEffect(() => {
    if (error) {
      toast.error("Something went Wrong..");
    }
  }, [error]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure that you wanted to delete that user ?")) {
      deleteContact(id);
      toast.success("Contact Deleted Successfully");
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h2>Redux Toolkit RTK Query CRUD with React and JSON Server </h2>
      <Link style={{ marginLeft: "50%" }} to="/add">
        <button className="btn btn-add">Add Contact</button>
      </Link>
      <br />
      <br />

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>ID</th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ textAlign: "center" }}>Email</th>
            <th style={{ textAlign: "center" }}>Contact</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.contact}</td>
                  <td>
                    <Link to={`/edit/${item.id}`}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/view/${item.id}`}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
