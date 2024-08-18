import { bot } from '../../config/index';
import { handleChecklist, handleChecklistToggle } from './checklist/index';
import { handleRecommand } from './recommand/index';
import { handleArticles } from './article/index';

export const resume = () => {
  bot.onText(/\/resume/, (msg) => {
    const chatID = msg.chat.id;
    const options = {
      reply_markup: {
        inline_keyboard: [
          [{ text: '제출 전 최종점검', callback_data: 'checklist' }],
          [{ text: '자소서 추천 사이트', callback_data: 'recommand' }],
          [{ text: '자기소개서 아티클', callback_data: 'articles' }],
        ],
      },
    };
    bot.sendMessage(chatID, '자소서와 관련된 도움을 드릴게요!', options);
  });

  bot.on('callback_query', (callbackQuery) => {
    const msg = callbackQuery.message;
    const data = callbackQuery.data;
    const id = callbackQuery.id;

    if (msg && data && id) {
      if (data === 'checklist') {
        handleChecklist(msg);
      }

      if (data === 'recommand') {
        handleRecommand(msg);
      }

      if (data === 'articles') {
        handleArticles(msg);
      }

      if (data.startsWith('toggle_')) {
        const itemId = parseInt(data.split('_')[1], 10);
        handleChecklistToggle(msg, itemId);
      }
    }
  });
};
