export const getLinksByCategory = (category: string) => {
  switch (category) {
    case 'recommand_selfintro':
      return [
        { text: '자소설 닷컴', url: 'https://jasoseol.com/' },
        {
          text: '인크루트 기업별 자기소개서 항목',
          url: 'https://people.incruit.com/resumeguide/companyselfintro.asp',
        },
        {
          text: '링커리어 만능 검색기',
          url: 'https://linkareer.com/cover-letter/search',
        },
      ];
    case 'recommand_successful':
      return [
        {
          text: '잡코리아 합격자소서',
          url: 'https://www.jobkorea.co.kr/starter/passassay',
        },
      ];
    default:
      return [];
  }
};
