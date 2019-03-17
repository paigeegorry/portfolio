import { FETCH_PROJECTS } from '../actions/projects';

const initialState = {
  projects: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: payload
      };
    default:
      return state;
  }
}
