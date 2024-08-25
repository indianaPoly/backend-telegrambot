// 채용 공고를 긁어오는 로직이 들어가야 합니다.

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const main = async () => {
  // const baseUrl =
  //     'https://apis.data.go.kr/1160100/service/GetCorpBasicInfoService_V2/getCorpOutline_V2';
  //   const apiKey = process.env.SERVICE_KEY;
  //   const pageNumber = 1;
  //   const numOfRows = 100;
  //   const type = 'json';
  //   const url = `${baseUrl}?serviceKey=${apiKey}&pageNo=${pageNumber}&numOfRows=${numOfRows}&resultType=${type}`;
  //
  //   const response = await axios.get(url);
  //
  //   console.log(response.data.response.body.items);

  const res = await axios.get('https://www.samsungcareers.com/hr/?ty=B');
  console.log(res.data);
};

main();
