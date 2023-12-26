import '../App.css';
import LandingImage from './ui/landing_1.png';
import Chart from './ui/chart.png';
import PreviewDatasetImg from './ui/preview_dataset.png';
import CodeImg from './ui/landing_dataprovider.png.png';
import DeveloperImg1 from './ui/developer-1.png';
import CoinWhite from './ui/coin-white.png';
import Logo from './ui/logo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg py-3 m-0 w-100" style={{ background: "#000" }}>
                    <div className='container'>
                        <Link className="navbar-brand me-2" to="/"><img src={Logo} style={{ "width": "30px", "height": "auto" }} /></Link>
                        <button className="navbar-toggler text-white" onClick={() => setToggle(toggle ? false : true)} type="button">
                            ok
                        </button>
                        <div className={`${toggle ? 'collapse' : ''} navbar-collapse text-white`}>
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="px-3 pt-2 btn-link active">
                                        Swap
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="px-3 pt-2 btn-link">
                                        Pool
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#project" className="px-3 pt-2 btn-link">
                                        Bridge
                                    </a>
                                </li>
                                <li className='nav-item'>
                                    <button className='btn btn-primary' style={{ marginTop: "-5px" }}>Buy More</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="hero-section" style={{ paddingTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <div>
                                <h1 className='hero-main-head'>Transforming Vision into Code,</h1>
                                <h1 className='hero-main-head highlight'>One Screenshot at a Time</h1>
                                <p className='hero-para mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima reiciendis inventore nihil eius eligendi, sapiente impedit, aliquid repellat enim quibusdam itaque ad dolore rerum! Impedit facere totam repellat nemo?</p>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <img src={LandingImage} className='img-fluid' alt="" />
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
                                            <h1 className="quick-card-head">Request Price Needs</h1>
                                            <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="quick-card">
                                    <div className="d-flex">
                                        <div className="p-2 d-flex align-items-center justify-content-center">
                                            <img src={CodeImg} className='img-fluid' alt="" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="quick-card-head">Request Price Needs</h1>
                                            <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="quick-card">
                                    <div className="d-flex">
                                        <div className="p-2 d-flex align-items-center justify-content-center">
                                            <img src={CodeImg} className='img-fluid' alt="" />
                                        </div>
                                        <div className="p-2">
                                            <h1 className="quick-card-head">Request Price Needs</h1>
                                            <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card">
                                    <div className="p-2">
                                        <img src={CodeImg} className='img-fluid' alt="" />
                                        <h1 className="quick-card-head">Request Price Needs</h1>
                                        <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card">
                                    <div className="p-2">
                                        <img src={CodeImg} className='img-fluid' alt="" />
                                        <h1 className="quick-card-head">Request Price Needs</h1>
                                        <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card">
                                    <div className="p-2">
                                        <img src={CodeImg} className='img-fluid' alt="" />
                                        <h1 className="quick-card-head">Request Price Needs</h1>
                                        <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card">
                                    <div className="p-2">
                                        <img src={CodeImg} className='img-fluid' alt="" />
                                        <h1 className="quick-card-head">Request Price Needs</h1>
                                        <p className="mt-5"><a href="/" className="quick-card-link">View Details</a></p>
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
                        <div className="col-lg-6">
                            <h1 className='section-heading text-white'>Why do blockchains need oracles?</h1>
                            <p className='qa-para my-3'>Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure.</p>
                            <a href="/" className='text-white'>Link Here</a>
                        </div>
                        <div className="col-lg-6">
                            <h1 className='section-heading text-white'>Why do blockchains need oracles?</h1>
                            <p className='qa-para my-3'>Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure.</p>
                            <a href="/" className='text-white'>Link Here</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tokenomics-section">
                <div className="container">
                    <h1 className='text-center section-heading'>BandChain</h1>
                    <p className='section-para text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero magni, aperiam iusto error est ducimus minus quos cumque voluptates iste voluptate cupiditate dolorem assumenda necessitatibus vitae consequatur, officiis quasi?</p>
                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h1 className='text-center stat-main'>5</h1>
                                <p className='text-center stat-desc'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center stat-main'>5</h1>
                                <p className='text-center stat-desc'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center stat-main'>5</h1>
                                <p className='text-center stat-desc'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center stat-main'>5</h1>
                                <p className='text-center stat-desc'>Validators</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{ background: "#fff", color: "#000" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            Image
                        </div>
                        <div className='col-lg-6'>
                            <h1>Heading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ea, nam minus velit officiis incidunt animi? Hic voluptates dolorum voluptate magni in quod, sint perspiciatis porro. Quisquam facilis consequuntur alias?</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dataset-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1 className='dataset-main-head'>User Friendly <br /> Interface</h1>
                            <p className='dataset-para mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                        </div>
                        <div className='col-lg-6' style={{ position: "relative" }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
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
                    <h1 className='stat-main text-left text-white'>175+</h1>
                        <p className='stat-desc text-left'>cryptocurrencies</p>
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
                                    <img src={DeveloperImg1} style = {{width: "40px", height: "40px"}} alt="" />
                                    <div className='px-2' style = {{flex: 1}}>
                                        <p className='developer-title'>Precision Code Transformation</p>
                                    </div>
                                </div>
                                <div className='developer-item w-100 d-flex align-items-center'>
                                    <img src={DeveloperImg1} style = {{width: "40px", height: "40px"}} alt="" />
                                    <div className='px-2' style = {{flex: 1}}>
                                        <p className='developer-title'>Precision Code Transformation</p>
                                    </div>
                                </div>
                                <div className='developer-item w-100 d-flex align-items-center'>
                                    <img src={DeveloperImg1} style = {{width: "40px", height: "40px"}} alt="" />
                                    <div className='px-2' style = {{flex: 1}}>
                                        <p className='developer-title'>Precision Code Transformation</p>
                                    </div>
                                </div>
                                <div className='developer-item w-100 d-flex align-items-center'>
                                    <img src={DeveloperImg1} style = {{width: "40px", height: "40px"}} alt="" />
                                    <div className='px-2' style = {{flex: 1}}>
                                        <p className='developer-title'>Precision Code Transformation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className = "row">
                        <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                            <img src={CoinWhite} className='img-fluid' alt="" />
                        </div>
                        <div className='col-lg-6'>
                            <h1 className='about-head'>Band Token</h1>
                            <p className='about-para mt-3 mb-5'>BandChain utilizes the native BAND token to secure the decentralized oracle network through delegated Proof-of-Stake and settlement for transaction fees. Validators are required to stake BAND token to fulfil data requests in return for a portion of the query fees and earn block rewards.</p>
                            <a href="/" className='about-link'>Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage