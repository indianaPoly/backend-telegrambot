export const getArticlesLinksByCategory = (category: string) => {
  switch (category) {
    case 'article_growth':
      return [
        {
          text: '성장과정 [사람인 네이버포스트]',
          url: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32077066&memberNo=5661329',
        },
      ];
    case 'article_reason':
      return [
        {
          text: '지원동기 [사람인 네이버포스트]',
          url: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32122027&memberNo=5661329&navigationType=push',
        },
      ];
    case 'article_adAndDisAd':
      return [
        {
          text: '장점 및 단점 [사람인 네이버포스트]',
          url: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32167487&memberNo=5661329&navigationType=push',
        },
      ];
    case 'article_ambition':
      return [
        {
          text: '입사 후 포부 [사람인 네이버포스트]',
          url: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=32209287&memberNo=5661329',
        },
      ];
    default:
      return [];
  }
};
