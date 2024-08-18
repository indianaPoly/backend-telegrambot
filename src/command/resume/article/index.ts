import { bot } from '../../../config/index';
import { getArticleCategoryKeyboard } from './keyboards/articleCategoryKeyboard';
import { handleCallbackQuery } from './handler/callbackHandler';

export const handleArticles = (msg: any) => {
  const responseText = '자기소개서와 관련된 글을 읽어보세요!';
  bot.sendMessage(msg.chat.id, responseText, getArticleCategoryKeyboard);
};

bot.on('callback_query', (callbackQuery) => {
  handleCallbackQuery(callbackQuery);
});
