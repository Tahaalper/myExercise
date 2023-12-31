import React from "react";

const GeneralModal = ({ title, content, buttonText, buttonOnClick }) => {
    return (
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.4",
                zIndex: 100,
                top: 0,
                left: 0,
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }}>
            <div style={{width:"50%",backgroundColor:"#fff",borderRadius:"5px"}}>
                <h1 className="text-center">{title}</h1>
                <p>{content}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-danger" onClick={buttonOnClick}>{buttonText}</button>
                </div>
            </div>

        </div>
    )
}

export default GeneralModal;