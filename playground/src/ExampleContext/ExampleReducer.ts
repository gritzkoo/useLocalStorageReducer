import {
  ExampleAction,
  ExampleContextInterface,
  ExampleTypesEnum,
} from "./ExampleInterface";
import { updateStateAction } from "./actions/updateStateAction";

function updateStateReducer(
  state: ExampleContextInterface,
  action: ExampleAction
): ExampleContextInterface {
  switch (action.type) {
    case ExampleTypesEnum.UPDATE_STATE:
      return updateStateAction(state, action);

    default:
      return state;
  }
}

export default updateStateReducer;