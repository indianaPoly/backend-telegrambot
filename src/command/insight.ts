/** @format */

import { bot } from '../config/telegram';

export const insight = () => {
  bot.onText(/\/리뷰/, (msg) => {
    const chatID = msg.chat.id;
    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '잡플래닛 기업랭킹',
              url: 'https://www.jobplanet.co.kr/companies/cover',
            },
          ],
          [
            {
              text: '블라인드 기업리뷰',
              url: 'https://www.teamblind.com/kr/company',
            },
          ],
          [
            {
              text: '사람인 기업리뷰',
              url: 'https://www.saramin.co.kr/zf_user/company-review',
            },
          ],
          [
            {
              text: '잡코리아 기업리뷰',
              url: 'https://www.jobkorea.co.kr/Review/Home',
            },
          ],
          [
            {
              text: '캐치 기업리뷰',
              url: 'https://www.catch.co.kr/Comp/CompMajor',
            },
          ],
          [{ text: '윈티드 기업리뷰', url: 'https://insight.wanted.co.kr/' }],
        ],
      },
    };
    bot.sendMessage(
      chatID,
      '회사 정보를 알 수 있는 사이트를 알려드릴게요!',
      options
    );

    setTimeout(() => {
      bot.sendMessage(
        chatID,
        '다른 정보를 보고 싶으시면 /도움말 을 눌러주세요.'
      );
    }, 1000);
  });
};
