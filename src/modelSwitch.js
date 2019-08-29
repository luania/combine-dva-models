const modelSwitch = (name, initValue = false) => ({
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

const dispatchesSwitch = (namespace, name) => ({
  [`${name}On`]: () => ({
    type: `${namespace}/${name}On`
  }),
  [`${name}Off`]: () => ({
    type: `${namespace}/${name}Off`
  })
});

export { modelSwitch, dispatchesSwitch };
