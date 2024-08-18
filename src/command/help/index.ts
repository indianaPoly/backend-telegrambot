/** @format */

import { bot } from '../../config/index';

export const help = () => {
  bot.onText(/\/help/, (msg) => {
    const chatID = msg.chat.id;

    const helpMessage = `‼️ 사용 가능한 명령어\n\n📢 /recruiting - 관련 직무에 대한 사이트를 모아볼 수 있습니다.\n\n📝 /review - 기업 리뷰를 확인할 수 있습니다.\n\n✍️ /resume - 자소서 작성에 도움을 받을 수 있습니다.\n\n👉 사용하고 싶은 명령어를 눌러보세요!`;

    bot.sendMessage(chatID, helpMessage);
  });
};
