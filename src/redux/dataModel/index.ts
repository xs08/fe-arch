import { iGlobalState } from './state/global.state';
import { iGlobalData } from './data/global.data';
import { iModuleModels } from './modules';

// RootDataModel
export interface iRootDataModel extends iModuleModels {
  globalState: iGlobalState;
  globalData: iGlobalData;
}
