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
};

const QuanlySinhvienReducer = createSlice({
  name: "QuanlySinhvienReducer",
  initialState,
  reducers: {
    pushNewSV(state, action) {
      switch (action.type) {
        case "ADD-SINH-VIEN": {
          console.log(action); ///ko log ra đc action ?
          // const arrSvUpdate = [...state.arrSV, action.sinhvien];
          // state.arrSV = arrSvUpdate;
          // return { ...state };
        }
        default: {
          return { ...state };
        }
      }
    },
  },
});

export const { pushNewSV } = QuanlySinhvienReducer.actions;
//console.log(QuanlySinhvienReducer.actions.pushNewSV);

export default QuanlySinhvienReducer.reducer;
