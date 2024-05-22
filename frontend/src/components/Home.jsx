import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          My Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="jumbotron jumbotron-fluid text-center bg-primary text-white">
        <div className="container">
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">
            This is a simple landing page created with Bootstrap.
          </p>
          <a href="#" className="btn btn-light btn-lg">
            Learn More
          </a>
        </div>
      </header>

      <section className="container my-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Feature One</h3>
            <p>Description of the first feature.</p>
          </div>
          <div className="col-md-4">
            <h3>Feature Two</h3>
            <p>Description of the second feature.</p>
          </div>
          <div className="col-md-4">
            <h3>Feature Three</h3>
            <p>Description of the third feature.</p>
          </div>
        </div>
      </section>

      <footer className="bg-light text-center py-4">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
