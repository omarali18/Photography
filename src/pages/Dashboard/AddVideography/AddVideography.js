import React from "react";

const AddVideography = () => {
  const handleSubmitVideo = (e) => {
    e.preventDefault();
    const form = e.target;

    const url = form.video.value;
    const videoId = new URL(url).searchParams.get("v");

    const name = form.name.value;
    const description = form.Description.value;
    const video = videoId;
    const date = form.Date.value;
    const photo = { name, description, video, date };
    console.log(photo);
    fetch("https://photography-server-cyan.vercel.app/addVideo", {
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
      <h1>Add Videography</h1>
      <form onSubmit={handleSubmitVideo}>
        <div class="addProductRow">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            autocomplete="off"
            placeholder="Video Name"
          />
        </div>
        <div class="addProductRow">
          <label for="Description">Description</label>
          <input
            type="text"
            name="Description"
            autocomplete="off"
            placeholder="Description"
          />
        </div>
        <div class="addProductRow">
          <label for="video">Video Link</label>
          <input
            type="text"
            name="video"
            autocomplete="off"
            placeholder="Video Link"
          />
        </div>
        <div class="addProductRow">
          <label for="Date">Date</label>
          <input
            type="date"
            name="Date"
            autocomplete="off"
            placeholder="Date"
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddVideography;
