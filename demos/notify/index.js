import './style';
import { requireDemos } from '../util';
const demoCount = 1;

export default {
  shiye: requireDemos('./notify/shiye', demoCount),
  zent: requireDemos('./notify/zent', demoCount),
};
