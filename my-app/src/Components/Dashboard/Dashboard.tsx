import React from 'react';
import './Dashboard.css';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush } from 'recharts';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Courses from '../Courses/Courses';


const Dashboard = () => {
    const data = [
        { name: "Group A", value: 800 },
        { name: "Group B", value: 400 }
    ];


    const data1 = [
        {
            name: "Dec",
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: "Jan",
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: "Feb",
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: "Mar",
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: "Apr",
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: "May",
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: "Jun",
            uv: 3490,
            pv: 4300,
            amt: 2100
        },
        {
            name: "Jul",
            uv: 11190,
            pv: 3000,
            amt: 2100
        },
        {
            name: "Aug",
            uv: 7090,
            pv: 2000,
            amt: 2100
        },
        {
            name: "Sep",
            uv: 6090,
            pv: 4000,
            amt: 2100
        },
        {
            name: "Oct",
            uv: 5090,
            pv: 4300,
            amt: 2100
        },
        {
            name: "Nov",
            uv: 4090,
            pv: 4300,
            amt: 2100
        }
    ];
    const COLORS = ["#7B30C0", "#6161F1"];
    return (
        <div className='dashboard'>
            <div className="text">
                <p>Dashboard</p>
            </div>
            <div className="firstsec">
                <div className="firstdiv">
                    <p className='header1'>Overall Perfomance</p>


                    <div className="smalldiv">
                        <div className="st">
                            <div className="flex">
                                <p className='cardheader'>Total hours through this month</p>
                                < QueryBuilderOutlinedIcon className='icon' />
                            </div>
                            <div className='number1'>
                                <h1 className='bold'>557</h1>
                                <p className='normal'>/157 hours</p>
                            </div>
                        </div>


                        <div className="nd">
                            <p className='cardheader'>Live classes</p>
                            <div className="flex1">
                                <div className='number3'>
                                    <h1 className='bold'>62.5</h1>
                                    <p className='normal'>/157 hours</p>
                                </div>
                                <TimelapseIcon className='icon' />
                            </div>
                        </div>


                        <div className="rd">
                            <p className='cardheader'>Free Live classes</p>
                            <div className="flex1">
                                <div className='number3'>
                                    <h1 className='bold'>62.5</h1>
                                    <p className='normal'>/157 hours</p>
                                </div>
                                <TimelapseIcon className='icon' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>









            {/* overview */}

            <div className="text1">
                <p>Overview</p>
            </div>
            <div className="div">

                <div className="div1">

                    <div className="st1">
                        <div className="side">
                            <div className="left">
                                <div className="tag1">112</div>
                                <div className="tag2">57</div>
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
                            <div className="rightcolumn">
                                <li>< FiberManualRecordIcon className='icon1' />Total Number of classes ( Done )</li>
                                <li>< FiberManualRecordIcon className='icon2' />Paid Class Attendance</li>
                            </div>
                        </div>
                    </div>


                    <div className="nd1">
                        <div className="side flex">
                            <div className="left1">
                                <p className='cardheader'>Views In Class</p>
                                <div className="flex2">
                                    <PersonOutlineOutlinedIcon className='icon' />


                                    <div className='number4'>
                                        <h1 className='bold'>512,356</h1>
                                        <p className='normal'>200+ today</p>
                                        <p className='normal1'>FROM LAST WEEK(322.2k)</p>
                                        <button>18% INCREASE</button>
                                    </div>
                                </div>
                            </div>



                            <div className="right">
                                <p className='cardheader'>Account Visitors</p>
                                <div className="flex2">
                                    <AdminPanelSettingsOutlinedIcon className='icon' />
                                    <div className='number4'>
                                        <h1 className='bold'>512,356</h1>
                                        <p className='normal'>200+ today</p>
                                        <p className='normal1'>FROM LAST WEEK(322.2k)</p>
                                        <button>18% INCREASE</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>





            {/* Earning */}
            <div className="text2">
                <p>Earning</p>
                <div className="dropdown">
                    <DateRangeIcon className='icon' />
                    <select id="days">
                        <option value="Today">Today</option>
                        <option value="ThisWeek">This Week</option>
                        <option value="LastWeek">Last Week</option>
                    </select>
                </div>
            </div>
            <div className="div">

                <div className="div1">

                    <div className="st2">
                        <div className="earning">
                            <div className="one">
                                <PaymentsRoundedIcon className='icon' />
                                <div className="amount">
                                    <p className='normal'>Monthly earning</p>
                                    <h1 className='bold'>₹30,000</h1>
                                </div>
                            </div>
                            <div className="one">
                                <PaymentsRoundedIcon className='icon' />
                                <div className="amount">
                                    <p className='normal'>Yearly earning</p>
                                    <h1 className='bold'>₹306,000</h1>
                                </div>
                            </div>
                            <div className="one">
                                <PaymentsRoundedIcon className='icon' />
                                <div className="amount">
                                    <p className='normal'>Total earning</p>
                                    <h1 className='bold'>₹306,000</h1>
                                </div>
                            </div>
                        </div>


                        <div className="text3">
                            <p className='t3'>Analaysis</p>
                            <div className="dropdown">
                                <DateRangeIcon className='icon' />
                                <select id="#">
                                    <option value="Today">Weekly</option>
                                    <option value="ThisWeek">Monthly</option>
                                    <option value="LastWeek">Yearly</option>
                                </select>
                            </div>
                        </div>



                        <LineChart
                            width={700}
                            height={500}
                            data={data1}
                            syncId="anyId"
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
                            <Brush />
                        </LineChart>
                    </div>


                    <div className="nd2">
                        <div className="side2 flex">
                            <div className="left2">
                                {/* calender */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DateCalendar />
                                </LocalizationProvider>

                                <div className="buttons"><button className='button1'>Cancel</button><button className='button2'>Done</button></div>
                            </div>



                            <div className="right1">

                                {/* events */}

                                <div className="event">
                                    <h1 className='header'>Notification</h1>
                                    <li className='li'>Wrong attire < FiberManualRecordIcon className='dot' /></li>
                                    <li className='li'>Future classes resheduled < FiberManualRecordIcon className='dot' /></li>
                                    <li className='li'>Date < FiberManualRecordIcon className='dot' /></li>
                                    <li className='li'>Classes rescheduled immediately < FiberManualRecordIcon className='dot' /></li>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>




            {/* Courses */}
            <div className="coursediv1">
                <div className="subdiv">
                    <div className="head">
                        <p className='bold'>#Courses</p>
                        <div className="search">
                            <input type="text" placeholder='Search...' />
                            <SearchOutlinedIcon fontSize='large' className='icon' />
                        </div>
                    </div>

                    <Courses />
                </div>
            </div>



            {/* Most successful classes */}

            <div className="coursediv1">
                <div className="subdiv">
                    <div className="head">
                        <p className='bold'>#Most successful class</p>
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

export default Dashboard;














