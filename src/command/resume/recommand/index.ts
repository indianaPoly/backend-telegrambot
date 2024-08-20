import { bot } from '../../../config/index';
import { Message } from '../../../types/index';

import { getCategoryKeyboard } from './keyboards/categoryKeyboard';
import { handleCallbackQuery } from './handler/callbackHandler';

export const handleRecommand = (msg: Message) => {
  const responseText = '자소서와 관련된 정보를 제공해드려요! 카테고리를 선택해주세요.';
  bot.sendMessage(msg.chat.id, responseText, getCategoryKeyboard());
};

bot.on('callback_query', (callbackQuery) => {
  handleCallbackQuery(callbackQuery);
});
