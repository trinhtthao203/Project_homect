import React from "react";

function HomeFooter() {
  return (
    <div>
      {/* <!-- Site footer --> */}
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Homect.com <i>HOMECT </i> là trang web mua bán bất động sản được
                tạo ra nhằm mục đích học tập. Với mục đích tạo ra trang web giúp
                cho việc tìm kiếm thông tin mua bán căn hộ-chung cư một cách dễ
                dàng hơn. Website sử dụng các công cụ CSS, Bootstrap,
                JavaScript, PostgreSQL, Leaflet.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Thành viên</h6>
              <ul className="footer-links">
                <li>
                  <p>B1809293 Trịnh Thanh Thảo</p>
                </li>
                <li>
                  <p>B1809538 Lâm Thị Băng Tuyền</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">Homect</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeFooter;
