import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSV: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      sdt: "0797751163",
      email: "nguyenvana@gmail.com",
    },
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
  },
};

const QuanlySinhvienReducer = createSlice({
  name: "QuanlySinhvienReducer",
  initialState,
  reducers: {
    pushNewSV: (state, action) => {
      const arrUpdate = [...state.arrSV, action.sinhvien];
      state.arrSV = arrUpdate;
      return { ...state };
    },
    updateSinhVienValues: (state, action) => {
      state.sinhVien.values = action.payload;
    },
  },
});

export const { updateSinhVienValues } = QuanlySinhvienReducer.actions;

export const pushNewSV = (sinhVien) => ({
  type: "ADD-SINH-VIEN",
  payload: sinhVien,
});
//console.log(QuanlySinhvienReducer.actions);

export default QuanlySinhvienReducer.reducer;
