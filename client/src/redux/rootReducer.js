import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/userReducer";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["webVersionReducer"]
}

const rootReducer = combineReducers({
    userReducer
})

export default persistReducer(persistConfig, rootReducer);