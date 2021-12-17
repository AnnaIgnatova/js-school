import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class StoreContextProvider extends Component {
  state = {
    allChecked: false,
    sizes: { small: false, medium: false, big: false },
    colors: {
      white: false,
      yellow: false,
      red: false,
      blue: false,
      green: false,
    },
    forms: {
      ball: false,
      bell: false,
      pine: false,
      snowflake: false,
      figure: false,
    },
  };

  toggleAllChecked = () => {
    this.setState((prevState) => {
      return {
        allChecked: !prevState.allChecked,
      };
    });
  };

  chooseSize = (value) => {
    this.setState((prevState) => {
      let sizes = Object.assign({}, prevState.sizes);
      sizes[value] = !sizes[value];
      return { sizes };
    });
  };

  chooseColor = (value) => {
    this.setState((prevState) => {
      let colors = Object.assign({}, prevState.colors);
      colors[value] = !colors[value];
      return { colors };
    });
  };

  chooseForm = (value) => {
    this.setState((prevState) => {
      let forms = Object.assign({}, prevState.forms);
      forms[value] = !forms[value];
      return { forms };
    });
  };

  render() {
    return (
      <Provider
        value={{
          allChecked: this.state.allChecked,
          sizes: this.state.sizes,
          colors: this.state.colors,
          forms: this.state.forms,
          toggleAllChecked: this.toggleAllChecked,
          chooseSize: this.chooseSize,
          chooseColor: this.chooseColor,
          chooseForm: this.chooseForm,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreContextProvider, Consumer as StoreContextConsumer };
