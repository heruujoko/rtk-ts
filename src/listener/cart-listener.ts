import listenerMiddleware from "./middleware-setup";
import { CUSTOM_ACTION, increment } from "../features/counter/counterSlice";

const setupCartListener = () => {
  listenerMiddleware.startListening({
    actionCreator: CUSTOM_ACTION,
    effect: async (action, listenerApi) => {
      // Run whatever additional side-effect-y logic you want here
      const state = listenerApi.getState();
      console.log("Todo added: ", {state});
      listenerApi.dispatch(increment());

    },
  });
};

export default setupCartListener;
