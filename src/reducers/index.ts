import ACTIONS, {Action} from "../actions";


const initialState = {
};

export default function appReducer(state = initialState, action: Action) {
    console.log(`ACTION: [${action.type}]`);
    switch (action.type) {
        default:
            return state;
    }
}