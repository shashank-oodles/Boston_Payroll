import { combineReducers } from "@reduxjs/toolkit";
import { superAdminUiSlice } from "../../features/super_admin/redux/index"

export const rootReducer = combineReducers({
    superAdminUi: superAdminUiSlice,
});
