import React, { useEffect, useState } from "react";
import "./DashboardBox.css";
import { Link } from "react-router-dom";

const DashboardBox = () => {
  const [photoCount, setPhotoCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);

  useEffect(() => {
    fetch(`https://photography-server-cyan.vercel.app/allPhotos`)
      .then((res) => res.json())
      .then((data) => {
        setPhotoCount(data.length);
      });
  }, []);
  useEffect(() => {
    fetch(`https://photography-server-cyan.vercel.app/allVideo`)
      .then((res) => res.json())
      .then((data) => {
        setVideoCount(data.length);
      });
  }, []);

  return (
    <div className="productBox">
      <h1>All Photography and Videography</h1>
      <div className="wrapper">
        <div className="card">
          <h3 className="card-title">Photography</h3>
          <p style={{ marginTop: "1rem" }}>
            We have <span className="productCounter">{photoCount}</span>{" "}
            Photography
          </p>

          <Link
            className=""
            style={{ textDecoration: "none", color: "#fff" }}
            to={`/dashboard/AllPhoto`}
          >
            <button className="card-btn">View All Photography</button>
          </Link>
        </div>

        <div className="card">
          <h3 className="card-title">Videography</h3>
          <p style={{ marginTop: "1rem" }}>
            We have <span className="productCounter">{videoCount}</span>{" "}
            Videography
          </p>
          <Link
            className=""
            style={{ textDecoration: "none", color: "#fff" }}
            to={`/dashboard/AllVideo`}
          >
            <button className="card-btn">View All Videography</button>
          </Link>
          {/* <button className="card-btn">READ MORE</button> */}
        </div>

        {/* <div className="card">
          <h3 className="card-title">CARD TITLE</h3>
          <p style={{ marginTop: "1rem" }}>
            We have <span>33</span> Photography
          </p>
          <button className="card-btn">READ MORE</button>
        </div>

        <div className="card">
          <h3 className="card-title">CARD TITLE</h3>
          <p style={{ marginTop: "1rem" }}>
            We have <span>33</span> Photography
          </p>
          <button className="card-btn">READ MORE</button>
        </div>

        <div className="card">
          <h3 className="card-title">CARD TITLE</h3>
          <p style={{ marginTop: "1rem" }}>
            We have <span>33</span> Photography
          </p>
          <button className="card-btn">READ MORE</button>
        </div> */}
      </div>
    </div>
  );
};

export default DashboardBox;
