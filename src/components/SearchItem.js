import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";

const SearchItem = (props) => {
  const [dsQuan, setDsquan] = useState([]);
  useEffect(() => {
    axios
      .get("/quan")
      .then((response) => {
        setDsquan(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <form onSubmit={props.handleSearch} action="">
        <div className=" row">
          <div className="col-sm-3">
            <select
              // className="search-area"
              className="form-select"
              defaultValue="Tìm quận"
              onChange={props.handleSelect}
            >
              <option disabled value="Tìm quận">
                Tìm quận
              </option>
              <option key={0} value={0}>
                Tất cả
              </option>
              {dsQuan.map((item) => {
                return (
                  <option key={item.idquan} value={item.idquan}>
                    {item.tenquan}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-3">
            <select
              className="form-select"
              defaultValue="Mức giá"
              onChange={props.handleSort}
            >
              <option disabled value="Mức giá">
                Mức giá
              </option>
              <option key={0} value={0}>
                Bỏ lọc
              </option>
              <option key={1} value={1}>
                Thấp tới cao
              </option>
              <option key={2} value={2}>
                Cao xuống thấp
              </option>
            </select>
          </div>
          <div className="col-sm-3">
            <button className="btn-custom" type="submit">
              Tìm kiếm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchItem;
