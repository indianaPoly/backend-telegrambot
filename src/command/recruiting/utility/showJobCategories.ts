import { JOB } from '../config/job';
import { bot } from '../../../config/index';

export const showJobCategories = (chatID: number) => {
  const jobCategory = JOB.map((item) => item.JobCategory);
  const keyboard = jobCategory.map((category) => [
    { text: category, callback_data: `category_${category}` },
  ]);

  const options = {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  };
  bot.sendMessage(chatID, '어떤 직군에 관심이 있으신가요?', options);
};
