// import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const qouteAction = createAsyncThunk(
//   "qoute/home",
//   async ( { rejectWithValue, getState, dispatch }) => {
   
//     // const config = {
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // };
//     try {
//      const {data} = await axios.get("https://zenquotes.io/api/random");
//      console.log(data)
//       return data;
     
//     } catch (error) {
//       if (!error?.response) {
//         throw error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );


// export const qouteSlice = createSlice({
// name: "Qoute",
// initialState:      {qoutes: [],loading:"idle",error:""},
// reducers: { },
// extraReducers (builder) {
   
//     builder.addCase(qouteAction.pending, (state, action) => {
//             state.qoutes = [];
//             state.loading = "loading";
//     });
   
//     builder.addCase(qouteAction.fulfilled, (state, {payload}) => {
//         state.qoutes = payload;
//         state.loading = "loaded";
//     });
   
//     builder.addCase(qouteAction.rejected, (state, action) => {
//         state.loading = "error";
//         state.error = action.error.message;
//     });       
//     }
// })

// export const selectQoutes = createSelector(
//     (state) => ({
//        qoutes: state.qoutes,
//        loading: state.loading,
//     }), (state) =>  state
//   );

// export default qouteSlice.reducer

import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const qouteAction = createAsyncThunk(
  "qoute/home",
  async (_, { rejectWithValue }) => {
    try {
            const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
      const { data } = await axios.get("https://api.quotable.io/quotes/random",config);

      return data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const qouteSlice = createSlice({
  name: "Qoute",
  initialState: { qoutes: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(qouteAction.pending, (state) => {
        state.qoutes = [];
        state.loading = false;
      })
      .addCase(qouteAction.fulfilled, (state, { payload }) => {
        state.qoutes = payload;
        state.loading = true;
      })
      .addCase(qouteAction.rejected, (state, { error }) => {
        state.loading = "error";
        state.error = error.message;
      });
  },
});


export default qouteSlice.reducer;