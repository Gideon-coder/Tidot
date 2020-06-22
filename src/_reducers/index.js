import { combineReducers } from 'redux';

import { authentication } from './authentication.reducers';
import { registration } from './registration.reducer';
import { verification } from './verification.reducer';
import { alert } from './alert.reducer';
import {dashboard} from './dashboard.reducer';
import {dashboardInvestment} from './investmentdashboard.reducer';
import {quickSaverPost} from './quickSaver.reducer';
import {quickSaverPostVerification} from './quickSaverVerification.reducer';
import {wallet} from './walllet.reducer';
import {saver} from './saver.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert,
  verification,
  dashboard,
  dashboardInvestment,
  quickSaverPost,
  quickSaverPostVerification,
  wallet,
  saver
});

export default rootReducer;