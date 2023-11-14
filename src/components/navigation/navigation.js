import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  const showModal = () => {
    let modalContainer = document.querySelector(".container2");
    if(modalContainer.style.display === "block"){modalContainer.style.display = "none"}
    else{modalContainer.style.display = "block"}
    ;
    modalContainer.style.opacity = "1.2";
  };

  return (
    <>
      <title>RK CMS</title>

      <section id="top"> </section>

      <div className="navbar" id="navbar">
        <ul>
          <Link to={"/"}>
            <img alt="logo" src="logo/drawing1.svg" />
          </Link>
          <li>
            <a className="scroll-aboutcms" href="/#aboutcms">
              about-CMS
            </a>
          </li>
          <li>
            <a className="scroll-complaintsection" href="/#complaint-section">
              Complaint-Section
            </a>
          </li>
          <li>
            <a className="scroll-aboutus" href="/#aboutus">
              about Us
            </a>
          </li>
          {/* <li><Link to={'/filecomplaint'}><button onClick={showModal} className='btn'>File a Complaint</button></Link></li> */}
          <li>
            <button onClick={showModal} className="btn">
              File a Complaint
            </button>
          </li>
        </ul>
        <div></div>
      </div>
    </>
  );
};

export default Navigation;
