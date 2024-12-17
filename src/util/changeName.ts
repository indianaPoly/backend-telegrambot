export const changeName = (category: string): string => {
  const categoryMap: { [key: string]: string } = {
    recommand_spelling: '맞춤법 검사',
    recommand_selfintro: '자소서 항목',
    recommand_successful: '합격 자소서',
    recommand_consulting: '컨설팅',
    article_growth: '성장과정',
    article_reason: '지원동기',
    article_adAndDisAd: '장점 및 단점',
    article_ambition: '입사 후 포부',
    article_experience: '경험 및 사례 작성',
    article_coreSkills: '직무 역량',
  };

  // categoryMap에 있는 경우 반환, 없으면 기본값 반환
  return categoryMap[category] || '알 수 없는 카테고리';
};
