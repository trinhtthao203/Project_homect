import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import SearchItem from "./SearchItem";
import Item from "./Item";
class ListItems extends React.Component {
  state = {
    baiDang: [],
    selectField: 30,
    sort: 30,
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

  handleSelect = (e) => {
    console.log(e.target.value);
    this.setState({ selectField: e.target.value });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.selectField == 0 && this.state.sort == 0) {
      axios
        .get("/baidang")
        .then((res) => {
          const baiDang = res.data;
          this.setState({ baiDang });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log(this.state.selectField);
      axios
        .post("/timkiem/idquan", {
          idquan: this.state.selectField,
          mucgia: this.state.sort,
        })
        .then((res) => {
          const baiDang = res.data;
          this.setState({ baiDang });
          console.log("Tìm thành công");
        })
        .catch((error) => {
          console.log(error);
          console.log("lỗi tìm tiếm không lấy được dữ liệu");
        });
    }
  };
  render() {
    return (
      <div className="container-search">
        <SearchItem
          handleSelect={this.handleSelect}
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
        />
        <Item baiDang={this.state.baiDang} />
      </div>
    );
  }
}

export default ListItems;
