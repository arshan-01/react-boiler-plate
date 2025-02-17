let appDispatch;

export const setDispatch = (dispatch) => {
  appDispatch = dispatch;
};

export const getDispatch = () => appDispatch;
