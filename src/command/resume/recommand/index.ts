import { bot } from '../../../config/index';
import { getCategoryKeyboard } from './keyboards/categoryKeyboard';
import { handleCallbackQuery } from './handler/callbackHandler';

export const handleRecommand = (msg: any) => {
  const responseText = '자소서와 관련된 정보를 제공해드려요! 카테고리를 선택해주세요.';
  bot.sendMessage(msg.chat.id, responseText, getCategoryKeyboard());
};

// 이 부분은 bot.on('callback_query') 핸들러에 추가해야 합니다.
bot.on('callback_query', (callbackQuery) => {
  handleCallbackQuery(callbackQuery);
});
