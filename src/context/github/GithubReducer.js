const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default githubReducer;
