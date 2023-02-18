import { iIndexPageData } from './indexPage.data';
import { iIndexPageState } from './indexPage.state';

// indexPage
export interface iIndexPageModel {
  readonly state: iIndexPageState;
  readonly data: iIndexPageData;
}
