import { bot } from '../../../../config/index';
import { getArticlesLinksByCategory } from '../keyboards/articleKeyboard';
import { changeName } from '../../../../util/index';

export const handleCallbackQuery = (callbackQuery: any) => {
  const chatId = callbackQuery.message.chat.id;
  const category = callbackQuery.data;
  const links = getArticlesLinksByCategory(category);

  const value = links.map((item) => {
    return [{ text: item.text, url: item.url }];
  });

  const options = {
    reply_markup: {
      inline_keyboard: value,
    },
  };

  if (category.startsWith('article_')) {
    bot.sendMessage(
      chatId,
      `${changeName(category)}에 대한 좋은 글을 알려드릴게요!`,
      options
    );
  }
};
