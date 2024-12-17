export const getArticleCategoryKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: '성장과정', callback_data: 'article_growth' }],
      [{ text: '지원동기', callback_data: 'article_reason' }],
      [{ text: '장점 및 단점', callback_data: 'article_adAndDisAd' }],
      [{ text: '입사 후 포부', callback_data: 'article_ambition' }],
      [{ text: '경험 및 사례 작성', callback_data: 'article_experience' }],
      [{ text: '직무 역량', callback_data: 'article_coreSkills' }],
    ],
  },
};
