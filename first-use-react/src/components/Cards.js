import React from "react";

function Cards(props) {
  return (
    <div className="col-12 col-md-6 col-xl-3 d-flex justify-content-evenly">
      <div className="card text-center m-3 " style={{ width: "18rem", height: "34rem"}}>
        <img src={props.cardImg} className="card-img-top" alt="..." style={{height: "11rem"}}/>
        <div className="card-body">
          <h5 className="card-title">{props.cardName}</h5>
          <p className="card-text">{props.cardText}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <a href={props.cardLink} class="btn btn-primary">
              Go wikipedia
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
