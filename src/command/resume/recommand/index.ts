import { bot } from '../../../config/index';

export const getRecommandKeyboard = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '맞춤법 검사', url: 'http://speller.cs.pusan.ac.kr/' }],
        [{ text: '자소설 닷컴', url: 'https://jasoseol.com/' }],
        [
          {
            text: '잡코리아 합격자소서',
            url: 'https://www.jobkorea.co.kr/starter/passassay',
          },
        ],
        [
          {
            text: '대학별 취업지원센터',
            url: '해당 대학교 취업지원센터를 활용해보세요.',
          },
        ],
      ],
    },
  };
};

export const handleRecommand = (msg: any) => {
  const responseText = '첨삭 관련 사이트 목록입니다:';
  bot.sendMessage(msg.chat.id, responseText, getRecommandKeyboard());
};
