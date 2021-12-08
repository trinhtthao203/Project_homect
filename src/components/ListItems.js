import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
class ListItems extends React.Component {
  state = {
    baiDang: [],
  };
  componentDidMount() {
    axios
      .get("/baidang")
      .then((res) => {
        const baiDang = res.data;
        this.setState({ baiDang });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container-listitem">
        {this.state.baiDang.map((props) => {
          return (
            <div className="container-card-baidang">
              <div className="card" style={{ width: "16rem", height: "27rem" }}>
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
                  <a href={`/Itemdetail/${props.idbaidang}`}>Xem chi tiết...</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListItems;
