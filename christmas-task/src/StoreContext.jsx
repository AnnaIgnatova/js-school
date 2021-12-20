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
    favorite: false,
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
    slotsModal: false,
  };

  getColors = () => {
    return this.state.colors;
  };

  resetFilter = (value) => {
    this.setState((prevState) => {
      let filters = Object.assign({}, prevState.filters);
      for (let key in filters) {
        filters[key] = false;
      }
      return { filters };
    });
  };

  chooseFilter = (value) => {
    this.setState((prevState) => {
      let filters = Object.assign({}, prevState.filters);
      for (let key in filters) {
        filters[key] = false;
      }
      filters[value] = true;
      return { filters };
    });
  };

  toggleSlotsModal = () => {
    this.setState((prevState) => {
      return {
        slotsModal: !prevState.slotsModal,
      };
    });
  };

  toggleFavorite = () => {
    this.setState((prevState) => {
      return {
        favorite: !prevState.favorite,
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

    return this.state.colors;
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

  removeFromSaved = (id) => {
    this.setState((prevState) => {
      let savedToys = [...prevState.savedToys];
      savedToys.splice(savedToys.indexOf(id), 1);
      return { savedToys };
    });
  };

  render() {
    return (
      <Provider
        value={{
          sizes: this.state.sizes,
          colors: this.state.colors,
          forms: this.state.forms,
          sortingRule: this.state.sortingRule,
          savedToys: this.state.savedToys,
          slotsModal: this.state.slotsModal,
          favorite: this.state.favorite,
          chooseSize: this.chooseSize,
          chooseColor: this.chooseColor,
          chooseForm: this.chooseForm,
          chooseSortingRule: this.chooseSortingRule,
          addToSaved: this.addToSaved,
          removeFromSaved: this.removeFromSaved,
          toggleSlotsModal: this.toggleSlotsModal,
          toggleFavorite: this.toggleFavorite,
          resetFilters: this.resetFilters,
          getColors: this.getColors,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreContextProvider, Consumer as StoreContextConsumer };
