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
// import Images from './images';
import img from './Images/icons8-image-30.png';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddIcon from '@mui/icons-material/Add';
import Folder from './FolderList/Folder';

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
    // const [imgtype,setImgtype]=useState("");

    // for (let i = 0; i < data.length; i++) {
    //     setImgtype(data[i].type);
    // }

    // console.log(imgtype)

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
                    <AvatarGroup max={3} total={24}>
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
    const [tab2, setTab2] = useState(false);

    const rdpage = () => {
        setTab2(true);
        setTab(false);
        setTab1(false);
    }

    const ndpage = () => {
        setTab(false);
        setTab1(true);
        setTab2(false);
    }

    const stpage = () => {
        setTab(true);
        setTab1(false);
        setTab2(false);
    }

    const [popup, setPopup] = useState("crd");
    const close = () => {
        setPopup("crd")
    }

    return (
        <div className='document'>



            <div className="ser">
                <div className="searchdiv">
                    <div className="infull">
                        <div className="in">
                            <input type="text" placeholder='Search...' />
                        </div>
                        <button className='btn'>
                            Search
                        </button>
                    </div>
                    <div className="btns">

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
                    <button onClick={stpage}>< CreateNewFolderOutlinedIcon className='icon' />Upload and attach documents</button>
                    <button onClick={ndpage}>< TaskOutlinedIcon className='icon' />Documents list</button>
                    <button onClick={rdpage}><StarBorderRoundedIcon className='icon' />Started documents list</button>
                </div>
            </div>

            {tab &&
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
                        <div className='filelist'>
                            <div>{file}</div>
                        </div>
                    </div>
                </div>
            }
            {tab1 &&
                <>
                    {/* pop up */}
                    <div className={popup}>
                        <div className="upr">
                            <div className="upr1">
                                <p className='doctitle'>Documents</p>
                                < StarBorderRoundedIcon className='icon1' />
                            </div>

                            <div className="f1">
                                <div className="l12">
                                    <p className='lable'> Document type</p>
                                    <input className='input' type="text" placeholder='Word file' />
                                    <p className='lable'>Document name</p>
                                    <input className='input' type="text" placeholder='mymaterialsinformation' />
                                </div>
                                <div className="r1">
                                    <p className='lable'>Last modified date </p>
                                    <input className='input' type="date" />
                                    <p className='lable'>Document size</p>
                                    <input className='input' type="text" placeholder='size' />
                                </div>
                            </div>

                        </div>
                        <div className="lwr">
                            <button onClick={close} className='outlined'>
                            Close
                            </button>
                            <button className='contained'>
                            Quick link
                            </button>
                        </div>
                    </div>
                    {/* pop up */}
                    <div className='case'>
                        <div className='file1'>
                            <div className="hd">
                                <div className="hd1">
                                    <div className="one"><p>Name</p></div>
                                    <div className="two"><p>Size</p></div>
                                    <div className="three"><p>Shared With</p></div>
                                    <div className="four"><p>Last Modified</p></div>
                                </div>
                            </div>
                            <div className='filelist'>
                                <div>{file}</div>
                            </div>
                            <div className="fheader">
                                <p className='f'>Folders</p>
                                <button className='btn' onClick={() => { setPopup("popup") }}>Create folder<AddIcon className='icon' /></button>
                            </div>
                            <div className="folderlist">
                                <Folder />
                            </div>
                        </div>
                    </div>
                </>
            }
            {tab2 &&
                <>
                    <div className='case'>
                        <div className='file1'>
                            <div className="hd">
                                <div className="hd1">
                                    <div className="one"><p>Name</p></div>
                                    <div className="two"><p>Size</p></div>
                                    <div className="three"><p>Shared With</p></div>
                                    <div className="four"><p>Last Modified</p></div>
                                </div>
                            </div>
                            <div className='filelist'>
                                <div>{file}</div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Documents;