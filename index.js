import createSingleStateModel from './src/createSingleStateModel';
import createSwitchModel from './src/createSwitchModel';

const combineModels = (...models) =>
  models.reduce((sum, item) => ({
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
  }), {} );

export {
    createSingleStateModel,
    createSwitchModel,
    combineModels,
};
