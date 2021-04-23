import * as actions from "../actions/types";

const initialState = {
  posts: [],
  post: {},
  loading: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}
