import React from 'react';
import './TopBanner.css'

const TopBanner = () => {
    return (
        <div className="background">
            <div className="row  d-flex align-items-center" style={{ margin: 0, height: "100%" }}>
                <div className="col">
                    <h2 style={{ color: "white" }}> Welcome to</h2>
                    <h1 style={{ color: "white" }}> LegalEduTech</h1>
                    <button type="button" className="btn btn-success">Get Started</button>

                </div>
            </div>
        </div>
    );
};

export default TopBanner;