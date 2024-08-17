export const getCategoryKeyboard = () => {
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: '맞춤법 검사', callback_data: 'recommand_spelling' }],
        [{ text: '자소서 항목', callback_data: 'recommand_selfintro' }],
        [{ text: '합격 자소서', callback_data: 'recommand_successful' }],
        [{ text: '컨설팅', callback_data: 'recommand_consulting' }],
      ],
    },
  };
};
