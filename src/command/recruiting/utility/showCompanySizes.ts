import { UserState } from '../../../types/index';
import { bot } from '../../../config/index';

export const showCompanySizes = (
  userStates: { [chatID: number]: UserState },
  chatID: number
) => {
  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: '대기업', callback_data: 'size_대기업' }],
        [{ text: '중견기업', callback_data: 'size_중견기업' }],
        [{ text: '공기업', callback_data: 'size_공기업' }],
      ],
    },
  };

  const message = `현재까지 선택한 내용:\n\n직군: ${userStates[chatID].category}\n직업: ${userStates[chatID].job}\n`;
  bot.sendMessage(chatID, message);

  setTimeout(() => {
    bot.sendMessage(chatID, '어떤 규모의 기업에 관심이 있으신가요?', options);
  }, 1000);
};
