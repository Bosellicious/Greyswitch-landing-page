import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Logo } from './Logo';
import House from './images/house.png'
import HouseWithKey from './images/feature-house-one.png'
import CoOwnHouse from './images/feature-house-two.png'
import InvestHouse from './images/feature-house-three.png'
import { RightFlipSpring, BigRightSpring } from './components/Spring';


const Home: NextPage = () => {
	return (
		<div className="">
			<Head>
				<title>GreySwitch</title>
				<meta name="description" content="GreySwitch landing page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-white py-4 px-5">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<Logo />
						</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className="nav-link btn btn-primary text-white"  href="#">Join waiting list</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>

				<section className="asascontainer" style={{ borderTop: "1px solid rgba(0, 0, 0, 0.09)" }}>
					<div className="row">
						<div className="col">
							<div className="container" style={{ paddingTop: '13rem', paddingLeft: '6rem', paddingRight: '6rem' }}>
								<h2 className="display-3 fw-bolder">
									<span className="text-primary">Co-own </span>
									properties abroad from Africa
								</h2>
								<p className="text-muted">
									GreySwitch makes real estate ownership and investment across high-yielding real estate markets 
									across the globe easier for Africans.
								</p>
								<form action="#" method="post">
									<div className="input-group mb-3">
										<input type="email" className="form-control form-control-lg" placeholder="Enter email address" aria-label="email address" aria-describedby="submit-btn" required />
										<button className="btn btn-primary" type="submit" id="submit-btn">Join waiting list</button>
									</div>
									<small className="text-primary">
										<i className="fas fa-user"></i> We promise not to spam you!
									</small>
								</form>
							</div>
						</div>
						<div className="col">
							<Image
								src={House}
								alt="House"
								className='w-100'
								height={1400}
							/>
						</div>
					</div>		
				</section>

				{/* Diversify Section */}
				<section className="container p-5">
					<h2 className="text-center display-5 p-5 fw-bold">Diversify your portfolio through high-yielding foreign real estate markets across
						<span id="country" className="text-primary"> Canada</span>
					</h2>
				</section>
				{/* End Diversify Section */}


				{/* Own section */}
				<section style={{ backgroundColor: '#F3E3DC' }}>
					<BigRightSpring style={{ position: "absolute" }} />
					<RightFlipSpring style={{ position: 'absolute', right: 0, marginTop: '61.5vh' }} />
					<div className="container p-5">
						<div className="row">
							<div className="col">
								<Image
									src={HouseWithKey}
									alt="House"
									className='w-100'
									height={1400}
								/>
							</div>
							<div className="col">
								<div className="" style={{ paddingLeft: '3rem', paddingTop: '7rem' }}>
									<h1 className="display-4 fw-bold mb-4">Own</h1>
									<p className="lead text-muted mb-5" style={{ lineHeight: '1' }}>
										Ownership of real-estate should not be limited to your localty.
										<br />
										Own real-estate through our easy process.
									</p>

									<span className="d-block fw-bolder mb-3">Features</span>
									<ul className="pl-0 ml-0">
										<li className='pl-0 ml-0 mb-3 fw-bold'>Liquidate your ownership/investment at any time.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Rental management and rent collection.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Property Management services.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Secure and Stable investment.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Long-term investment with short term rewards.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End Own section */}


				{/* Co-Own section */}
				<section style={{ backgroundColor: '#E5DCF3' }}>
					<BigRightSpring style={{ position: "absolute" }} color='purple' />
					<RightFlipSpring color='purple' style={{ position: 'absolute', right: 0, marginTop: '64vh' }} />
					<div className="container p-5">
						<div className="row">
							<div className="col">
								<Image
									src={CoOwnHouse}
									alt="House"
									className='w-100'
									height={1400}
								/>
							</div>
							<div className="col">
								<div className="" style={{ paddingLeft: '3rem', paddingTop: '7rem' }}>
									<h1 className="display-4 fw-bold mb-4">Co-Own</h1>
									<p className="lead text-muted mb-5" style={{ lineHeight: '1' }}>
										Owning real estate should not be a hassle. 
									
										<br className='my-3'/>

										Why wait until you can pay in full for a property? Own real
										estate abroad with family,friends, colleagues and the 
										Greyswitch Community.
									</p>

									<span className="d-block fw-bolder mb-3">Features</span>
									<ul className="pl-0 ml-0">
										<li className='pl-0 ml-0 mb-3 fw-bold'>Fractional Real Estate Ownership.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Fractional rent disbursement.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>No-property management worries.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Secure and Stable investment.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Long-term investment with short term rewards.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Liquidate your ownership/investment at any time.</li>

									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End Co-Own section */}


				{/* Invest section */}
				<section style={{ backgroundColor: '#E3F3DC' }}>
					<BigRightSpring style={{ position: "absolute" }} color='green' />
					<RightFlipSpring color='green' style={{ position: 'absolute', right: 0, marginTop: '61vh' }} />
					<div className="container p-5">
						<div className="row">
							<div className="col">
								<Image
									src={InvestHouse}
									alt="House"
									className='w-100'
									height={1400}
								/>
							</div>
							<div className="col">
								<div className="" style={{ paddingLeft: '3rem', paddingTop: '7rem' }}>
									<h1 className="display-4 fw-bold mb-4">Invest</h1>
									<p className="lead text-muted mb-5" style={{ lineHeight: '1' }}>
										Diversify your investment portfolio with stable, low-risk,high
										<br />
										yielding foreign real estate rentals.
									</p>

									<span className="d-block fw-bolder mb-3">Features</span>
									<ul className="pl-0 ml-0">
										<li className='pl-0 ml-0 mb-3 fw-bold'>Fixed investment units.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Earn 15-20% annual interest in foreign currency.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Secure and Stable investment.</li>
										<li className='pl-0 ml-0 mb-3 fw-bold'>Long-term investment with short term rewards.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* End Invest section */}

				{/* Footer banner */}
				<footer className="container">
					<div className="row" style={{ paddingBottom: '12rem' }}>
						<div className="col-md-9">
							<h3 className="text-primary text-uppercase mt-5 fw-bold">greyswitch for agents</h3>

							<h2 className="fw-bolder mt-5">Increase sales possibilities by listing on <span className="text-primary">GreySwitch</span></h2>
							<p className="lead text-muted mt-4">Have a property to sell? Our community members are looking to buy. Listing here is a smart choice.</p>
						</div>
						<div className="col-md-3 text-end">
							<span className="d-block mb-5" style={{ visibility: 'hidden' }}>asdas</span>
							<button className="btn btn-primary mt-5">Join waiting list
								<i className="fas fa-arrow-right"></i>
							</button>
						</div>
					</div>
					<hr />
					<div className="row py-3 pb-5">
						<div className="col-md-3">
							<Logo />
							<p className="text-muted mt-4">
								GreySwitch is a real-estate solution enabling
								Africans to own high-yielding properties
								abroad with ease.
							</p>
						</div>
						<div className="col-md-1"></div>
						<div className="col-md-2">
							<h5 className="fw-bolder">Legal</h5>
							
							<div className="mt-3">
								<a href="/privacy" className="my-3 d-block text-dark">Privacy Policy</a>
								<a href="/terms" className="my-3 d-block text-dark">Terms of Agreement</a>
							</div>
						</div>
						<div className="col-md-2">
						<h5 className="fw-bolder">Support</h5>

						<div className="mt-3">
							<a href="/FAQ" className="my-3 d-block text-dark">FAQ</a> 
							
							</div>		
						</div>
						<div className="col-md-2">
							<h5 className="fw-bolder">Connect with us</h5>

							<div className="mt-3">
								<a href="/Blog" className="my-3 d-block text-dark">Blog</a>
							</div>
						</div>
					</div>
					<hr />

					<div className="d-flex justify-content-between mb-4">
						<span className="text-start">
							Copyright &copy; 2022 Greyswitch Technologies
						</span>
						<span className="text-end">
							<a href="#" className="text-dark">Back to top</a>
						</span>
					</div>
				</footer>
				{/* End Footer banner */}

			</div>
		</div>
	)
}

			 

export default Home
