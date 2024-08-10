import { bot } from '../../../config/index';

export const getArticlesKeyboard = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Article 1', url: 'https://www.examplearticle.com' }],
        [{ text: 'Article 2', url: 'https://www.anotherarticle.com' }],
      ],
    },
  };
};

export const handleArticles = (msg: any) => {
  const responseText = '자기소개서 관련 아티클 목록입니다:';
  bot.sendMessage(msg.chat.id, responseText, getArticlesKeyboard());
};
