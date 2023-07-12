import React, { useMemo, useState } from 'react';
import './Documents.css';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import { Box } from '@mui/system';
import { Card, Typography } from '@mui/material';
import { Button } from '@mui/base';
import data from '../DummyData/data.json';
import { useDropzone } from 'react-dropzone';

const Documents = () => {

    // const [files, setFiles] = React.useState([]);


    const file = data.map((course, index) => (
        <>
            <Box>
                {course.path}
            </Box>
            <Box>
                <Card>
                    <Typography >PDF</Typography>
                </Card>
            </Box>
            <Box>
                {course.size}KB
            </Box>
        </>
    ));

    // console.log(data)

    const {
        getInputProps,
        open,
    } = useDropzone({
        accept: { 'image/*': [] }, noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            console.log(acceptedFiles, data);
            acceptedFiles.forEach(item => {
                // data.push(item)
                console.log(item)
            })
        }
    });



    // const files1 = files.map(file => <Box key={file.path}>{file.path}</Box>);




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

            <Box>
                <input {...getInputProps()} />
                <Typography >Drag 'n' drop some files here, or click to select files</Typography>
                <Button onClick={open}>
                    Choose a file
                </Button>
            </Box>

            <Box>
                <Typography> All documentes :</Typography>
                <Box>
                    <Box sx={{ p: 1 }}>{file}</Box>
                    {/* <Box sx={{ p: 1 }}>{files1}</Box> */}
                </Box>
            </Box>
        </div>
    )
}

export default Documents;