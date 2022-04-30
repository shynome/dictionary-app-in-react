import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top fixed-bottom bg-light" >
    <div className="col-md-4 d-flex align-items-center ms-3">
      <a href="/" className="my-auto me-2 mb-md-0 text-muted text-decoration-none lh-1">
      <i class="bi bi-journal-bookmark-fill"></i>
      </a>
      <span className="text-muted">© 2021 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-3">
      <li className="ms-3"><a className="text-muted" href="#"><i class="bi bi-github"></i></a></li>
    </ul>
  </footer>
        </>
       
    )
}

export default Footer;