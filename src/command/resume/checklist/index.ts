import { bot } from '../../../config/index';
import { Message } from '../../../types/index';

import {
  areAllItemsChecked,
  getChecklistKeyboard,
  resetCheckListItems,
  toggleChecklistItem,
} from './util';

export const handleChecklist = (msg: Message) => {
  bot.sendMessage(msg.chat.id, '최종 점검 리스트', getChecklistKeyboard());
};

export const handleChecklistToggle = (msg: Message, itemId: number) => {
  toggleChecklistItem(itemId);

  bot.editMessageText('최종 점검 리스트', {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
    ...getChecklistKeyboard(),
  });

  if (areAllItemsChecked()) {
    setTimeout(() => {
      bot.sendMessage(msg.chat.id, '자소서를 제출해도 좋습니다!');
      resetCheckListItems();
    }, 1000);
  }
};
