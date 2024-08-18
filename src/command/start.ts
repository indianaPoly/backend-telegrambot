/** @format */
import { bot } from '../config/index.js';

export const start = () => {
  bot.onText(/\/start/, (msg) => {
    const chatID = msg.chat.id;
    const message = `
      각종 명령어를 확인하고 싶으시면 \n👉 /help 를 눌러보세요!
    `;
    bot.sendMessage(chatID, '안녕하세요. 취업 정보 제공 봇입니다.');
    bot.sendMessage(chatID, message);
  });
};
