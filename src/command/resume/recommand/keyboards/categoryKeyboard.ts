export const getCategoryKeyboard = () => {
    return {
      reply_markup: {
        inline_keyboard: [
          [{ text: '맞춤법 검사', callback_data: 'spelling' }],
          [{ text: '자소서 항목', callback_data: 'selfintro' }],
          [{ text: '합격 자소서', callback_data: 'successful' }],
          [{ text: '컨설팅', callback_data: 'consulting' }],
        ],
      },
    };
  };