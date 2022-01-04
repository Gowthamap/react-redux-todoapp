import { combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
    todos,
    visibilityFilter
});