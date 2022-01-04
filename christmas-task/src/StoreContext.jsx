import React, { Component } from "react";
import data from "./data";
const { Provider, Consumer } = React.createContext();

const defaultCount = data.map((toy) => +toy.count);

let state = {
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
  years: [1940, 2020],
  count: [1, 12],
  searchText: "",
  tree: "1",
  bg: "bg-1",
  bgSizes: [0, 0, 0],
  snowing: false,
  gareland: "",
  switchGareland: false,
  toysOnTree: [],
  toysCount: defaultCount,
};

class StoreContextProvider extends Component {
  constructor() {
    super();
    this.state = state;
  }

  changeRoute = () => {
    this.setState((prevState) => {
      let toysCount = [...prevState.toysCount];
      toysCount = [...defaultCount];
      return {
        toysCount,
      };
    });
  };

  changeToysCount = (id, onTree = false) => {
    this.setState((prevState) => {
      let toysCount = [...prevState.toysCount];
      if (!onTree && toysCount[id] < data[id].count) toysCount[id] += 1;
      else if (onTree) {
        toysCount[id] -= 1;
      }
      return {
        toysCount,
      };
    });
  };

  addToyOnTree = (id) => {
    this.setState((prevState) => {
      let toysOnTree = [...prevState.toysOnTree];
      toysOnTree = [...toysOnTree, id];
      return {
        toysOnTree,
      };
    });
  };

  chooseSnowing = () => {
    this.setState((prevState) => {
      return {
        snowing: !prevState.snowing,
      };
    });
  };

  chooseTree = (treeClass) => {
    this.setState((prevState) => {
      return {
        tree: treeClass,
      };
    });
  };

  chooseGareland = (garelandClass) => {
    this.setState((prevState) => {
      return {
        gareland: garelandClass,
      };
    });
  };

  setGareland = (bool) => {
    this.setState((prevState) => {
      return {
        switchGareland: bool,
      };
    });
  };

  chooseBG = (bgClass) => {
    this.setState((prevState) => {
      return {
        bg: bgClass,
      };
    });
  };

  setBGsize = (rigth, left, height) => {
    this.setState((prevState) => {
      let sizes = [...prevState.bgSizes];
      sizes = [+rigth, +left, +height];
      return {
        sizes,
      };
    });
  };

  searchToy = (value) => {
    this.setState((prevState) => {
      return {
        searchText: value,
      };
    });
  };

  resetFilters = () => {
    this.setState((prevState) => {
      let years = [...prevState.years];
      let count = [...prevState.count];
      let sizes = Object.assign({}, prevState.sizes);
      let colors = Object.assign({}, prevState.colors);
      let forms = Object.assign({}, prevState.forms);
      for (let key in sizes) {
        sizes[key] = false;
      }
      for (let key in colors) {
        colors[key] = false;
      }
      for (let key in forms) {
        forms[key] = false;
      }
      count = [1, 12];
      years[0] = 1940;
      years[1] = 2020;
      return {
        years,
        count,
        favorite: false,
        sizes,
        colors,
        forms,
      };
    });
  };

  getColors = () => {
    return this.state.colors;
  };

  chooseYear = (min, max) => {
    this.setState((prevState) => {
      let years = [...prevState.years];
      years[0] = min;
      years[1] = max;
      return { years };
    });
  };

  chooseCount = (min, max) => {
    this.setState((prevState) => {
      let count = [...prevState.count];
      count[0] = min;
      count[1] = max;
      return { count };
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
          years: this.state.years,
          count: this.state.count,
          searchText: this.state.searchText,
          tree: this.state.tree,
          bg: this.state.bg,
          bgSizes: this.state.bgSizes,
          snowing: this.state.snowing,
          gareland: this.state.gareland,
          switchGareland: this.state.switchGareland,
          toysOnTree: this.state.toysOnTree,
          toysCount: this.state.toysCount,
          chooseSize: this.chooseSize,
          chooseColor: this.chooseColor,
          chooseForm: this.chooseForm,
          chooseSortingRule: this.chooseSortingRule,
          addToSaved: this.addToSaved,
          removeFromSaved: this.removeFromSaved,
          toggleSlotsModal: this.toggleSlotsModal,
          toggleFavorite: this.toggleFavorite,
          getColors: this.getColors,
          chooseYear: this.chooseYear,
          chooseCount: this.chooseCount,
          resetFilters: this.resetFilters,
          searchToy: this.searchToy,
          chooseTree: this.chooseTree,
          chooseBG: this.chooseBG,
          setBGsize: this.setBGsize,
          chooseSnowing: this.chooseSnowing,
          chooseGareland: this.chooseGareland,
          setGareland: this.setGareland,
          addToyOnTree: this.addToyOnTree,
          changeToysCount: this.changeToysCount,
          changeRoute: this.changeRoute,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreContextProvider, Consumer as StoreContextConsumer };
