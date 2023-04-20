import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import {
  useAddContactMutation,
  useContactsQuery,
} from "../features/contactsApi";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Add = () => {
  const [addContact] = useAddContactMutation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { data, isLoading, error, isSuccess, isFetching } = useContactsQuery();

  const onSubmit = async (data, e) => {
    e.preventDefault();
      addContact(data);
      navigate("/");
      toast.success("Contact Updated Successfully");
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {isFetching && <p>Fetching Data</p>}

      {isSuccess && (
        <div style={{ marginTop: "100px" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center",
            }}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              {...register("name")}
              placeholder="Your Name..."
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              {...register("email")}
              placeholder="Your Email..."
            />

            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              {...register("contact")}
              placeholder="Your Contact No. ..."
            />

            <input type="submit" value={"Save"} />
          </form>
        </div>
      )}
    </div>
  );
};

export default Add;
