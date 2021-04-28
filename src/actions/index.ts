export class Action {
    type!: string;
    payload: any;
}
const ACTIONS = {
    SET_USER: "SET_USER",
    UPDATE_USER: "UPDATE_USER",
  };

export default ACTIONS;