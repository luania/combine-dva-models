const createSingleStateModel = (name, initValue) => ({
  state: {
    [name]: initValue
  },
  reducers: {
    [`${name}Change`]: (state, action) => ({
      ...state,
      [name]: action[name]
    })
  }
});
export default createSingleStateModel;
