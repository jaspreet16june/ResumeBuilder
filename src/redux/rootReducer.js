import { combineReducers } from "redux";
import templateReducer from "./reducer/templateReducer";
import userReducer from "./reducer/userReducer";
import personalReducer from "./reducer/personalReducer";
import saveReducer from "./reducer/saveReducer";

let rootReducer = combineReducers(
    {
        template:templateReducer,
        user: userReducer,
        details:personalReducer,
        saveState:saveReducer,
    }
)
export default rootReducer;