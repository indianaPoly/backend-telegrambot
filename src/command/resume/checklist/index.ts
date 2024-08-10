import { bot } from '../../../config/index';
import { getChecklistKeyboard, toggleChecklistItem } from './util';

export const handleChecklist = (msg: any) => {
  bot.sendMessage(msg.chat.id, '최종 점검 리스트', getChecklistKeyboard());
};

export const handleChecklistToggle = (msg: any, itemId: number) => {
  toggleChecklistItem(itemId);
  bot.editMessageText('최종 점검 리스트', {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    ...getChecklistKeyboard(),
  });
};
