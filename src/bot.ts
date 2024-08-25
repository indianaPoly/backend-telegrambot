/** @format */
import { help, insight, recruiting, resume, start } from './command/index';

const main = () => {
  console.log('서버가 실행되었습니다.');
  start();
  help();
  recruiting();
  insight();
  resume();
};

main();
