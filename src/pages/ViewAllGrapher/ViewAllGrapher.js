import React, { useEffect, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router-dom';

const ViewAllGrapher = () => {
    const [allGrapher, setAllGrapher] = useState([]);
    const [dataLoad, setDataLoad] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/allGrapher?datalimit`)
          .then((res) => res.json())
          .then((data) => {
                setDataLoad(false);
                console.log('setAllGrapher', data);
                setAllGrapher(data);
          });
      }, []);
    return (
        <div> 
            <Navbar/>
            <h1>All Photographer</h1>
            

            {dataLoad ? (
                // Render data if dataLoad is truthy
                <div className='d-flex justify-content-center mt-5 mb-5'>
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                // Render 'no data' if dataLoad is falsy
                <div className='offer-contaimer'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                    {
                        allGrapher.map(grapher => <div className="col d-flex justify-content-center">
                        <div className="card single-card">
                            <img src={grapher.img_1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className="card-title">{grapher.name}</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>per hour</h6>
                                    <h4>BDT {grapher.price}</h4>
                                </div>
                                <p className="card-text">{grapher.description}</p>
                                <div className="text-center mt-4">
                                    <Link to={`/bookingnow/${grapher._id}`}><button className="btn btn-success" style={{ marginTop:'0px' }}>Booking Now</button></Link>
                                </div>
                                </div>
                            </div>
                        </div>)
                    }
                    </div>
                </div>
            )}

            {/* <div className='offer-contaimer'>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
                {
                    allGrapher.map(grapher => <div className="col d-flex justify-content-center">
                    <div className="card single-card">
                        <img src={grapher.img_1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{grapher.name}</h3>
                            <div className="d-flex justify-content-between align-items-center">
                                <h6>per hour</h6>
                                <h4>BDT {grapher.price}</h4>
                            </div>
                            <p className="card-text">{grapher.description}</p>
                            <div className="text-center mt-4">
                                <Link to={`/bookingnow/${grapher._id}`}><button className="btn btn-success" style={{ marginTop:'0px' }}>Booking Now</button></Link>
                            </div>
                            </div>
                        </div>
                    </div>)
                }
                </div>
            </div> */}

            <Footer/>
        </div>
    );
};

export default ViewAllGrapher;