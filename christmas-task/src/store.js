let initialState = {
  allChecked: false,
};

const settingsPageReducer = (action, state = initialState) => {
  switch (action) {
    case "choose-all": {
      state.allChecked = !state.allChecked;
      return state;
    }
    default:
      return state;
  }
};

let store = {
  _state: {
    allSettings: false,
  },
  _callSubscriber() {
    console.log("It kamasutra");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    // this._state.navBlock = sidebarReducer(this._state.navBlock, action);
    this._state.settingsPage = settingsPageReducer(
      action,
      this._state.settingsPage
    );
    // this._state.dialogsPage = dialogsPageReducer(
    //   this._state.dialogsPage,
    //   action
    // );

    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
