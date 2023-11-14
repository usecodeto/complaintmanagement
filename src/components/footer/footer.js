import './footer.css';

const Footer = () => {
    return (
        <div className='footer' id='aboutus' >
            <div className='social-media' > 
            <h3> Follow us </h3>
            <a href="https://www.instagram.com/rkh.iitkgp/" target='_blank' rel="noopener norefferer noreferrer" ><img alt='instagram icon' src="logo/instalogo.svg"/></a>
            <a href="https://www.facebook.com/R.K.Hall.IITkgp/" target='_blank' rel="noopener norefferer noreferrer"><img alt='facebookicon' src="logo/facebooklogo.svg"/></a>

            </div>
            <div className='other-info'>
                <span>Terms and Conditions</span>
                <span>Privacy Policy</span>
                <span>Copyright &copy; </span>
                <span className='scroll-container'><a href='#top'><button ><img alt='scrollup' src='logo/scroll up.png'/></button></a></span>
            </div>
        </div>
    )
}

export default Footer;