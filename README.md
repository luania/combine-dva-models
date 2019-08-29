# combine-dva-models

combine dva models

## Usage：

### combineModels

```javascript
import { combineModels } from "combine-dva-models";

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

const fooModel = combineModels(
  modelLoading,
  modelSubmitting,
  { namespace: "foo" } // 指定一下namespace
);
```

is equivalent to

```javascript
const fooModel {
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

### modelSingle(name, initValue)

```javascript
import { modelSingle } from "combine-dva-models";
const countModel = modelSingle("count", 0);
```

is equivalent to

```javascript
const initCount = 0;
const countModel = {
  state: {
    count: initCount
  },
  reducers: {
    countChange: (state, action) => ({
      ...state,
      count: action.count
    }),
    countReset: state => ({
      ...state,
      count: initCount
    })
  }
};
```

### dispatchesSingle(namespace, name)

```javascript
import { dispatchesSingle } from "combine-dva-models";
const dispaches = dispatchesSingle("foo", "count");
```

is equivalent to

```javascript
const dispaches = {
  countChange: value => ({
    type: "foo/countChange",
    count: value
  }),
  countReset: value => ({
    type: "foo/countReset"
  })
};
```

### modelSwitch(name, initValue = false)

```javascript
import { modelSwitch } from "combine-dva-models";
const loadingModel = modelSwitch("loading");
```

is equivalent to

```javascript
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

### dispatchesSwitch(namespace, name)

```javascript
import { dispatchesSwitch } from "combine-dva-models";
const dispaches = dispatchesSwitch("foo", "loading");
```

is equivalent to

```javascript
const dispaches = {
  loadingOn: () => ({
    type: "foo/loadingOn"
  }),
  loadingOff: () => ({
    type: "foo/loadingOff"
  })
};
```
