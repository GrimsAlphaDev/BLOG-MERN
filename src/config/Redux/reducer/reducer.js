import { combineReducers } from "redux";
import globalReducer  from "./globalReducer";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";
import createBlogReducer from "./createBlogReducer";

const reducer = combineReducers({homeReducer, globalReducer, detailReducer, createBlogReducer});

export default reducer;