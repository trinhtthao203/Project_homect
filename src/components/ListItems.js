import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
<<<<<<< HEAD
class ListItems extends React.Component{
=======

class ListItems extends React.Component {
>>>>>>> 833135fc65969acd7b54ed9fd28ac7f63836bd9d
  state = {
    baiDang: [],
  };
  componentDidMount() {
    axios
      .get("/baidang")
      .then((res) => {
        const baiDang = res.data;
<<<<<<< HEAD
        this.setState({baiDang});
=======
        this.setState({ baiDang });
>>>>>>> 833135fc65969acd7b54ed9fd28ac7f63836bd9d
      })
      .catch(function (error) {
        console.log(error);
      });
<<<<<<< HEAD
    }
    render(){
       
    return (
        <div>
            {this.state.baiDang.map((props) => {
            
              return(
            
              <div>
               <div className="container-item">
               <div>
               <img src={require(`../Images/${props.hinhanh}`).default} alt="Hinh Can Ho" width="100" height="100"/>
               </div>
              <div className="re__card-info-content">
=======
  }
  render() {
    return (
      <div className="container-listitem">
        {this.state.baiDang.map((props) => {
          return (
            <div>
              <div className="container-item">
                <div>
                  <img
                    src={`${props.hinhanh}`}
                    alt="Hinh Can Ho"
                    width="100"
                    height="100"
                  />
                </div>
                <div className="re__card-info-content">
>>>>>>> 833135fc65969acd7b54ed9fd28ac7f63836bd9d
                  <h3 className="re__card-title">
                    <Link to={`/Itemdetail/${props.idbaidang}`}>
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
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListItems;
