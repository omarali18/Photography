import React, {useState, useEffect, useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./ViewOneGrapher.css"
import { Today } from '@mui/icons-material';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const ViewOneGrapher = () => {
    const [singleGrapher, setSingleGrapher] = useState({})
    const [date, setDate] = useState(new Date())
    const [newDate, setNewDate] = useState('')
    const idIs = useParams();
    const today = new Date();
    const {user} = useContext(AuthContext);

    const onChange = date =>{
        setDate(date);
        const formattedDate = date.toLocaleDateString('en-GB');
        setNewDate(formattedDate)
    console.log(`Selected date: ${formattedDate}`);
    }

    
    
    const clientData = (e) =>{
        e.preventDefault();
        console.log(user.email);
        console.log('sssssssssssssssssssss');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const destination = form.destination.value;
        const Photographer_id = singleGrapher._id
        const datale = { name, email, number, destination, Photographer_id, newDate, user_email:user.email };
        console.log(datale);
        
        fetch("http://localhost:5000/bookWork", {
           method: "POST",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify(datale),
         })
           .then((res) => res.json())
           .then((data) => {
             console.log(data);
           })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/allGrapher?id=${idIs.id}`)
            .then(res => res.json())
            .then(data => {
                console.log('our data single', data);
                setSingleGrapher(data);
            })
    }, [idIs]);

    return (
        <div>
            <Navbar/>
                <h3 className='text-primary text-center my-5'>Please choose the date and booking here.</h3>
            <div className='d-md-flex mb-5'>
                <div className='mx-auto single_graphy d-flex justify-content-center align-items-center mb-3 w-100'>

                    <Calendar onChange={onChange} value={date} minDate={today} />
                    {console.log(date)}

                </div>
                <div className='mx-auto single_graphy row w-100'>
                <div className='col-12 col-md-12 col-lg-6'>
                    <img src={singleGrapher.img_1} alt="" style={{ width:"100%", height:"380px" }} />
                </div>
                <div className='col-12 col-md-12 col-lg-6 mt-md-3 mt-sm-3 d-flex justify-content-center flex-column'>
                    <h3>{singleGrapher.name}</h3>
                    <h4>Price per hour: {singleGrapher.price}</h4>
                    <p>{singleGrapher.description}</p>
                    {/* <Link to={`/bookingnow/${singleGrapher._id}`}><button className="btn btn-success" style={{ marginTop:'0px' }}>Booking Now</button></Link> */}

                    <button className="btn btn-success" style={{ marginTop:'0px' }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">Booking Now</button>
                    {/* <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">sssssssss</button> */}
                </div>
                    
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Detail</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <form onSubmit={clientData} className="form" style={{ maxWidth:"100%" }}>
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
                        <label htmlFor="img_1">Email </label>
                        <input
                            type="email"
                            name="email"
                            autocomplete="off"
                            placeholder="Email"
                        />
                        </div>
                        <div className="addProductRow">
                        <label htmlFor="number">Number</label>
                        <input
                            type="number"
                            name="number"
                            autocomplete="off"
                            placeholder="Number"
                        />
                        </div>
                        <div className="addProductRow">
                        <label htmlFor="Destination">Destination</label>
                        <input
                            type="text"
                            name="destination"
                            autocomplete="off"
                            id='Destination'
                            placeholder="Destination"
                        />
                        </div>

                        <div className='d-flex justify-content-between'>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                        </div>
                    </form>
                    </div>
                    {/* <div class="modal-footer">
                        
                    </div> */}
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    );
};

export default ViewOneGrapher;