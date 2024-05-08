import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// 
// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];


const ViewOneGrapher = () => {
    const [singleGrapher, setSingleGrapher] = useState({})
    const [date, setDate] = useState(new Date())
    const idIs = useParams();
    // const [value, onChange] = useState<Value>(new Date());
    // const history = useHistory();

    // type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

    const onChange = date =>{
        setDate(date);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/allGrapher?id=${idIs.id}`)
            .then(res => res.json())
            .then(data => {
                console.log('our data single', data);
                setSingleGrapher(data);
            })
    }, [idIs])
    console.log(idIs);
    return (
        <div>
            <Navbar/>
            <div className='d-flex'>
                <div className='border border-success p-2 m-3'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt quae voluptates voluptatibus sequi nobis enim inventore dolores, illo voluptatem ratione possimus fugiat atque debitis saepe deleniti distinctio quas beatae.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo deserunt quae voluptates voluptatibus sequi nobis enim inventore dolores, illo voluptatem ratione possimus fugiat atque debitis saepe deleniti distinctio quas beatae.</p>

                    <Calendar onChange={onChange} value={date} />
                    {console.log(date)}


                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        defaultValue={dayjs('2022-04-17')}
                        slotProps={{
                        toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
                        }}
                    />
                    </LocalizationProvider> */}
                </div>
                <div className='border border-danger p-2 m-3'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga quae quo necessitatibus asperiores ex perspiciatis debitis reprehenderit magnam illo soluta hic vel maiores, nisi accusamus rerum omnis esse delectus! Eveniet?</p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ViewOneGrapher;