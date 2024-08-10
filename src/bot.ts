/** @format */
import { help, insight, start } from "./command/index";

const main = () => {
  console.log("서버가 실행되었습니다.");
  start();
  help();
  insight();
};

main();
