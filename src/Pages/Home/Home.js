import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import "swiper/swiper-bundle.min.css";
import './Home.css'
import TopBanner from './TopBanner/TopBanner';
import img from '../../images/user.png'
import DisplayReview from './DisplayReviews/DisplayReview';
import pdf from '../../images/freepdf.png'
import Analytics from './Analytics/Analytics';
import quiz from '../../images/quiz1.png'

const reviews = [
    {
        id: 1,
        name: 'Shivkumar Sharma',

        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue tellus. In venenatis massa a tristique sodales. ",

        img: `${img}`

    },
    {
        id: 2,
        name: 'Raghavendra B Pandit',

        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue tellus. In venenatis massa a tristique sodales. ",

        img: `${img}`

    },
    {
        id: 3,
        name: 'Kartik Aggarwal',

        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue tellus. In venenatis massa a tristique sodales. ",

        img: `${img}`

    },
    {
        id: 4,
        name: 'Shobhit Garg',

        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue tellus. In venenatis massa a tristique sodales.",

        img: `${img}`

    },
    {
        id: 5,
        name: 'Aman Agrawal',

        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et congue tellus. In venenatis massa a tristique sodales.",

        img: `${img}`

    },
]



const Home = () => {
    const handleChatbot = () => {
        const chaton = {
            scrollY: 1
        }

    }
    return (
        <div >
            <TopBanner></TopBanner>
            <button type="button" className="btn btn-primary my-5">View Plan</button>
            {/* <div className="container">
                <div class="row">
                    <div class="col-lg-12  col-sm-12" style={{ margin: "0 auto" }}>
                        <Analytics></Analytics>
                    </div>

                </div>

            </div> */}

            <div className="row my-5">
                <div className="col-lg-6 col-sm-12" style={{ backgroundColor: "#E5FAFF" }}>
                    <img src={quiz} className="pt-5" style={{ width: "300px" }} alt="" />
                </div>
                <div className="col-lg-5 col-sm-12 ps-4">
                    <h1 className="text-start"><span className="text-primary ">QBank Edition 5</span> with 18,500+ new pattern MCQs</h1>
                    <h4 className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam nemo corrupti eos laborum autem architecto tempora molestiae odit facilis?Rem quam nemo corrupti eos laborum autem architecto tempora molestiae odit facilis?</h4>
                    <button type="button" className="btn btn-primary my-5">View Plan</button>
                </div>
            </div>

            <div className="container my-5">
                <h1 className="my-5">What Make LegalEduTech special?</h1>
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">01</span></h3>
                        <h4 className="text-start">Heading1</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">02</span></h3>
                        <h4 className="text-start">Heading2</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">03</span></h3>
                        <h4 className="text-start">Heading3</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">04</span></h3>
                        <h4 className="text-start">Heading4</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">05</span></h3>
                        <h4 className="text-start">Heading5</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3 className="text-start"><span className="text-info">06</span></h3>
                        <h4 className="text-start">Heading6</h4>
                        <h5 className="text-start" style={{ textAlign: "justify" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi accusantium facere dolores sint laborum ut? Ad cupiditate, laborum alias sed nobis vel, dolorum totam fugiat vero, quae saepe quidem. Tenetur?</h5>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col">
                        <img src={pdf} alt="" />

                    </div>
                    <div className="col">
                        <h1>DownLoad Our FREE PDF</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, harum. Ipsum voluptatum tempore obcaecati officia nam optio ratione repellat at!</p>
                        <button type="button" className="btn btn-danger"> <i className="fas fa-download me-3"></i>FREE Download</button>

                    </div>
                </div>
            </div>
            <div className="Chatbot"> <i onClick={handleChatbot} class="far fa-comments"></i>  <p style={{ fontSize: "19px", fontWeight: "bolder" }}>Free Chatbot</p></div>
            <div className="chatbox"></div>


            <div className="ReviewBackground" >
                <div className='swiperbackground swiper-container'>
                    <h2 className="text-light mb-2 fw-bolder">Check Out Their Stores</h2>
                    <Swiper
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Navigation, Pagination, Scrollbar]}
                        spaceBetween={50}

                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            reviews.map(review => (
                                <SwiperSlide key={review.id}>
                                    <DisplayReview key={review.id} review={review}></DisplayReview>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <div className="container p-5">
                <h2>Contact Us</h2>
                <div className="row">
                    <div className="col">
                        <h2 className="mt-5">Get in Touch</h2>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-user fa-2x"></i>
                            <div className="info ms-4">
                                <div className="head text-start" >Our Institue Name</div>
                                <div className="sub-title">Legal Edu Tech</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center my-3">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                            <div className="info text-start ms-4">
                                <div className="head">Address</div>
                                <div className="sub-title">123, street,India</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fas fa-envelope fa-2x"></i>
                            <div className="info text-start ms-4">
                                <div className="head">Email</div>
                                <div className="sub-title">leagaledu@mail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="col p-5 contactmeBackground">
                        <form action="https://formsubmit.co/legaledu@mail.com" method="POST" className="row g-3">

                            <h3>Message Us</h3>
                            <div className="col-md-6">

                                <input type="text" name="name" required className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-6">

                                <input type="email" name="email" required className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12">

                                <input type="text" name="subject" className="form-control" id="inputAddress" placeholder="Subject" />
                            </div>
                            <div className="col-12">

                                <textarea className="form-control" name="Message" rows="3" placeholder="Your Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Home;