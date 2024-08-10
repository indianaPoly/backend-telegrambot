/** @format */

import { bot } from "../config/index.js";

export const help = () => {
  bot.onText(/\/도움말/, (msg) => {
    const chatID = msg.chat.id;

    bot.sendMessage(
      chatID,
      "[사용 가능한 명령어]\n\n" +
        "/채용 - 관련직무에 대한 사이트 모아보기\n\n" +
        "/리뷰 - 기업정보를 확인할 수 있는 사이트 모아보기\n\n" +
        "/자소서 - 자소서 작성에 도움이 되는 사이트 모아보기\n\n"
    );
  });
};
