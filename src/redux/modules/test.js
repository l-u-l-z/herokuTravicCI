export const TEST_ACTION = 'ft/test/TEST_ACTION';

const initialState = {
  testing: false
};

export default function test(state = initialState, action = {}) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        testing: true
      };
    default:
      return state;
  }
}

// thunk with dispatch
export const testAction = () => dispatch => dispatch({ type: TEST_ACTION });

// regular action
export const testActionWithoutDispatch = () => ({ type: TEST_ACTION });
