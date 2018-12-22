import './style';
import { requireDemos } from '../util';
const demoCount = 8;

export default {
  shiye: requireDemos('./pop/shiye', demoCount),
  zent: requireDemos('./pop/zent', demoCount),
};
