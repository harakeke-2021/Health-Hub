const initialGoalState = {
  goal: {
    cWeight: 5,
    gWeight: 0,
    mCalories: 0,
    cCalories: 0
  }
}

const CalorieReducer = (state = initialGoalState, action) => {
  switch (action.type) {
    case 'NEW_GOAL':
      return {
        goal: { ...action.goal }

      }
    default:
      return state
  }
}



export default CalorieReducer
