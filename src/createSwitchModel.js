const createSwitchModel = (name, initValue = false) => ({
  state: {
    [name]: initValue
  },
  reducers: {
    [`${name}On`]: (state, action) => ({
      ...state,
      [name]: true
    }),
    [`${name}Off`]: (state, action) => ({
      ...state,
      [name]: false
    })
  }
});
export default createSwitchModel;
