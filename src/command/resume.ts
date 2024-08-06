/** @format */

import { bot } from '../config/index.js';

export const resume = () => {
    bot.onText(/\/자소서/, (msg) => {
        const chatID = msg.chat.id;

        bot.sendMessage(chatID, '자소서와 관련된 도움을 드릴게요!');
    });
};
