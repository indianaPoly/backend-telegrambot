/** @format */
import { sendAutoMessage } from './command/autoMessage';
import { help, insight, recruiting, resume, start } from './command/index';

const main = async () => {
  console.log('서버가 실행되었습니다.');

  await sendAutoMessage();

  start();
  help();
  recruiting();
  insight();
  resume();
};

main();
