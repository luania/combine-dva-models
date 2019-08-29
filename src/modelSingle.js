const modelSingle = (name, initValue) => ({
  state: {
    [name]: initValue
  },
  reducers: {
    [`${name}Change`]: (state, action) => ({
      ...state,
      [name]: action[name]
    }),
    [`${name}Reset`]: state => ({
      ...state,
      [name]: initValue
    })
  }
});

const dispatchesSingle = (namespace, name) => ({
  [`${name}Change`]: value => ({
    type: `${namespace}/${name}Change`,
    [name]: value
  }),
  [`${name}Reset`]: () => ({
    type: `${namespace}/${name}Reset`
  })
});

export default modelSingle;
