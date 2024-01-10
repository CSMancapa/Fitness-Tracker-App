// Actions/Dashboard.js
import { UPDATE_DASHBOARD_DATA } from './types';

export const updateDashboardData = (data) => ({
  type: UPDATE_DASHBOARD_DATA,
  payload: data,
});
