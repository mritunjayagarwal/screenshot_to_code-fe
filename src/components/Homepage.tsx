import '../App.css';
import LandingImage from './ui/landing_1.png';
import Chart from './ui/chart.png';
import PreviewDatasetImg from './ui/preview_dataset.png';
import CodeImg from './ui/landing_dataprovider.png.png';
import LandingData2 from './ui/landing_data-2.png';
import LandingData3 from './ui/landing_data-3.png';
import LandingData4 from './ui/landing_data-4.png';
import LandingData5 from './ui/landing_data-5.png';
import LandingData6 from './ui/landing_data-6.png';
import LandingData7 from './ui/landing_data-7.png';
import DeveloperImg1 from './ui/developer-1.png';
import Chain from './ui/image (2).png';
import CoinWhite from './ui/coin-white.png';
import ArrowUp from './ui/arrow-up.png';
import Logo from './ui/logo.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Homepage = () => {

    const [toggle, setToggle] = useState(false);
    const isMobile = useMediaQuery({
        query: '(max-width: 800px)'
    });

    useEffect(() => {
        if (isMobile) {
            setToggle(true);
        } else {
            setToggle(false)
        }
    }, [])

    return (
        <>
            <main className='landing-main'>
                <div className="alert alert-dismissible fade show text-center p-1" style={{ background: "#4520E6", color: "#fff" }} role="alert">
                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                    <button type="button" className="close" style={{ marginTop: "-10px" }} data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <header>
                    <nav className="navbar navbar-expand-lg py-3 m-0 w-100 sticky-top" style={{ background: "#000" }}>
                        <div className='container'>
                            <Link className="navbar-brand me-2" to="/"><img src={Logo} style={{ "width": "30px", "height": "auto" }} /></Link>
                            <button className="navbar-toggler text-white" onClick={() => setToggle(toggle ? false : true)} type="button">
                                <span className="fa fa-bars text-white"></span>
                            </button>
                            <div className={`${toggle ? 'collapse' : ''} navbar-collapse text-white`}>
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="px-3 pt-2 btn-link">
                                            Products
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="px-3 pt-2 btn-link">
                                            Developer
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#project" className="px-3 pt-2 btn-link">
                                            Community
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#project" className="px-3 pt-2 btn-link">
                                            About
                                        </a>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="/code"><button className='btn btn-navbar btn-primary' style={{ marginTop: "-5px" }}>Start Generating</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <section className="hero-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center justify-content-center order-md-2">
                                <img src={LandingImage} className='img-fluid mb-5' alt="" />
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-center order-md-1">
                                <div>
                                    <h1 className='hero-main-head'>Transforming Vision into Code,</h1>
                                    <h1 className='hero-main-head highlight'>One Screenshot at a Time</h1>
                                    <p className='hero-para mt-4'>Syntax offers a streamlined web development solution, transforming screenshots into functional code with advanced AI assistance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quick">
                    <div className="container">
                        <h1 className='section-heading text-white'>Quick access to our products</h1>
                        <div className="mt-3">
                            <div className="row">
                                <div className="col-lg-4 mt-3">
                                    <div className="quick-card">
                                        <div className="d-flex">
                                            <div className="p-2 d-flex align-items-center justify-content-center">
                                                <img src={CodeImg} className='img-fluid' alt="" />
                                            </div>
                                            <div className="p-2">
                                                <h1 className="quick-card-head">Screenshot to Code</h1>
                                                <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="quick-card">
                                        <div className="d-flex">
                                            <div className="p-2 d-flex align-items-center justify-content-center">
                                                <img src={LandingData2} className='img-fluid' alt="" />
                                            </div>
                                            <div className="p-2">
                                                <h1 className="quick-card-head">Telegram AI Assistant</h1>
                                                <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-3">
                                    <div className="quick-card">
                                        <div className="d-flex">
                                            <div className="p-2 d-flex align-items-center justify-content-center">
                                                <img src={LandingData3} className='img-fluid' alt="" />
                                            </div>
                                            <div className="p-2">
                                                <h1 className="quick-card-head">Product Docs</h1>
                                                <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="quick-card quick-card-bottom">
                                        <div className="p-2">
                                            <img src={LandingData4} className='img-fluid' alt="" />
                                            <h1 className="quick-card-head">Ecosystem Whitepaper</h1>
                                            <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="quick-card quick-card-bottom">
                                        <div className="p-2">
                                            <div className="py-3">
                                                <img src={LandingData5} className='img-fluid' alt="" />
                                            </div>
                                            <h1 className="quick-card-head">Smart Contract Code</h1>
                                            <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="quick-card quick-card-bottom">
                                        <div className="p-2">
                                            <div className="pt-5 pb-4">
                                                <img src={LandingData6} className='img-fluid' alt="" />
                                            </div>
                                            <h1 className="quick-card-head">Oracle Scripts</h1>
                                            <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 mt-3">
                                    <div className="quick-card quick-card-bottom">
                                        <div className="p-2">
                                            <img src={LandingData7} className='img-fluid' alt="" />
                                            <h1 className="quick-card-head">Tech Spec</h1>
                                            <div className='d-flex mt-5'>
                                                    <p className="mr-2"><a href="/" className="quick-card-link">View Details</a></p>
                                                    <span style = {{background: "#4520E6", borderRadius: "5px"}}><img src={ArrowUp} className='img-fluid p-1' alt="" /></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section style={{ padding: "50px 0 0 0" }}>
                    <div className='container d-flex align-items-center justify-content-center'>
                        <img src={Chart} className='img-fluid' alt="" />
                    </div>
                </section>
                <section className="qa-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pb-5">
                                <h1 className='section-heading text-white'>How does Syntax ensures accuracy and efficiency when converting screenshots into functional code?</h1>
                                <p className='qa-para my-3'>Syntax utilizes cutting-edge machine learning algorithms to accurately interpret screenshots, converting them into clean, standards-compliant code. Our AI's advanced visual recognition ensures efficiency and precision, catering to diverse web design complexities with consistent performance, making it an essential tool for modern web development.</p>
                                <a href="/" className='text-white'>Link Here <i className='fa fa-arrow-right highlight'></i></a>
                            </div>
                            <div className="col-lg-6 pb-5">
                                <h1 className='section-heading text-white'>Bridging Design and Development with AI</h1>
                                <p className='qa-para mt-5 mb-5'>Experience a seamless fusion of design and coding, where advanced AI transforms your visual ideas into functional, elegant code effortlessly. Syntax is the catalyst for a new era in web development, merging creativity with technology.</p>
                                <a href="/" className='text-white'>Link Here <i className='fa fa-arrow-right highlight'></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tokenomics-section">
                    <div className="container">
                        <h1 className='text-center section-heading'>Syntax Statistics</h1>
                        <p className='section-para text-center'>Explore our impressive stats – from unmatched code accuracy to a rapidly growing global user base</p>
                        <div className='mt-5'>
                            <div className='row'>
                                <div className='col-lg-3 col-6'>
                                    <h1 className='text-center stat-main'>70%</h1>
                                    <p className='text-center stat-desc'>Development Time Reduced</p>
                                </div>
                                <div className='col-lg-3 col-6'>
                                    <h1 className='text-center stat-main'>95%</h1>
                                    <p className='text-center stat-desc'>Accuracy</p>
                                </div>
                                <div className='col-lg-3 col-6'>
                                    <h1 className='text-center stat-main'>30</h1>
                                    <p className='text-center stat-desc'>Secs Average Request Completion Time</p>
                                </div>
                                <div className='col-lg-3 col-6'>
                                    <h1 className='text-center stat-main'>40%</h1>
                                    <p className='text-center stat-desc'> Increased Developer Productivity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='accessible-section' style={{ background: "#fff", color: "#000" }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                <img src={Chain} className='img-fluid' alt="" />
                            </div>
                            <div className='col-lg-6'>
                                <h1 className='accessible-head'>Syntax: Coding Made Accessible for Everyone</h1>
                                <p className='accessible-para mt-3'>Syntax provides an intuitive and accessible platform for web development, suitable for individuals with or without previous coding experience. Its sophisticated design facilitates the effortless transformation of visual concepts into practical code, enabling users to confidently and easily bring their creative visions to life.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='dataset-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h1 className='dataset-main-head'>User Friendly <br /> Interface</h1>
                                <p className='dataset-para mt-4'>streamline website building with Syntax intuitively designed, user-friendly UI, perfect for both novices and experienced developers alike.</p>
                            </div>
                            <div className='col-lg-6' style={{ position: "relative" }}>
                                <div className='abs-dataset'>
                                    <img src={PreviewDatasetImg} className='img-fluid' alt="" />
                                    <div className='d-flex justify-content-center mt-4'>
                                        <div className='d-flex'>
                                            <button className='btn btn-primary'>hey</button>
                                            <button className='btn btn-primary'>hey</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div>
                            <h1 className='stat-main text-left text-white'>175+</h1>
                            <p className='stat-desc text-left'>cryptocurrencies</p>
                        </div>
                        <div className='mt-5'>
                            <h1 className='stat-main text-left text-white'>20+</h1>
                            <p className='stat-desc text-left'>foreign exchange rates and commodities</p>
                        </div>
                    </div>
                </section>
                <section className='developers-section'>
                    <div className='container'>
                        <div className='row'>

                        </div>
                    </div>
                </section>
                <section className='developer-section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <h1 className='text-white section-heading mt-4'>Built <br /> for Developers</h1>
                                <p className='developer-para mt-3'>Engineered with the developer in mind, Syntax stands as a testament to innovation with purpose-built tools and features. From advanced code generation capabilities to seamless integration with existing workflows, our platform is meticulously crafted to empower developers, providing the essential toolkit for efficient and creative web development journeys.</p>
                            </div>
                            <div className='col-lg-6'>
                                <div>
                                    <div className='developer-item w-100 d-flex align-items-center'>
                                        <img src={DeveloperImg1} style={{ width: "40px", height: "40px" }} alt="" />
                                        <div className='px-2' style={{ flex: 1 }}>
                                            <p className='developer-title'>Precision Code Transformation</p>
                                        </div>
                                        <i className='fa fa-arrow-right highlight'></i>
                                    </div>
                                    <div className='developer-item w-100 d-flex align-items-center'>
                                        <img src={DeveloperImg1} style={{ width: "40px", height: "40px" }} alt="" />
                                        <div className='px-2' style={{ flex: 1 }}>
                                            <p className='developer-title'>AI-Powered Coding Companion</p>
                                        </div>
                                        <i className='fa fa-arrow-right highlight'></i>
                                    </div>
                                    <div className='developer-item w-100 d-flex align-items-center'>
                                        <img src={DeveloperImg1} style={{ width: "40px", height: "40px" }} alt="" />
                                        <div className='px-2' style={{ flex: 1 }}>
                                            <p className='developer-title'>Seamless Workflow Integration</p>
                                        </div>
                                        <i className='fa fa-arrow-right highlight'></i>
                                    </div>
                                    <div className='developer-item w-100 d-flex align-items-center'>
                                        <img src={DeveloperImg1} style={{ width: "40px", height: "40px" }} alt="" />
                                        <div className='px-2' style={{ flex: 1 }}>
                                            <p className='developer-title'>Blockchain Standards Implementation</p>
                                        </div>
                                        <i className='fa fa-arrow-right highlight'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className="row">
                            <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                                <img src={CoinWhite} className='img-fluid' alt="" />
                            </div>
                            <div className='col-lg-6'>
                                <h1 className='about-head'>Syntax Token</h1>
                                <p className='about-para mt-3 mb-5'>Syntax Token leverages the robustness of the Solidity programming language and adheres to the ERC-20 standards, ensuring a secure and standardized foundation for its implementation in the blockchain ecosystem.</p>
                                <a href="/" className='about-link'>Learn More <i className='fa fa-arrow-right highlight'></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3'>

                            </div>
                            <div className='col-lg-9'>

                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default Homepage