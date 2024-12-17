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
    case 'article_experience':
      return [
        {
          text: '나만의 경험 정리하는 방법 3가지 [자소설닷컴 Blog]',
          url: 'https://jasoseol.com/blog/post/1/',
        },
        {
          text: '평범한 경험으로 쓰는 특별한 자기소개서 [브런치]',
          url: 'https://brunch.co.kr/@dbc47ad605ce405/41',
        },
      ];
    case 'article_coreSkills':
      return [
        {
          text: '자소서 직무역량 작성법과 예시, 자주 하는 실수 [haijob 블로그]',
          url: 'https://www.haijob.co.kr/blog/how-to-write-a-cover-letter-job-competency-examples-and-frequent-mistakes/',
        },
        {
          text: '[자기소개서 예시] 직무역량 자기소개서 쓰는 방법 [네이버 블로그]',
          url: 'https://blog.naver.com/jing_june/223194050771',
        },
      ];
    default:
      return [];
  }
};
