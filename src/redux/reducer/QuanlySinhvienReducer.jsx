import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSV: [
    { id: 1, name: "abc", sdt: "0000000001", email: "abc@gmail1.com" },
    { id: 2, name: "abc1", sdt: "0000000002", email: "abc@gmail2.com" },
    { id: 3, name: "abc2", sdt: "0000000003", email: "abc@gmail3.com" },
    { id: 4, name: "abc3", sdt: "0000000004", email: "abc@gmail4.com" },
    { id: 5, name: "abc4", sdt: "0000000005", email: "abc@gmail5.com" },
  ],
  sinhVien: {
    values: {
      id: "",
      name: "",
      sdt: "",
      email: "",
    },

    errors: {
      id: "",
      name: "",
      sdt: "",
      email: "",
    },
    valid: false,
  },
};

const QuanlySinhvienReducer = createSlice({
  name: "QuanlySinhvienReducer",
  initialState,
  reducers: {
    updateError: (state, action) => {
      state.sinhVien.errors = action.payload;
      console.log(action);
    },
    pushNewSV: (state, action) => {
      //console.log(action);
      state.arrSV.push(action.payload);
      state.sinhVien.values = {
        id: " ",
        name: " ",
        sdt: " ",
        email: " ",
      };
    },
    updateSinhVienValues: (state, action) => {
      state.sinhVien.values = action.payload;
    },
    deleteSV: (state, action) => {
      state.arrSV = state.arrSV.filter((sV) => sV.id !== action.payload);
    },
    updateNewSV: (state, action) => {
      const updatedArrSV = state.arrSV.map((sv) => {
        return sv.id === action.payload.id ? action.payload : sv;
      });
      state.arrSV = updatedArrSV;
    },
    validationSV: (state, action) => {
      let errMess = "";
      const { name, value } = action.payload;
      if (value === "") {
        errMess = `${name} ko dc bo trong`;
      } else {
        if (name) {
          switch (name) {
            case "id":
              {
                let regexNumber = /^[1-9]\d{0,1}$/;
                if (!regexNumber.test(value)) {
                  errMess = `${name} chỉ từ 1 đến 99`;
                }
              }
              break;
            case "email":
              {
                let regexNumber = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!regexNumber.test(value)) {
                  errMess = `${name} không hợp lệ`;
                }
              }
              break;
            case "sdt":
              {
                let regexNumber = /^0\d{9,10}$/;

                if (!regexNumber.test(value)) {
                  errMess = `${name} bao gồm 10 số`;
                }
              }
              break;
            case "name":
              {
                let regexNumber = /^[^\d]+$/u;

                if (!regexNumber.test(value)) {
                  errMess = `${name} không chứa số`;
                }
              }
              break;
            default: {
              errMess = "";
            }
          }
        }
      }
      const newErrors = { ...state.sinhVien.errors, [name]: errMess };
      const isValid = Object.values(newErrors).every((error) => error === "");
      state.sinhVien = {
        ...state.sinhVien,
        errors: newErrors,
        valid: isValid,
      };
    },
    disBtn: (state) => {
      let vaild = true;
      for (let key in state.sinhVien.errors) {
        if (state.sinhVien.errors[key] !== "") {
          vaild = false;
        }
      }
      for (let key in state.sinhVien.values) {
        if (state.sinhVien.values[key] === "") {
          vaild = false;
        }
      }
      state.sinhVien.valid = vaild;
    },
    updateAddButtonState: (state, action) => {
      state.sinhVien.addButtonDisabled = action.payload;
    },
    updateUpdateButtonState: (state, action) => {
      state.sinhVien.updateButtonDisabled = action.payload;
    },
  },
});

export const {
  updateError,
  updateSinhVienValues,
  pushNewSV,
  deleteSV,
  updateNewSV,
  validationSV,
  disBtn,
  updateAddButtonState,
  updateUpdateButtonState,
} = QuanlySinhvienReducer.actions;

export default QuanlySinhvienReducer.reducer;
