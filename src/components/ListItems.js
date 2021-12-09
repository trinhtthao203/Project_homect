import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Footer from "./part/HomeFooter";

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
      <div>
        <div className="container-listitem">
          {this.state.baiDang.map((props) => {
            return (
              <div className="container-card-baidang">
                <a
                  href={`/Itemdetail/${props.idbaidang}`}
                  className="card-link"
                >
                  <div
                    className="card"
                    style={{ width: "18rem", height: "27rem" }}
                  >
                    <img
                      className="card-img-top"
                      src={props.hinhanh}
                      alt="Hinh Can Ho"
                      height="200px"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{props.tieude}</h5>
                      <p className="card-text">
                        {" "}
                        🏡: {props.dientich} m2 💰:{props.mucgia} triệu\m2{" "}
                      </p>
                      <p>
                        Đăng bởi: <span>{props.fullname} </span> <br /> Ngày
                        đăng: {dateFormat(props.ngaydang, "dd/mm/yyyy")}{" "}
                      </p>

                      <a
                        href={`/Itemdetail/${props.idbaidang}`}
                        className="btn-detail"
                      >
                        Xem chi tiết ➜
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
          <div className="container-home-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItems;
