import React, { useEffect, useState } from 'react';
import './Schedule.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import SignalCellularAltOutlinedIcon from '@mui/icons-material/SignalCellularAltOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import DateRangeIcon from '@mui/icons-material/DateRange';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AddIcon from '@mui/icons-material/Add';
import Class from '../DummyData/Class';
import Schedulee from './Calender/Schedule.js';


const date1: Date = new Date()
const date2 = date1.getDate();
const month = date1.getMonth() + 1;
const year = date1.getFullYear();

interface typeofvar {
  ClassID: string
  ClassTitle: string
  EnrollStudents: number
  Date: string
  Time: string
}
const initial: typeofvar[] = Class;

const Schedule = () => {
  const fullDate = (`${date2}-${month < 10 ? `0${month}` : `${month}`}-${year}`);
  const [date, setDate] = useState(fullDate);
  const [time, setTime] = useState('');
  const [classData, setClassData] = useState(initial);
  const [tab, setTab] = useState(true);
  const [val,setVal] = useState(false);
  // console.log(val)


  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000);
    return () => {
      clearInterval(myInterval);
    }
  }, []);

  const current = new Date();
  const b = current.toLocaleString('en-US', {
    month: 'long',
  });
  // const Date1 = `${current.getFullYear()} ${b}  ${current.getDate()}`;


  return (
    <div className='schedule'>
      <h1 className='title'>Teacher Schedule</h1>


      <div className="timefull">
        <div className="timefit">
          <div className="date">
            <p>Current Date</p>
            <div className="num">
              <CalendarMonthIcon className='icon' />
              <p className='t'> {date.toString()}</p>
            </div>
          </div>
          <div className="time">
            <p>Current Time</p>
            <div className="num">
              <AccessTimeIcon className='icon' />
              <p className='t'>{time}</p>
            </div>
          </div>
        </div>
      </div>


      {/* tabs */}
      <div className="tabfull">
        <div className="joint">
          <div className="tabfit">
            <button onClick={() => setTab(true)}>List of upcoming classes</button>
            <button onClick={() => setTab(false)}>Callander view of events</button>
          </div>

          {tab ? <div className="schedulehead">
            <div className="header12">
              <div className="one"><p>Class Tittle</p><TextSnippetOutlinedIcon className='icon' /></div>
              <div className="two"><p>Class ID</p><SignalCellularAltOutlinedIcon className='icon' /></div>
              <div className="three"><p>Enroll students</p><GroupsOutlinedIcon className='icon' /></div>
              <div className="Four"></div>
            </div>
            <div className="map">
              {classData.map((data, key) => (
                <div key={key} className="class">
                  <div className="details">
                    <div className="row">
                      <div className="title">{data.ClassTitle}</div>
                      <div className="id">{data.ClassID}</div>
                      <div className="student">{data.EnrollStudents}</div>
                      <div className="btn"><button>Star class</button></div>
                    </div>
                    <div className="flex14">
                      <div className="num">
                        <CalendarMonthIcon className='icon' />
                        <p className='t'> {data.Date}</p>
                      </div>
                      <div className="num">
                        <AccessTimeIcon className='icon' />
                        <p className='t'>{data.Time}</p>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>

          </div>
            :
            <div className="secondTab">

              <div className="calender">
                <div className="leftc">
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar />
                  </LocalizationProvider>
                </div>
                <div className="mainc">
                  <div className="time">
                    <div className="dropdown">
                      <DateRangeIcon className='icon' />
                      <select id="days">
                        <option value="Today">Today</option>
                        <option value="ThisWeek">This Week</option>
                        <option value="LastWeek">Last Week</option>
                      </select>
                    </div>
                    <div className="times">
                      <div className="time">
                        <p> {current.getFullYear()}</p><small className='colorMonth'>{b}</small><small className='colorMonth'>{current.getDate()}</small>
                        <p>{time}</p>
                      </div>


                      <div className="button">
                        <button  onClick={() => setVal(true)}>Add event<AddIcon className='icon' /></button>
                      </div>
                    </div>
                  </div>


                  <div className="calender2">
                    <Schedulee boot={val}/>
                  </div>
                </div>
              </div>

            </div>
          }
        </div>
      </div>

    </div>
  )
}

export default Schedule;
