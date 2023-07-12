import React, { useState, useMemo } from 'react';
import './Documents.css';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import data from '../DummyData/data.json';
import { useDropzone } from 'react-dropzone';

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
                    {course.name}
                </div>

                <div className='size'>
                    {course.size}KB
                </div>

                <div className='people'>
                    <p >10+</p>
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
    const [tab, setTab] = useState(false);
    return (
        <div className='document'>
            <div className="ser">
                <div className="searchdiv">
                    <div className="in">
                        <input type="text" placeholder='Search...' />
                        <SearchOutlinedIcon fontSize='large' className='icon' />
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
                    <button onClick={() => setTab1(true)}><StarBorderRoundedIcon className='icon' />Started documents list</button>
                </div>
            </div>

            <div className="dandd">
                <div className='dnd' {...getRootProps({ style })}>
                    <div className="dnd1">
                        <div className="dnd2">
                            <input {...getInputProps()} />
                            <CreateNewFolderOutlinedIcon />
                            <p >Drag your documents, photos here</p>
                            <p>or</p>
                            <button onClick={open}>
                                Browse files
                            </button>
                        </div>
                    </div>
                </div>

                <div className='file'>
                    <p>Recent Files</p>
                    <div className="hd">
                        <div className="one"><p>Name</p></div>
                        <div className="two"><p>Size</p></div>
                        <div className="three"><p>Shared With</p></div>
                        <div className="four"><p>Last Modified</p></div>
                    </div>
                    <div>
                        <div>{file}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Documents;