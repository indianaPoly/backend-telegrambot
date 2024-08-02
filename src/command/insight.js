/** @format */

import { bot } from '../config/index.js';

export const insight = () => {
    bot.onText(/\/기업정보/, (msg) => {
        const chatID = msg.chat.id;
        const options = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{ text: '잡플래닛 기업랭킹', url: 'https://www.jobplanet.co.kr/companies/cover' }],
                    [{ text: '블라인드 기업리뷰', url: 'https://www.teamblind.com/kr/company' }],
                ],
            }),
        };
        bot.sendMessage(chatID, '회사 정보를 알 수 있는 사이트를 알려드릴게요!', options);
    });
};
