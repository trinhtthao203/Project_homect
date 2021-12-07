import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Itemdetail from "./Itemdetail";
function Item({ props }) {
  const link = props.tieude;
  const photo = require(`../Images/${props.url}`).default;
  return (
    <div className="container-item">
      <div>
        <img src={photo} alt="Hinh Can Ho" width="100" height="100" />
      </div>
      <div className="re__card-info-content">
        <h3 className="re__card-title">
          <Link to={`/${link}`}>
            <span className="title">{props.tieude}</span>
          </Link>
        </h3>
        <div></div>
        <div className="re__card-description js__card-description">
          {props.mota}
        </div>
        <div className="re__card-contact">
          <div className="re__card-published-info">
            <span className="re__card-published-info-contact-name">
              <span>Đăng bởi </span>

              <span>{props.fullname}</span>
            </span>
            <br />
            <span
              className="re__card-published-info-published-at"
              aria-label="03/10/2021"
              data-microtip-position="right"
              role="tooltip"
            >
              Ngày đăng: {dateFormat(props.ngaydang, "dd/mm/yyyy")}
            </span>
          </div>
          <div className="re__card-contact-button">
            <span
              className="re__btn re__btn-green-solid--sm re__btn-icon-left--sm js__card-phone-btn"
              prid="30889200"
              tracking-id="lead-phone-srp"
              tracking-label="loc=SRP For Sale,prid=30889200"
            >
              <i className="re__icon-phone-call"></i>
              <span>Số điện thoại: {props.phonenumber}</span>
            </span>
            <span
              className="js__marking-product re__btn re__btn-se-border--sm re__btn-icon--sm"
              aria-label="Bấm để lưu tin"
              data-microtip-position="bottom"
              role="tooltip"
              tracking-id="save-listing"
              tracking-label="loc=SRP For Sale"
            >
              <i className="re__icon-heart--sm"></i>
              <i className="re__icon-heart-pressed--sm"></i>
            </span>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Item;
