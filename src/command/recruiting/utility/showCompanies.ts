import { UserState } from '../../../types/index';
import { bot } from '../../../config/index';

export const showCompanies = (
  userStates: { [chatID: number]: UserState },
  chatID: number
) => {
  let keyboard;

  const large_companies = ['삼성', 'LG', 'SK', '현대'];
  const medium_companies = ['정보 추가 예정'];
  const public_companies = ['정보 추가 예정'];

  if (userStates[chatID].companySize === '대기업') {
    keyboard = large_companies.map((company) => [
      { text: company, callback_data: `company_${company}` },
    ]);
  } else if (userStates[chatID].companySize === '중견기업') {
    keyboard = medium_companies.map((company) => [
      { text: company, callback_data: `company_${company}` },
    ]);
  } else if (userStates[chatID].companySize === '공기업') {
    keyboard = public_companies.map((company) => [
      { text: company, callback_data: `company_${company}` },
    ]);
  }

  if (keyboard) {
    const options = {
      reply_markup: {
        inline_keyboard: keyboard,
      },
    };

    const message = `현재까지 선택한 내용:\n\n직군: ${userStates[chatID].category}\n직업: ${userStates[chatID].job}\n기업 규모: ${userStates[chatID].companySize}\n`;
    bot.sendMessage(chatID, message);

    setTimeout(() => {
      bot.sendMessage(chatID, '어떤 기업에 관심이 있으신가요?', options);
    }, 1000);
  }
};
