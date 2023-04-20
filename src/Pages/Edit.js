import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  useContactQuery,
  useUpdateContactMutation,
} from "../features/contactsApi";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error, isSuccess } = useContactQuery(id);
  console.log(id, "ID1")
  const [updateContact] = useUpdateContactMutation(id);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    updateContact({...data, id});
    console.log({...data, id}, "Data");
    navigate("/");
    toast.success("Contact Updated Successfully");
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something Went Wrong...</p>}
      {isSuccess && (
        <div style={{ marginTop: "100px" }}>
          <p style={{ marginLeft: "42%", fontSize: "25px" }}>Update Contact</p>
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
              placeholder="Your Name..."
              defaultValue={data?.name}
              {...register("name")}
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={data?.email}
              placeholder="Your Email..."
              {...register("email")}
            />
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              name="contact"
              defaultValue={data?.contact}
              placeholder="Your Contact No. ..."
              {...register("contact")}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Edit;
