import React from "react";

function Heading() {
  return (
    <div className="container container-fluid">
      <div className="card bg-light p-3 border-0">
        <div className="card-body">
          <h1 className="card-title">A Warm Welcome!</h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/#" className="btn btn-primary">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
}

export default Heading;
