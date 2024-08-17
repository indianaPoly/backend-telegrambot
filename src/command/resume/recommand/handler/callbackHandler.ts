import { bot } from '../../../../config/index';
import { getLinksByCategory } from '../keyboards/linksKeyboard';
import { changeName } from '../../../../util/index';

export const handleCallbackQuery = (callbackQuery: any) => {
  const chatId = callbackQuery.message.chat.id;
  const category = callbackQuery.data;
  const links = getLinksByCategory(category);

  const value = links.map((item) => {
    return [{ text: item.text, url: item.url }];
  });

  const options = {
    reply_markup: {
      inline_keyboard: value,
    },
  };

  if (category.startsWith('recommand_')) {
    bot.sendMessage(
      chatId,
      `${changeName(category)}에 맞는 사이트를 추천해드릴게요!`,
      options
    );
  }
};
