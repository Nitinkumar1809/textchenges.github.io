import React from "react";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="h">
              TEXT-TED
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    HOME
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-success me-2"
                    type="button"
                  >
                    <a href="./componet/About"></a>About-Ted
                  </button>
                </li>

                <li className="nav-item dropdown">
                  <ul className="dropdown-menu">
                    <li>
                      {/* <a className="dropdown-item" href="#">
              Action
            </a> */}
                    </li>
                    <li>
                      {/* <a className="dropdown-item" href="#">
              Another action
            </a> */}
                    </li>
                    <li>{/* <hr className="dropdown-divider" /> */}</li>
                    <li>
                      {/* <a className="dropdown-item" href="#">
              Something else here
            </a> */}
                    </li>
                  </ul>
                </li>
              </ul>
              
            {/* <button className="btn btn-outline-success me-2" type="button">Lifgt Mood </button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Drak Mood</button>
       */}

              <form className="d-flex" role="search ">
                <input
                  className="form-control me-2"
                  type="search  "
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success "
                  type="submit success "
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
