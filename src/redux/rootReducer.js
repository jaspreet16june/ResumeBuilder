import { combineReducers } from "redux";
import templateReducer from "./reducer/templateReducer";
import userReducer from "./reducer/userReducer";
import personalReducer from "./reducer/personalReducer";
let rootReducer = combineReducers(
    {
        template:templateReducer,
        user: userReducer,
        details:personalReducer,
    }
)
export default rootReducer;