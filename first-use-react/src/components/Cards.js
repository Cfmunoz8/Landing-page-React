import React from "react";

function Cards (props) {
    return (
        <div className="container container-fluid">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.cardImg} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.cardName}</h5>
                    <p className="card-text">{props.cardText}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item"> <a href="#" class="btn btn-primary">Go somewhere</a></li>
                </ul>
            </div>
            </div>);
}

export default Cards