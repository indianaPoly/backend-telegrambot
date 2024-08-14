export const getLinksByCategory = (category: string) => {
    switch (category) {
      case 'spelling':
        return [
          { text: '맞춤법 검사', url: 'http://speller.cs.pusan.ac.kr/' }
        ];
      case 'selfintro':
        return [
          { text: '자소설 닷컴', url: 'https://jasoseol.com/' },
          { text: '인크루트 기업별 자기소개서 항목', url: 'https://people.incruit.com/resumeguide/companyselfintro.asp' }
        ];
      case 'successful':
        return [
          { text: '잡코리아 합격자소서', url: 'https://www.jobkorea.co.kr/starter/passassay' }
        ];
      case 'consulting':
        return [
          { text: '인크루트 자소서 무료 컨설팅', url: 'https://people.incruit.com/resumeguide/resumeconsulting.asp' }
        ];
      default:
        return [];
    }
  };
  