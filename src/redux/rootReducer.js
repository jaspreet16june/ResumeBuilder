import { combineReducers } from "redux";
import templateReducer from "./reducer/templateReducer";
import userReducer from "./reducer/userReducer";

let rootReducer = combineReducers(
    {
        template:templateReducer,
        user: userReducer,
    }
)
export default rootReducer;