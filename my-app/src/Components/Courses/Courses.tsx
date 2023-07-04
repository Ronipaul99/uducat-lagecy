import React, { useState } from "react";
// import Course from "./Course";
import data from './Data'
import Carousel from "react-grid-carousel";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import './Courses.css'

interface type {
    id: string
    imgURL: string
    Date: string
    CreatedBy: string
    details: string
};



const initialProducts: type[] = data;

const Courses = () => {
    const [course, setCourse] = useState(initialProducts);
    return (
        <div className="course" style={{ width: "100%", overflow: "hidden" }}>
            <Carousel cols={3}>
                {course.map((course, index) => (
                    <Carousel.Item key={index}>

                        <div className="card">
                            <div className="imgsec">
                                <img src={course.imgURL} alt="course image" />
                            </div>
                            <div className="detailssec">
                                <p className="details">Digital marketing encompasses all marketing efforts that use digital channels and technologies to promote products, services, or brands.</p>
                                <div className="box1">
                                    <PersonOutlineOutlinedIcon className="icon" />
                                    <div className="name">
                                        <p className="bold1">Created By:</p>
                                        <p className="normal">{course.CreatedBy}</p>
                                    </div>
                                </div>
                                <div className="box2">
                                    <DateRangeIcon className="icon" />
                                    <div className="name">
                                        <p className="bold1">Date:</p>
                                        <p className="normal">{course.Date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Courses;
