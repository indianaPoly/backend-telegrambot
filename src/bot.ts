/** @format */
import { help, insight, resume, start, sendAutoMessage } from './command/index';

const main = async () => {
  console.log('서버가 실행되었습니다.');

  await sendAutoMessage();

  start();
  help();
  insight();
  resume();
};

main();
