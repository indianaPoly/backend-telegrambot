export const getCategoryKeyboard = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '자소서 항목 보기', callback_data: 'recommand_selfintro' }],
        [{ text: '합격 자소서 보기', callback_data: 'recommand_successful' }],
      ],
    },
  };
};
