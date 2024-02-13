import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import "./MediaMarketing.css"

const MediaMarketing = () => {
    return (
        <div>
            <Navbar/>


            <div className="wrapper">
                <h1><span>Media</span><span> And</span><span> Marketing</span></h1>
                <div className="flexbox">

                    <div className="box">
                        <h1 className='cardHead_1'>Sale</h1>
                        <div className="scrollbar"  id="content-scroll">
                            <p className="third">Sale</p>
                            {/* <span className="third">&#9786;</span> */}
                            <p className="third contents">It is a long established fact that a reader will be distracted by the readable.</p>
                        </div>
                    </div>

                    <div className="box">
					<h1 className='cardHead_2'>Brand Marketing</h1>
                        <div className="scrollbar"  id="content-scroll1">
                            <p className="second">Brand Marketing</p>
                            {/* <span className="second">&#9786;</span> */}
                            <p className="second contents">It is a long established fact that a reader will be distracted by the readable.</p>
                        </div>
                    </div>

                    <div className="box">
                        <h1 className='cardHead_3'>Marketing Solution</h1>
                        <div className="scrollbar"  id="content-scroll2">
                            <p className="first">Marketing Solution</p>
                            {/* <span className="first">&#9786;</span> */}
                            <p className="first contents">It is a long established fact that a reader will be distracted by the readable.</p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="wrapper">
		<h1><span>Responsive</span><span> Css3</span><span> Card</span></h1>
	
		<div className="flexbox">
			<div className="box">
				<h1>Flexbox</h1>
					<div className="scrollbar"  id="content-scroll">
				<p className="third">Responsive Flexbox</p>
				<span className="third">&#9786;</span>
				<p className="third contents">It is a long established fact that a reader will be distracted by the readable.</p>
			</div>
			</div>
			<div className="box">
			
					<h1>Flexbox</h1>
							<div className="scrollbar"  id="content-scroll1">
					<p className="second">Responsive Flexbox</p>
					<span className="second">&#9786;</span>
					<p className="second contents">It is a long established fact that a reader will be distracted by the readable.</p>
<!-- 				</h2> -->
			</div>
			</div>
			<div className="box">
				<h1>Flexbox</h1>
				<div className="scrollbar"  id="content-scroll2">
				<p className="first">Responsive Flexbox</p>
				<span className="first">&#9786;</span>
				<p className="first contents">It is a long established fact that a reader will be distracted by the readable.</p>
			</div>
			</div>

		</div>
		
</div> */}
            



            <Footer/>
        </div>
    );
};

export default MediaMarketing;