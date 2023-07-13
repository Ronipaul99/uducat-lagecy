import React, { useState, useMemo } from 'react';
import './Documents.css';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import data from '../DummyData/data.json';
import { useDropzone } from 'react-dropzone';
import Images from './images';
import img from './Images/icons8-image-30.png'

const Documents = () => {
    interface inter {
        path?: string;
        lastModified: number;
        lastModifiedDate?: string | object;
        name: string;
        size: number;
        type: string;
        webkitRelativePath: string;
    }

    const imgdrop: inter[] = data;
    const file = data.map((course, index) => (
        <div key={index} className='files'>
            <div className="in">
                <div className='name'>
                    <img className='logo' src={img} alt="alt" />
                    {course.name}
                </div>

                <div className='size'>
                    {course.size}KB
                </div>

                <div className='people'>
                    <AvatarGroup max={3}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                    </AvatarGroup>
                </div>
                <div className='modifi'>
                    {course.lastModifiedDate}
                </div>
            </div>
        </div>
    ));




    const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject,
        open,
    } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            console.log(acceptedFiles, data);
            acceptedFiles.forEach(File => {
                imgdrop.push(File)
                console.log(File)
            })
        }
    });
    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };




    const style = useMemo(() => ({
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);


    const [tab1, setTab1] = useState(false);
    const [tab, setTab] = useState(true);

    const rdpage = () => {
        setTab(false);
        setTab1(true);
    }
    return (
        <div className='document'>
            <div className="ser">
                <div className="searchdiv">
                    <div className="in">
                        <input type="text" placeholder='Search...' />
                    </div>
                    <div className="btns">
                        <button className='btn'>
                            Search
                        </button>
                        <div className='cat'>
                            <p className='t'> Category</p>
                            <DriveFileRenameOutlineOutlinedIcon className='ico' />
                        </div>
                        <div className='tm'>
                            <p className='t'>Time period</p>
                            <DriveFileRenameOutlineOutlinedIcon className='ico' />
                        </div>
                        <div className='doc'>
                            <p className='t'>document type</p>
                            <DriveFileRenameOutlineOutlinedIcon className='ico' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fu">
                <div className="tabs">
                    <button onClick={() => setTab(true)}>< CreateNewFolderOutlinedIcon className='icon' />Upload and attach docuents</button>
                    <button onClick={() => setTab(false)}>< TaskOutlinedIcon className='icon' />Documents list</button>
                    <button onClick={rdpage}><StarBorderRoundedIcon className='icon' />Started documents list</button>
                </div>
            </div>

            {tab ?
                <div className="dandd">
                    <div className='dnd' {...getRootProps({ style })}>
                        <div className="dnd1">
                            <div className="dnd2">
                                <input {...getInputProps()} />
                                <CreateNewFolderOutlinedIcon className='icn' />
                                <p className='txt'>Drag your documents, photos here</p>
                                <p className='or'>or</p>
                                <button className='browsefilebtn' onClick={open}>
                                    Browse files
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='file'>
                        <p className='rf'>Recent Files</p>
                        <div className="hd">
                            <div className="hd1">
                                <div className="one"><p>Name</p></div>
                                <div className="two"><p>Size</p></div>
                                <div className="three"><p>Shared With</p></div>
                                <div className="four"><p>Last Modified</p></div>
                            </div>
                        </div>
                        <div>
                            <div>{file}</div>
                        </div>
                    </div>
                </div>
                :
                <>
                </>
            }
            {tab1 ?
                <>
                </>
                :
                <>
                </>
            }
        </div>
    )
}

export default Documents;