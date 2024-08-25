/** @format */

import { bot } from '../../config/index';
import { UserState } from '../../types/index';
import {
  showCompanies,
  showCompanySizes,
  showJobCategories,
  showJobList,
} from './utility/index';

export const recruiting = () => {
  const userStates: { [chatID: number]: UserState } = {};

  bot.onText(/\/recruiting/, (msg) => {
    const chatID = msg.chat.id;
    showJobCategories(chatID);
  });

  bot.on('callback_query', async (callbackQuery) => {
    if (callbackQuery.message !== undefined) {
      const chatID = callbackQuery.message.chat.id;
      const data = callbackQuery.data;

      if (!userStates[chatID]) {
        userStates[chatID] = {};
      }

      if (data !== undefined) {
        if (data.startsWith('category_')) {
          userStates[chatID].category = data.split('_')[1];
          showJobList(userStates, chatID);
        } else if (data.startsWith('job_')) {
          userStates[chatID].job = data.split('_')[1];
          showCompanySizes(userStates, chatID);
        } else if (data.startsWith('size_')) {
          userStates[chatID].companySize = data.split('_')[1];
          showCompanies(userStates, chatID);
        } else if (data.startsWith('company_')) {
          userStates[chatID].company = data.split('_')[1];
        }
      }
    }
  });
};
