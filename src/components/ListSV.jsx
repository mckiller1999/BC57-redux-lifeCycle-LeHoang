import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteSV,
  disBtn,
  updateSinhVienValues,
  updateAddButtonState,
} from "../redux/reducer/QuanlySinhvienReducer";

class ListSV extends Component {
  handleDelete = (id) => {
    this.props.dispatch(deleteSV(id));
  };
  handleEdit = (value) => {
    this.props.dispatch(updateSinhVienValues(value));
    this.props.dispatch(disBtn(false));
    this.props.dispatch(updateAddButtonState(true));
  };
  renderList = () => {
    const { arrSV } = this.props;
    //console.log(arrSV);

    return arrSV.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.id}</td>
          <td>{sinhVien.name}</td>
          <td>{sinhVien.sdt}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              type="button"
              name=""
              id=""
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleDelete(sinhVien.id);
              }}
            >
              Xóa
            </button>
            <button
              type="button"
              name=""
              id=""
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
        <div className="table-responsive">
          <table className="table ">
            <thead className="table table-dark">
              <tr>
                <th scope="col">Mã sinh viên</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại </th>
                <th scope="col">Email</th>
                <th>Chỉnh Sửa</th>
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
  valid: state.QuanlySinhvienReducer.sinhVien.valid,
});

export default connect(mapStateToProps)(ListSV);
