import '../App.css';
import LandingImage from './ui/landing_1.png';
import Chart from './ui/chart.png';
import PreviewDatasetImg from './ui/preview_dataset.png';
import CodeImg from './ui/landing_dataprovider.png.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homepage = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            {/* <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">Animated Dropdown</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Click Me!
                                </a>
                                <div className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <header>
                <nav className="navbar navbar-expand-lg py-3 m-0 w-100 fixed-top" style={{ background: "#000" }}>
                    <div className='container'>
                        <Link className="navbar-brand me-2" to="/"><img src='' style={{ "width": "80px", "height": "auto" }} />Syntax AI</Link>
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
            <section className="hero-section" style={{ paddingTop: "200px" }}>
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
            <section style={{ padding: 0 }}>
                <div className='container d-flex align-items-center justify-content-center'>
                    <img src={Chart} className='img-fluid' alt="" />
                </div>
            </section>
            <section className="qa-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='section-heading'>Why do blockchains need oracles?</h1>
                            <p className='qa-para my-3'>Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure.</p>
                            <a href="/">Link Here</a>
                        </div>
                        <div className="col-lg-6">
                            <h1 className='section-heading'>Why do blockchains need oracles?</h1>
                            <p className='qa-para my-3'>Blockchains are great at providing immutable storage and deterministic verifiable computations. However, they cannot access trusted real-world information available outside their networks. Band Protocol enhances smart contract functionalities by granting access to reliable data without any central authority or points of failure.</p>
                            <a href="/">Link Here</a>
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
                            <h1>Hewading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
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
                        <h1>175+</h1>
                        <p>cryptocurrencies</p>
                    </div>
                    <div>
                        <h1>175+</h1>
                        <p>cryptocurrencies</p>
                    </div>
                </div>
            </section>
            <section className='developers-section'>
                <div className='container'>
                    <div className='row'>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage