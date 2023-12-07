import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSinhVienValues } from "../redux/reducer/QuanlySinhvienReducer";
class FormComponent extends Component {
  handleChangeInput = (e) => {
    let { name, value } = e.target;

    this.props.updateSinhVienValues({
      ...this.props.sinhVienValues,
      [name]: value,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.pushNewSV(this.props.newArrSV);
  };
  render() {
    console.log(this.props);
    const { sinhVienValues } = this.props;
    console.log(sinhVienValues);
    return (
      <div className="my-2">
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
                    type="text"
                    className="form-control"
                    name="id"
                    value={sinhVienValues.id}
                    onChange={this.handleChangeInput}
                  />
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
                </div>
                <div className="mb-2">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={sinhVienValues.email}
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-success" type="submit">
              Thêm Sinh Viên
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
  newArrSV: state.QuanlySinhvienReducer.arrSV,
});

const mapDispatchToProps = (dispatch) => {
  return {
    pushNewSV: (sinhvien) => {
      const action = {
        type: "ADD-SINH-VIEN",
        payload: sinhvien,
      };
      dispatch(action);
    },
    updateSinhVienValues: (values) => dispatch(updateSinhVienValues(values)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

//
