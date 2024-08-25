import { UserState } from '../../../types';
import { bot } from '../../../config/index';
import { JOB } from '../config/job';

export const showJobList = (
  userStates: { [chatID: number]: UserState },
  chatID: number
) => {
  const category = userStates[chatID].category;
  const jobList = JOB.filter((item) => item.JobCategory === category).map(
    (item) => item.JobCategoryList
  )[0];

  const keyboard = jobList.map((job) => [
    { text: job, callback_data: `job_${job}` },
  ]);

  const options = {
    reply_markup: {
      inline_keyboard: keyboard,
    },
  };

  const message = `현재까지 선택한 내용:\n\n직군: ${userStates[chatID].category}\n`;
  bot.sendMessage(chatID, message);

  setTimeout(() => {
    bot.sendMessage(
      chatID,
      '구체적으로 어떤 직업에 관심이 있으신가요?',
      options
    );
  }, 1000);
};
