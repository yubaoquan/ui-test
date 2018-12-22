import './style';
import { requireDemos } from '../util';
const demoCount = 9;

const demos = {
  shiye: requireDemos('./input/shiye', demoCount),
  zent: requireDemos('./input/zent', demoCount),
};

export default demos;
