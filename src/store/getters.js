export default {
  getAllRoutines (state) {
    return [...state.routines]
  },

  getRoutineById: state => id => state.routines.find(routine => routine.id === id),

  // The commented function is equivalent with "getRoutineById"
  // they are here so that everybody can understand the different syntax
  // function(state){
  //  return function(id){
  //     return state.routines.find(routine => routine.id === id)
  //   }
  // }

  getAvailableUiComponents (state) {
    return { ...state.available_ui_components }
  }
}
