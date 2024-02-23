import React from "react";
import "./AddPhotography.css";

const AddPhotography = () => {
  const handleSubmitPhoto = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const img_1 = form.img_1.value;
    const img_2 = form.img_2.value;
    const description = form.Description.value;
    const date = form.Date.value;
    const photo = { name, img_1, img_2, description, date };
    console.log(photo);
    fetch("https://photography-server-cyan.vercel.app/addPhoto", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(photo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="addProductBox">
      <h1>Add Photography</h1>
      <form onSubmit={handleSubmitPhoto} className="form">
        <div className="addProductRow">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Name"
          />
        </div>
        <div className="addProductRow">
          <label htmlFor="img_1">Image 1</label>
          <input
            type="text"
            name="img_1"
            autocomplete="off"
            placeholder="Image 1"
          />
        </div>
        <div className="addProductRow">
          <label htmlFor="img_2">Image 2</label>
          <input
            type="text"
            name="img_2"
            autocomplete="off"
            placeholder="Image 2"
          />
        </div>
        <div className="addProductRow">
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            name="Description"
            autocomplete="off"
            placeholder="Description"
          />
        </div>
        <div className="addProductRow">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            name="Date"
            autocomplete="off"
            placeholder="Date"
          />
        </div>
        {/* <div className="addProductRow">
                <label for="email">Email</label>
                <input type="email" name="email" autocomplete="off" placeholder="email@example.com"/>
            </div>
            <div className="addProductRow">
                <label for="password">Password</label>
                <input type="password" name="password"/>
            </div> */}
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddPhotography;
