import React from 'react';
import './Profile.css';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Carousel from "react-grid-carousel";
import VerifiedIcon from '@mui/icons-material/Verified';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { PieChart, Pie, Cell } from 'recharts';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import pic from './video.png'
import Courses from '../Courses/Courses';

const Profile = () => {
    const [value, setValue] = React.useState<number | null>(1);
    const certificate = [
        {
            name: "Subject-Specific Certificates"
        },
        {
            name: "Subject-Specific Certificates"
        },
        {
            name: "Subject-Specific Certificates"
        }, {
            name: "Subject-Specific Certificates"
        }, {
            name: "Subject-Specific Certificates"
        }
    ];

    const data = [
        { name: "Group A", value: 800 },
        { name: "Group B", value: 400 }
    ];
    const COLORS = ["#7B30C0", "#6161F1"];
    return (
        <div className='profile'>


            <div className="profilefull">
                <div className="profiledetails">
                    <ManageAccountsIcon className='ico' />
                    <div className="upper">
                        <div className="full">
                            <div className="image">
                                <img src="https://cdn.dribbble.com/users/1632728/screenshots/4693038/media/c277ac982112db2505e7e2de2d7a2af6.gif" alt="profile pic" />
                                <EditIcon className='edit' />
                            </div>
                        </div>
                        <div className="details">
                            <h1>Biswarup Kundu</h1>
                            <Rating name="read-only" sx={{ mt: 2 }} value={value} readOnly />
                            <p>Biswarup Kundu is a passionate and dedicated educator with over 10 years of teaching experience. He believes that education is the key to unlocking the potential in every student and strives to create a positive and inclusive learning environment where all students can thrive.</p>
                        </div>
                    </div>

                    <div className="lower">
                        <div className="first"><h1>18</h1><p>Number of courses</p><MenuBookOutlinedIcon className='book' sx={{ fontSize: "45px" }} /></div>
                        <div className="first"><h1>15</h1><p>Classes taken</p><MenuBookOutlinedIcon className='book' sx={{ fontSize: "45px" }} /></div>
                        <div className="first"><h1>15</h1><p>Number of subscribed student</p><MenuBookOutlinedIcon className='book' sx={{ fontSize: "45px" }} /></div>
                    </div>
                </div>
            </div>



            <div className="top">
                <p>Certificate</p>
            </div>
            <div className="certificatemain">
                <div className="certificate">
                    <Carousel cols={3}>
                        {certificate.map((course, index) => (
                            <Carousel.Item key={index}>
                                <div className="card">
                                    <div className="first"><MilitaryTechOutlinedIcon className='ico1' sx={{ fontSize: "35px" }} /><p>{course.name}</p>< VerifiedIcon className='book' sx={{ fontSize: "45px" }} />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>


            <div className="top">
                <p>Educational details</p>
            </div>
            <div className="Educationaldetails">
                <div className="main">
                    <div className="sub">
                        <div className="card">
                            <h1 className='bold'>Highest qualification hold
                                by teacher</h1>
                            <div className="box">
                                <li>
                                    <FiberManualRecordIcon className='icon' />
                                    <p> Master of Education (M.Ed.): This is a
                                        postgraduate degree that focuses
                                        on advanced study in education.
                                        Teachers with an M.Ed.
                                    </p>
                                </li>
                            </div>
                            <div className="low">
                                <button>Read more</button>
                                <div className="line"></div>
                            </div>
                        </div>


                        <div className="card">
                            <h1 className='bold'>Experience profile of
                                teacher</h1>
                            <div className="box">
                                <li> <FiberManualRecordIcon className='icon' />
                                    <p> Classroom Teaching: Teachers spend
                                        significant time teaching and
                                        engaging with students in classroom
                                    </p>
                                </li>
                                <li> <FiberManualRecordIcon className='icon' />
                                    <p> MLesson Planning: Teachers spend
                                        time preparing lessons and developing.
                                    </p>
                                </li>
                            </div>
                            <div className="low">
                                <button>Read more</button>
                                <div className="line"></div>
                            </div>
                        </div>


                        <div className="card">
                            <h1 className='bold'>Specialization and
                                skills </h1>
                            <div className="box">
                                <li> <FiberManualRecordIcon className='icon' />
                                    <p> Bachelor of Education (B.Ed.):
                                        This is a common undergraduate
                                        degree
                                    </p>
                                </li>
                                <li> <FiberManualRecordIcon className='icon' />
                                    <p> High School Teachers: specialize in
                                        specific subjects and work with students
                                    </p>
                                </li>
                            </div>
                            <div className="low">
                                <button>Read more</button>
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="top">
                <p>Intro Video</p>
            </div>
            <div className="video">
                <div className="subvid">

                    <div className="left">
                        <div className="upper">
                            <p className='time'>15.4</p>
                            <PlayCircleIcon className='play' />
                            <img src={pic} alt="video" />
                        </div>
                        <div className="lower">
                            <div className="pie">
                                <div className="tag1">200</div>
                                <div className="tag2">100</div>
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={data}
                                        cx={200}
                                        cy={200}
                                        innerRadius={40}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>

                            </div>
                            <div className="like">
                                <ThumbUpOutlinedIcon className='icon1' />
                                <ThumbDownOffAltOutlinedIcon className='icon2' />
                            </div>
                        </div>
                    </div>



                    <div className="right">
                        <div className="first">
                            <div className="profilefull">
                                <div className="profiledetailss">
                                    <p className='ico1'>"</p>
                                    <div className="upper">
                                        <div className="full1">
                                            <div className="imagee">
                                                <img src="https://cdn.dribbble.com/users/1632728/screenshots/4693038/media/c277ac982112db2505e7e2de2d7a2af6.gif" alt="profile pic" />
                                            </div>
                                        </div>
                                        <div className="message">
                                            <h1>Biswarup Kundu</h1>
                                            <Rating name="read-only" sx={{ mt: 1 }} value={value} readOnly />
                                            <p>Biswarup Kundu is a passionate and dedicated educator with over 10 years of teaching experience. He believes that education is the key to unlocking the potential in every student and strives to create a positive and inclusive learning environment where all students can thrive.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="second">
                            <div className="first">
                                <div className="profilefull">
                                    <div className="profiledetailss">
                                        <p className='ico1'>"</p>
                                        <div className="upper">
                                            <div className="full1">
                                                <div className="imagee">
                                                    <img src="https://cdn.dribbble.com/users/1632728/screenshots/4693038/media/c277ac982112db2505e7e2de2d7a2af6.gif" alt="profile pic" />
                                                </div>
                                            </div>
                                            <div className="message">
                                                <h1>Biswarup Kundu</h1>
                                                <Rating name="read-only" sx={{ mt: 1 }} value={value} readOnly />
                                                <p>Biswarup Kundu is a passionate and dedicated educator with over 10 years of teaching experience. He believes that education is the key to unlocking the potential in every student and strives to create a positive and inclusive learning environment where all students can thrive.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="third">
                            <div className="first">
                                <div className="profilefull">
                                    <div className="profiledetailss">
                                        <p className='ico1'>"</p>
                                        <div className="upper">
                                            <div className="full1">
                                                <div className="imagee">
                                                    <img src="https://cdn.dribbble.com/users/1632728/screenshots/4693038/media/c277ac982112db2505e7e2de2d7a2af6.gif" alt="profile pic" />
                                                </div>
                                            </div>
                                            <div className="message">
                                                <h1>Biswarup Kundu</h1>
                                                <Rating name="read-only" sx={{ mt: 1 }} value={value} readOnly />
                                                <p>Biswarup Kundu is a passionate and dedicated educator with over 10 years of teaching experience. He believes that education is the key to unlocking the potential in every student and strives to create a positive and inclusive learning environment where all students can thrive.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="coursediv1">
                <div className="subdiv">
                    <div className="head">
                        <p className='bold'>Top 5 trending courses </p>
                        <div className="search">
                            <input type="text" placeholder='Search...' />
                            <SearchOutlinedIcon fontSize='large' className='icon' />
                        </div>
                    </div>

                    <Courses />
                </div>
            </div>

        </div>
    )
}

export default Profile;
