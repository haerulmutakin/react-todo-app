import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
            done: ''
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const date = new Date();
      const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
            done: time
          }
        }
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds.filter(todo => todo !== id)],
      }
    }
    default:
      return state;
  }
}
