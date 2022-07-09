const ToggleMenuReducer = (state, action) => {
  switch (action.type) {
    case "CLOSEMENU":
      return {
        toggleMenu: false,
      };
    case "OPENMENU":
      return {
        toggleMenu: true,
      };

    default:
      return state;
  }
};

export default ToggleMenuReducer;
