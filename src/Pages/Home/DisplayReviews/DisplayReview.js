import React from 'react';

const DisplayReview = ({ review }) => {
    const { name, desc, img } = review;
    return (
        <div>
            <div className="card mb-5" style={{ maxWidth: '640px' }}>

                <div className="row row-cols-1 row-cols-md-12   g-4">

                    <div className="col">

                        <div class="card">
                            <img src={img} className="mx-auto" height="100px" style={{ height: "100px", width: "100px" }} alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{name}</h5>
                                <p class="card-text">{desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DisplayReview;