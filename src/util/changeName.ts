export const changeName = (category: string) => {
  if (category === 'recommand_spelling') {
    return '맞춤법 검사';
  } else if (category === 'recommand_selfintro') {
    return '자소서 항목';
  } else if (category === 'recommand_successful') {
    return '합격 자소서';
  } else if (category === 'recommand_consulting') {
    return '컨설팅';
  } else if (category === 'article_growth') {
    return '성장과정';
  } else if (category === 'article_reason') {
    return '지원동기';
  } else if (category === 'article_adAndDisAd') {
    return '장점 및 단점';
  } else if (category === 'article_ambition') {
    return '입사 후 포부';
  } else {
    return null;
  }
};
