import { bot } from '../../../../config/index';
import { getLinksByCategory } from '../keyboards/linksKeyboard';

export const handleCallbackQuery = (callbackQuery: any) => {
  const chatId = callbackQuery.message.chat.id;
  const category = callbackQuery.data;
  const links = getLinksByCategory(category);

  if (links.length > 0) {
    links.forEach(link => {
      bot.sendMessage(chatId, link.text, {
        reply_markup: {
          inline_keyboard: [[{ text: link.text, url: link.url }]]
        }
      });
    });
  }
};
