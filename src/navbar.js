import React, {useState} from "react";


const Navbar =() => {
    const[show, setShow] = useState(false);
        return(
    <>
    <section className="navbar-bg">
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" color="white">AMERICAN EXPRESS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show":""}`}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./monitor_submission.js">Monitor Submission</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Payment Activity</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Reporting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">GMAS KPIs</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
</section>
    </>
    );
};

export default Navbar;