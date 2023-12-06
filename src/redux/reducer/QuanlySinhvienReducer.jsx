import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrSV: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      sdt: "0797751163",
      email: "nguyenvana@gmail.com",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      sdt: "0797751163",
      email: "nguyenvanb@gmail.com",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      sdt: "0797751163",
      email: "nguyenvanC@gmail.com",
    },
  ],
};

const QuanlySinhvienReducer = createSlice({
  name: "QuanlySinhvienReducer",
  initialState,
  reducers: {
    pushNewSV(state, action) {
      switch (action.type) {
        case "ADD-SINH-VIEN": {
          console.log("Rendering List");

          const arrSvUpdate = [...state.arrSV, action.sinhvien];
          state.arrSV = arrSvUpdate;
          return { ...state };
        }
        default: {
          return { ...state };
        }
      }
    },
  },
});

export const { pushNewSV } = QuanlySinhvienReducer.actions;
console.log(QuanlySinhvienReducer.actions.pushNewSV);

export default QuanlySinhvienReducer.reducer;
