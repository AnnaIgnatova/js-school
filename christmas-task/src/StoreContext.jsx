import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class StoreContextProvider extends Component {
  state = {
    sortingRule: {
      byNameAcs: true,
      byNameDesc: false,
      byYearAcs: false,
      byYearDesc: false,
    },
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
    savedToys: [],
  };

  toggleAllChecked = () => {
    this.setState((prevState) => {
      return {
        allChecked: !prevState.allChecked,
      };
    });
  };

  chooseSortingRule = (value) => {
    this.setState((prevState) => {
      let sortingRule = Object.assign({}, prevState.sortingRule);
      for (let key in sortingRule) {
        sortingRule[key] = false;
      }
      sortingRule[value] = true;
      return { sortingRule };
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

  addToSaved = (id) => {
    this.setState((prevState) => {
      let savedToys = [...prevState.savedToys];
      savedToys.push(id);
      return { savedToys };
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
          sortingRule: this.state.sortingRule,
          savedToys: this.state.savedToys,
          toggleAllChecked: this.toggleAllChecked,
          chooseSize: this.chooseSize,
          chooseColor: this.chooseColor,
          chooseForm: this.chooseForm,
          chooseSortingRule: this.chooseSortingRule,
          addToSaved: this.addToSaved,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreContextProvider, Consumer as StoreContextConsumer };
