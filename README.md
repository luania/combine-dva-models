# combine-dva-models
combine dva models

## Usage：

### combineModels

we hava some models like this:

```javascript
const modelLoading = {
  state: {
    loading: false
  },
  reducers: {
    loadingChange: (state, { loading }) => ({
      ...state,
      loading
    })
  }
};
const modelSubmitting = {
  state: {
    submitting: false
  },
  reducers: {
    submittingChange: (state, { submitting }) => ({
      ...state,
      submitting
    })
  }
};
```

combine then:

```javascript
import { combineModels } from 'combine-dva-models';

const totalModel = combineModels(
  modelLoading,
  modelSubmitting,
  { namespace: "foo" } // 指定一下namespace
);
```

now you get a combined model:

```javascript
{
  namespace: "foo",
  state: {
    loading: false,
    submitting: false
  },
  reducers: {
    loadingChange: (state, { loading }) => ({
      ...state,
      loading
    }),
    submittingChange: (state, { submitting }) => ({
      ...state,
      submitting
    })
  }
};
```

### createSingleStateModel(name, initValue)

```javascript
import { createSingleStateModel } from 'combine-dva-models';
const countModel = createSingleStateModel('count', 0);

// is equivalent to

const countModel = {
  state: {
    count: 0
  },
  reducers: {
    countChange: (state, action) => ({
      ...state,
      count: action.count
    })
  }
};
```

### createSwitchModel(name, initValue = false)

```javascript
import { createSwitchModel } from 'combine-dva-models';
const loadingModel = createSwitchModel('loading');

// is equivalent to

const countModel = {
  state: {
    loading: 0
  },
  reducers: {
    loadingOn: (state, action) => ({
      ...state,
      loading: true
    }),
    loadingOff: (state, action) => ({
      ...state,
      loading: false
    })
  }
};
```
