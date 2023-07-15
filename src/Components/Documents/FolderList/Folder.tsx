import React, { useState } from "react";
// import Course from "./Course";
import data from '../../DummyData/FolderData'
import Carousel from "react-grid-carousel";
import './Folder.css'
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';

interface type {
    id: string,
    item: number,
    size: number,
    name: string,
    color: string
};



const initialProducts: type[] = data;

const Folder = () => {
    const [Folder, setFolder] = useState(initialProducts);
    return (
        <div className="course" style={{ width: "100%", overflow: "hidden" }}>
            <Carousel cols={5}>
                {Folder.map((folder, index) => (
                    <Carousel.Item key={index}>
                        <div className="box">
                            <FolderRoundedIcon sx={{ color: folder.color, p: 1, boxShadow: " 0 5px 10px #d8d8d8", fontSize: "35px",borderRadius:"10px" }} />
                            <p className="foldername">{folder.name}</p>
                            <div className="small">
                                <p className="fadetext">{folder.item}items</p>
                                <p className="fadetext">{folder.size}MB</p>
                            </div>
                        </div>

                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default Folder;
