import * as actions from "./types";

export const getPosts = () => async (dispatch) => {
  // const res = await axios.get("api/post");
  dispatch({
    type: actions.GET_POSTS,
    // payload: res.data
    payload: ["1st", "2nd", "3rd", "4th", "5th"],
  });
};
