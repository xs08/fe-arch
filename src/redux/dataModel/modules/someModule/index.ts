import { iSomeModuleData } from './someModule.data';
import { iSomeModuleState } from './someModule.state';

export interface iSomeModuleModel {
  readonly state: iSomeModuleState;
  readonly data: iSomeModuleData;
}
