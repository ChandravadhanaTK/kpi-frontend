import React, {useState} from "react";


const Navbar =() => {
    const[show, setShow] = useState(false);
        return(
    <>
    <section className="navbar-bg">
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" color="white">AMERICAN EXPRESS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show":""}`}>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./monitor_submission.js">Monitor Submission</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Payment Activity</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Reporting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">GMAS KPIs</a>
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