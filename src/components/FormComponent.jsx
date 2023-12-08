//cập nhật thêm sau
//chuyển các function về redux hết mức có thể

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  disBtn,
  pushNewSV,
  toggleEditMode,
  updateError,
  updateNewSV,
  updateSinhVienValues,
  validationSV,
} from "../redux/reducer/QuanlySinhvienReducer";
class FormComponent extends Component {
  handleChangeInput = (e) => {
    let { name, value } = e.target;

    this.props.validationSV({ name, value });

    this.props.updateSinhVienValues({
      ...this.props.sinhVienValues,
      [name]: value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();

    this.props.pushNewSV(this.props.sinhVienValues);
    return;
  };

  render() {
    const { sinhVienValues, errorValue, addButtonDisabled } = this.props;

    return (
      <div className="my-2">
        <h3>Bảng nhập thông tin sinh viên</h3>
        <form className="card" onSubmit={this.submitForm}>
          <div className="card-header bg-dark text-white">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="mb-2">
                  <label>Mã SV:</label>
                  <input
                    disabled={this.props.isInEditMode}
                    type="text"
                    className="form-control"
                    name="id"
                    value={sinhVienValues.id}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{errorValue.id}</p>
                </div>
                <div className="mb-2">
                  <label>Số Điện Thoại:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="sdt"
                    value={sinhVienValues.sdt}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{errorValue.sdt}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-2">
                  <label>Họ Tên:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={sinhVienValues.name}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{errorValue.name}</p>
                </div>
                <div className="mb-2">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={sinhVienValues.email}
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger">{errorValue.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success"
              type="submit"
              disabled={!this.props.valid || addButtonDisabled}
            >
              Thêm Sinh Viên
            </button>
            <button
              className="btn btn-primary mx-5"
              type="button"
              onClick={() => {
                this.props.updateNewSV(this.props.sinhVienValues);
                this.props.toggleEditMode(false);
              }}
              disabled={!this.props.sinhVien.isInEditMode}
            >
              Cập nhật sinh viên
            </button>
          </div>
        </form>
      </div>
    );
  }
}

//
const mapStateToProps = (state) => ({
  sinhVienValues: state.QuanlySinhvienReducer.sinhVien.values,
  errorValue: state.QuanlySinhvienReducer.sinhVien.errors,
  valid: state.QuanlySinhvienReducer.sinhVien.valid,
  addButtonDisabled: state.QuanlySinhvienReducer.sinhVien.addButtonDisabled,
  sinhVien: state.QuanlySinhvienReducer.sinhVien,
  isInEditMode: state.QuanlySinhvienReducer.sinhVien.isInEditMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    pushNewSV: (sinhvien) => {
      const action = pushNewSV(sinhvien);
      dispatch(action);
    },

    updateSinhVienValues: (values) => dispatch(updateSinhVienValues(values)),
    updateNewSV: (value) => dispatch(updateNewSV(value)),
    updateError: (value) => dispatch(updateError(value)),
    validationSV: (value) => dispatch(validationSV(value)),
    disBtn: (valid) => dispatch(disBtn(valid)),
    toggleEditMode: (isInEditMode) => dispatch(toggleEditMode(isInEditMode)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
