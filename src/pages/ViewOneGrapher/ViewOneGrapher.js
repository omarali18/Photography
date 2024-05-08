import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
// import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const ViewOneGrapher = () => {
    const [singleGrapher, setSingleGrapher] = useState({})
    const idIs = useParams();
    // const history = useHistory();

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
            <div>
                <div>
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
                <div></div>
            </div>
            <Footer/>
        </div>
    );
};

export default ViewOneGrapher;