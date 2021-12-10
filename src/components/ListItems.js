import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import Footer from "./part/HomeFooter";
import SearchItem from "./SearchItem";
import Item from "./Item";
class ListItems extends React.Component {
  state = {
    baiDang: [],
    selectField: 30,
    sort: 30
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
  
  handleSelect = (e) =>{
    console.log(e.target.value);
    this.setState({selectField: e.target.value})
  };

  handleSort = (e) =>{
    console.log(e.target.value);
    this.setState({sort: e.target.value})
  };

  handleSearch = (e) =>{

    e.preventDefault();
    if(this.state.selectField == 0 && this.state.sort == 0)
    {
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
    else {
      console.log(this.state.selectField);
    axios
    .post("/timkiem/idquan", {
      idquan: this.state.selectField,
      mucgia: this.state.sort
    })
    .then((res) => {
      const baiDang = res.data;
      this.setState({ baiDang });
      console.log('tìm thành công');
    })
    .catch((error) => {
      console.log(error);
      console.log("lỗi tìm tiếm không lấy được dữ liệu");
    });
  }
  }
  render() {
    return (
      <div>
        <SearchItem handleSelect={this.handleSelect} handleSort={this.handleSort} handleSearch={this.handleSearch}/>
        <div className="container-listitem">
          <Item baiDang={this.state.baiDang}/>
          {this.state.baiDang.map((props) => {
            return (
              <div className="container-card-baidang">
                <div
                  className="card"
                  style={{ width: "18rem", height: "27rem" }}
                >
                  <a
                    href={`/Itemdetail/${props.idbaidang}`}
                    className="card-link"
                  >
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
          <div className="container-home-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItems;
