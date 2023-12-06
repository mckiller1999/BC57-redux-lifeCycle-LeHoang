import React, { Component } from "react";
import { connect } from "react-redux";
class FormComponent extends Component {
  state = {
    id: "",
    name: "",
    sdt: "",
    email: "",
  };
  handleChangeInput = (e) => {
    let tagInput = e.target;

    let { name, value } = tagInput;
    //console.log(name, value);
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.addSv(this.state);
    //console.log("abc");
  };
  render() {
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
                    value={this.state.id}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="mb-2">
                  <label>Số Điện Thoại:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="sdt"
                    value={this.state.sdt}
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
                    value={this.state.name}
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="mb-2">
                  <label>Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addSv: (sinhVien) => {
      const action = {
        type: "ADD-SINH-VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormComponent);

//
