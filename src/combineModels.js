export default (...models) =>
  models.reduce(
    (sum, item) => ({
      ...sum,
      ...item,
      state: {
        ...sum.state,
        ...item.state
      },
      reducers: {
        ...sum.reducers,
        ...item.reducers
      },
      effects: {
        ...sum.effects,
        ...item.effects
      },
      subscriptions: {
        ...sum.subscriptions,
        ...item.subscriptions
      }
    }),
    {}
  );
