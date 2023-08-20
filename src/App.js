import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./redux/reducer/userReducer";
import Form from "./components/Form";

const store = createStore(userReducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <Form />
      </Provider>
    </>
  );
}

export default App;
