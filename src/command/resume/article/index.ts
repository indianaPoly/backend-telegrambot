import { bot } from '../../../config/index';
import { Message } from '../../../types/index';
import { getArticleCategoryKeyboard } from './keyboards/articleCategoryKeyboard';
import { handleCallbackQuery } from './handler/callbackHandler';

export const handleArticles = (msg: any) => {
  const responseText = '자기소개서 관련 아티클 목록입니다.';
  bot.sendMessage(msg.chat.id, responseText, getArticleCategoryKeyboard);
};

bot.on('callback_query', (callbackQuery) => {
  handleCallbackQuery(callbackQuery);
});
