import '../App.css';
import LandingImage from './ui/landing_1.png';
import Chart from './ui/chart.png';
import PreviewDatasetImg from './ui/preview_dataset.png';

const Homepage = () => {
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
            <section className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Secure, Scalable
                                Blockchain-Agnostic
                                Decentralized Oracle</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima reiciendis inventore nihil eius eligendi, sapiente impedit, aliquid repellat enim quibusdam itaque ad dolore rerum! Impedit facere totam repellat nemo?</p>
                        </div>
                        <div className="col-lg-6">
                            <img src={LandingImage} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="quick">
                <div className="container">
                    <h1>Quick access to our products</h1>
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-lg-4 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 mt-3">
                                <div className="quick-card-top">
                                    <div className="d-flex">
                                        <div className="p-2">
                                            Image
                                        </div>
                                        <div className="p-2">
                                            <h1>Request Price Needs</h1>
                                            <a href="/">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section style={{padding: 0}}>
                <div className='container d-flex align-items-center justify-content-center'>
                    <img src={Chart} className='img-fluid' alt="" />
                </div>
            </section>
            <section className="qa-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Question?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, hic necessitatibus reprehenderit, possimus sequi aliquid a voluptatem voluptates error amet voluptatibus velit inventore aspernatur iusto laudantium deserunt corporis culpa. Beatae!</p>
                            <a href="/">Link Here</a>
                        </div>
                        <div className="col-lg-6">
                            <h1>Question?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, hic necessitatibus reprehenderit, possimus sequi aliquid a voluptatem voluptates error amet voluptatibus velit inventore aspernatur iusto laudantium deserunt corporis culpa. Beatae!</p>
                            <a href="/">Link Here</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tokenomics-section">
                <div className="container">
                    <h1 className='text-center'>BandChain</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero magni, aperiam iusto error est ducimus minus quos cumque voluptates iste voluptate cupiditate dolorem assumenda necessitatibus vitae consequatur, officiis quasi?</p>
                    <div className='mt-5'>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h1 className='text-center'>5</h1>
                                <p className='text-center'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center'>5</h1>
                                <p className='text-center'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center'>5</h1>
                                <p className='text-center'>Validators</p>
                            </div>
                            <div className='col-lg-3'>
                                <h1 className='text-center'>5</h1>
                                <p className='text-center'>Validators</p>
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