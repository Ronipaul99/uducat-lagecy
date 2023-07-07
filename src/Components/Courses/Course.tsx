import React from "react";
import Carousel from 'react-grid-carousel';




const Course = (data: any) => {
    const { CourseName, imgURL,  teacherName } = data;
    return (
        <>
            {/* <Carousel.Item>

                <div style={{
                    height: "300px",
                    minWidth: "150px",
                    maxWidth: "290px",
                    backgroundColor: "#fff",
                    borderRadius: "15px",

                }}>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}> */}

                        {/* <div style={{
                            width: "100%",
                            borderRadius: "15px",
                            height: "50%",
                            overflow: "hidden"
                        }}>
                            <img style={{
                                objectFit: "cover",
                                height: "100%",
                                width: "100%"
                            }} src={imgURL} alt="pic here" />
                        </div>

                        <div style={{
                            width: "100%",
                            minHeight: "50%"
                        }}>
                            {/* product heading details */}

{/* 
                            <div style={{ width: "100%", height: "80%", display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", padding: 1 }}> <div style={{ width: "34px", justifyContent: "center", display: "flex", alignItems: "center" }}><p style={{ fontSize: "12px", color: "#3C4852", fontWeight:700 }}>Hindi</p></div> <p style={{ marginLeft: "5px", fontSize: "12px", color: "#F1B334", fontWeight: 700 }}>English</p></div>
                                <p style={{ fontSize: "16px", fontWeight: 600, color: "#3C4852", letterSpacing: "-0.005em", padding: 1 }}>{CourseName}</p>

                            </div>
                            <div style={{ width: "100%", height: "20%", alignItems: "flex-end", display: "flex" }}>
                                <p style={{ color: "#7A8B94", fontSize: "14px", padding: 1 }}>{teacherName}</p>
                            </div>



                        </div>
                    </div>
                </div>
            </Carousel.Item> */} 
        </>
    );
};

export default Course;





