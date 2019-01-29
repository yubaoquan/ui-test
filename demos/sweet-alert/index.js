import './style';
import { requireDemos } from '../util';
const demoCount = 2;

export default {
  shiye: requireDemos('./sweet-alert/shiye', demoCount),
  zent: requireDemos('./sweet-alert/zent', demoCount),
};
