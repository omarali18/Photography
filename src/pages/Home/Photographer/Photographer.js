import React, { useEffect, useState } from 'react';
import "./Photographer.css"
// import img_1 from "../../../images/phptographer/p_1.jpg"
// import img_2 from "../../../images/phptographer/p_2.jpg"
// import img_3 from "../../../images/phptographer/p_3.jpg"
// import img_4 from "../../../images/phptographer/p_4.jpg"
import { Link } from 'react-router-dom';

const Photographer = () => {
    const [homeGrapher, setHomeGrapher] = useState([])
    const [dataLoad, setDataLoad] = useState(true)

    let limit = 6;
    useEffect(() => {
        fetch(`http://localhost:5000/allGrapher?datalimit=${limit}`)
          .then((res) => res.json())
          .then((data) => {
                setDataLoad(false);
                console.log('all data', data);
                setHomeGrapher(data);
          });
      }, [limit]);

      
      
    // useEffect(() => {
    //     fetch(`http://localhost:5000/allGrapher?datalimit=${limit}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setDataLoad(false)
    //             console.log(data);
    //             setHomeCars(data)
    //         })
    // }, [limit])

    return (

        <div className="offer-contaimer">
        <hr className="top" />
        {/* <div className="text-center offer-container-text">
            <h1 >NOW CHOOSE YOUR PLAN</h1>
        </div> */}
        <div className='d-flex justify-content-between align-items-center'>
            <h3>Photographers</h3>
            <Link to={`/allphotographer`}> <button className='grapherMoreBtn' style={{  }}>View More</button></Link>

            {/* <button className='grapherMoreBtn' style={{  }}> <Link to={`/allphotographer`}><button className="btn btn-success" style={{ marginTop:'0px' }}>View More</button></Link> </button> */}
        </div>
        <div className="text-center">
            {/* {
                isLoading ? <Spinner animation="border" variant="primary" /> : ""
            } */}
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            {
                homeGrapher.map(offer => <div className="col d-flex justify-content-center">
                <div className="card single-card">
                    <img src={offer.img_1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">{offer.name}</h3>
                        <div className="d-flex justify-content-between align-items-center">
                            <h6>per hour</h6>
                            <h4>BDT {offer.price}</h4>
                        </div>
                        <p className="card-text">{offer.description}</p>
                        <div className="text-center mt-4">
                            {/* <Link to="/bookingnow">Booking Now</Link> */}
                            {/* <Link to={`/bookingnow`}><button className="btn btn-success" style={{ marginTop:'0px' }}>Booking Now</button></Link> */}
                            <Link to={`/bookingnow/${offer._id}`}><button className="btn btn-success" style={{ marginTop:'0px' }}>Booking Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>)
            }

        </div>
        <hr className="btm" />
    </div>
        // <div>
        //     <div className="homeGrapherContainer">
                

        //     <div className="row row-cols-1 row-cols-md-4 g-4 ">
        //         <div className="col d-flex justify-content-center">
        //             <div className="card h-100">
        //             <img src={img_1} className="card-img-top" style={{ width: "100%", height: "160px" }} alt="..."/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        //             </div>
        //             </div>
        //         </div>
        //         <div className="col d-flex justify-content-center">
        //             <div className="card h-100">
        //             <img src={img_2} className="card-img-top" style={{ width: "100%", height: "160px" }} alt="..."/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        //             </div>
        //             </div>
        //         </div>
        //         <div className="col d-flex justify-content-center">
        //             <div className="card h-100">
        //             <img src={img_3} className="card-img-top" style={{ width: "100%", height: "160px" }} alt="..."/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        //             </div>
        //             </div>
        //         </div>
        //         <div className="col d-flex justify-content-center">
        //             <div className="card h-100">
        //             <img src={img_4} className="card-img-top" style={{ width: "100%", height: "160px" }} alt="..."/>
        //             <div className="card-body">
        //                 <h5 className="card-title">Card title</h5>
        //                 <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        //             </div>
        //             </div>
        //         </div>
        //         </div>

        //     </div>
        // </div>
    );
};

export default Photographer;