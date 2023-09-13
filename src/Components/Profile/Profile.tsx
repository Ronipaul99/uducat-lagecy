import React, { useState, useEffect } from 'react';
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
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Courses from '../Courses/Courses';
import cover from './cover.png';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Profile = () => {
    const [User, setUser] = useCookies(['UserData']);
    const [cookies, setCookie] = useCookies(['ProfileData']);
    const [profileData, setProfileData] = useState(cookies.ProfileData);
    // Profile data fetching
    useEffect(() => {
        axios.get(`http://localhost:4001/getProfile/${User.UserData.UID}`).then((res) => {
            setProfileData(res.data);
            setCookie('ProfileData', res.data, { path: 'localhost:3000/' });
        }).catch(() => {
            console.log("Something went wrong!");
        });
    }, [User.UserData.UID, setCookie])

    // Interface
    interface PD {
        id: number;
        profileImg: string;
        teacherName: string;
        rating: number;
        bio: string;
        courses: number;
        classTaken: number;
        subscriber: number;
        certificates: any;
        educationalDetails: any;
        introVideo: any;
        CourseList: any;
    }
    const Profile: PD = profileData!;
    const COLORS = ["#7B30C0", "#6161F1"];
    return (
        <div className='profile'>
            <div className="profilefull">
                <div className="uprImg">
                    <div className="cover">
                        <ManageAccountsIcon className='setting' />
                        <div className="highlight">
                            <p>Mobile & Website <span>App</span></p>
                        </div>
                        <img className='coverImg' src={cover} alt="cover" />
                    </div>
                </div>
                <div className="profiledetails">
                    <EditIcon className='ico' />
                    <div className="upper">
                        <div className="full">
                            <div className="image">
                                <img src={Profile.profileImg} alt="profile pic" />
                                <EditIcon className='edit' />
                            </div>
                        </div>
                        <div className="details">
                            <h1>{Profile.teacherName}</h1>
                            <Rating name="read-only" sx={{ mt: 2 }} value={Profile.rating} readOnly />
                            <p>{Profile.bio}</p>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="first"><h1>{Profile.courses}</h1><p>Number of courses</p><MenuBookOutlinedIcon className='book1' sx={{ fontSize: "45px" }} /></div>
                        <div className="first"><h1>{Profile.classTaken}</h1><p>Classes taken</p><MenuBookOutlinedIcon className='book1' sx={{ fontSize: "45px" }} /></div>
                        <div className="first"><h1>{Profile.subscriber}</h1><p>Number of subscribed student</p><MenuBookOutlinedIcon className='book1' sx={{ fontSize: "45px" }} /></div>
                    </div>
                </div>
            </div>


            {/* Certificate */}
            <div className="top">
                <p>Certificate</p>
            </div>
            <div className="certificatemain">
                <div className="certificate">
                    <Carousel cols={3}>
                        {Profile.certificates.map((course: any, index: any) => (
                            <Carousel.Item key={index}>
                                <div className="card12">
                                    <div className="first"><MilitaryTechOutlinedIcon className='ico1' sx={{ fontSize: "35px" }} /><p>{course}</p>< VerifiedIcon className='book' sx={{ fontSize: "45px" }} />
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>

            {/* Educational Details */}
            <div className="top">
                <p>Educational details</p>
            </div>
            <div className="Educationaldetails">
                <div className="main">
                    <div className="fst">
                        <div className="lft">
                            <CheckCircleOutlineOutlinedIcon className='tick' />
                        </div>
                        <div className="rht">
                            <p>Highest qualification hold by teacher</p>
                            <small>{Profile.educationalDetails.Qualification}</small>

                        </div>
                    </div>
                    <div className="fst">
                        <div className="lft">
                            <CheckCircleOutlineOutlinedIcon className='tick1' />
                        </div>
                        <div className="rht">
                            <p>Experience profile of teacher</p>
                            <small>{Profile.educationalDetails.Experience}</small>
                        </div>
                    </div>
                    <div className="fst">
                        <div className="lft">
                            <CheckCircleOutlineOutlinedIcon className='tick2' />
                        </div>
                        <div className="rht">
                            <p>Specialization and skills </p>
                            <small>{Profile.educationalDetails.Specialization}</small>
                        </div>
                    </div>
                    <button className='readmore'>Read more</button>
                </div>
            </div>

            {/* Video Section */}
            <div className="top">
                <p>Intro Video</p>
            </div>
            <div className="video">
                <div className="subvid">
                    <div className="left">
                        <div className="upper">
                            <p className='time'>{Profile.introVideo.duration}</p>
                            <PlayCircleIcon className='play' />
                            <img src={Profile.introVideo.videoPicURL} alt="video" />
                            <EditIcon className='editVid' />
                        </div>
                        <div className="lower">
                            <div className="pie">
                                <div className="tag1">{Profile.introVideo.Likes[0].value}</div>
                                <div className="tag2">{Profile.introVideo.Likes[1].value}</div>
                                <PieChart width={400} height={400}>
                                    <Pie
                                        data={Profile.introVideo.Likes}
                                        cx={200}
                                        cy={200}
                                        innerRadius={40}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {Profile.introVideo.Likes.map((entry: any, index: any) => (
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

                    {/* Comments */}
                    <div className="right">
                        {Profile.introVideo.comments.map((data: any, index: any) => (
                            <div key={index} className="first">
                                <div className="profilefull">
                                    <div className="profiledetailss">
                                        <p className='ico1'>"</p>
                                        <div className="upper">
                                            <div className="full1">
                                                <div className="imagee">
                                                    <img src={data.profileImg} alt="profile pic" />
                                                </div>
                                            </div>
                                            <div className="message">
                                                <h1>{data.name}</h1>
                                                <h6>{data.type}</h6>
                                                <Rating name="read-only" sx={{ mt: 1 }} value={data.rating} readOnly />
                                                <p>{data.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Courses */}
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