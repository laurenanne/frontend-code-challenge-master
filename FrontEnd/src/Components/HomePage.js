import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function HomePage() {
  // homepage with links to register or sign up and the admin page to view users

  return (
    <React.Fragment>
      <div className="home mt-5 container text-center vh-100">
        <h1>Yodlr Design Challenge</h1>
        <div className="m-3">
          <Link to="/signup">
            <Button
              style={{ borderColor: "#8f5cd1", color: "#8f5cd1" }}
              className="btn btn-outline btn-light"
            >
              Registration Page
            </Button>
          </Link>
        </div>

        <div className="m-3">
          <Link to="/admin">
            <Button
              style={{ borderColor: "#8f5cd1", color: "#8f5cd1" }}
              className="btn btn-outline btn-light"
            >
              Admin Page
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
