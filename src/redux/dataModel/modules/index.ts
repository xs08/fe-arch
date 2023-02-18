import { iIndexPageModel } from './indexPage';
import { iSomeModuleModel } from './someModule';

export interface iModuleModels {
  readonly indexPage: iIndexPageModel;
  readonly someModule: iSomeModuleModel;
}
