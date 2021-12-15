import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
// import Footer from "./part/HomeFooter";

function Item(props) {
  return (
    <div>
      {props.baiDang.map((props) => {
        return (
          <div className="container-card-baidang" key={props.idbaidang}>
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <a href={`/Itemdetail/${props.idbaidang}`} className="card-link">
                <img
                  className="card-img-top"
                  src={props.hinhanh}
                  alt="Hinh Can Ho"
                  height="200px"
                />
              </a>
              <div className="card-body">
                <a
                  href={`/Itemdetail/${props.idbaidang}`}
                  className="card-link"
                >
                  <h5 className="card-title">{props.tieude}</h5>
                </a>
                <p className="card-text">
                  {" "}
                  🏡: {props.dientich} m2 💰:{props.mucgia} triệu\m2{" "}
                </p>
                <p>
                  Đăng bởi: <span>{props.fullname} </span> <br /> Ngày đăng:{" "}
                  {dateFormat(props.ngaydang, "dd/mm/yyyy")}{" "}
                </p>

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
      {/* <div className="container-home-footer">
        <Footer />
      </div> */}
    </div>
  );
}

export default Item;
