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
      //console.log(action.type);
      switch (action.type) {
        case "ADD-SINH-VIEN": {
          console.log(action);
          const arrSvUpdate = [...state.arrSV, action.sinhvien];
          state.arrSV = arrSvUpdate;
          return { ...state };
        }
        default: {
          return { ...state };
        }
      }
    },
    updateSinhVienValues: (state, action) => {
      state.sinhVien.values = action.payload;
    },
  },
});

export const { pushNewSV, updateSinhVienValues } =
  QuanlySinhvienReducer.actions;

console.log(QuanlySinhvienReducer.actions);

export default QuanlySinhvienReducer.reducer;
