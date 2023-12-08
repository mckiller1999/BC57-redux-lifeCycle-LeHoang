import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteSV,
  disBtn,
  updateSinhVienValues,
  searchSV,
  toggleEditMode,
} from "../redux/reducer/QuanlySinhvienReducer";

class ListSV extends Component {
  handleDelete = (id) => {
    this.props.dispatch(deleteSV(id));
  };

  handleEdit = (value) => {
    this.props.dispatch(updateSinhVienValues(value));
    this.props.dispatch(disBtn(false));
    this.props.dispatch(toggleEditMode(true));
    console.log(this.props.sinhVien.isInEditMode);
  };

  handleSearch = (e) => {
    const searchTerm = e.target.value;
    this.props.dispatch(searchSV(searchTerm));
  };

  renderList = () => {
    const { arrSV, searchResults } = this.props;
    const dataToRender = searchResults.length > 0 ? searchResults : arrSV;

    return dataToRender.map((sinhVien, index) => {
      const studentId =
        typeof sinhVien.id === "string" ? sinhVien.id : String(sinhVien.id);
      return (
        <tr key={index}>
          <td>{studentId}</td>
          <td>{sinhVien.name}</td>
          <td>{sinhVien.sdt}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleDelete(sinhVien.id);
              }}
            >
              Xóa
            </button>
            <button
              type="button"
              className="btn btn-primary mx-2"
              onClick={() => {
                this.handleEdit(sinhVien);
              }}
            >
              Sửa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="card">
        <div className="my-2">
          <input
            className="form-control"
            type="text"
            placeholder="Nhập mã sinh viên"
            onChange={this.handleSearch}
          />
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Mã sinh viên</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>{this.renderList()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrSV: state.QuanlySinhvienReducer.arrSV,
  searchResults: state.QuanlySinhvienReducer.searchResults,
  valid: state.QuanlySinhvienReducer.sinhVien.valid,
  sinhVien: state.QuanlySinhvienReducer.sinhVien,
});

export default connect(mapStateToProps)(ListSV);
