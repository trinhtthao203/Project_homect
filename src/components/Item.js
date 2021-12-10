import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";

function Item(props ) {
  return (
      <div>
  {        props.baiDang.map((props) => {
            return (
              <div className="container-card-baidang">
                <div
                  className="card"
                  style={{ width: "16rem", height: "27rem" }}
                >
                  <img
                    className="card-img-top"
                    src={props.hinhanh}
                    alt="Hinh Can Ho"
                    height="200px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{props.tieude}</h5>
                    <p className="card-text">{props.mota}</p>
                    <span>Đăng bởi: {props.fullname} </span>
                    <a
                      href={`/Itemdetail/${props.idbaidang}`}
                      className="btn-detail"
                    >
                      Xem chi tiết ➜
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
  );
}

export default Item;
