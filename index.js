/** @format */
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const JOB = [
    {
        JobCategory: '연구개발(R&D)',
        JobCategoryList: [
            '소프트웨어 엔지니어',
            '하드웨어 엔지니어',
            '인공지능(AI) 연구원',
            '로봇공학 연구원',
            '신소재 연구원',
            '바이오테크놀로지 연구원',
            '에너지 기술 연구원',
        ],
    },
    {
        JobCategory: 'IT/정보통신',
        JobCategoryList: [
            '프론트엔드 개발자',
            '백엔드 개발자',
            '풀스택 개발자',
            '모바일 앱 개발자',
            '클라우드 엔지니어',
            '데이터베이스 관리자',
            '네트워크 엔지니어',
            '정보보안 전문가',
            'DevOps 엔지니어',
            'UI/UX 디자이너',
        ],
    },
    {
        JobCategory: '제조/생산',
        JobCategoryList: [
            '생산관리 엔지니어',
            '품질관리(QC) 엔지니어',
            '공정 엔지니어',
            '자동화 시스템 엔지니어',
            '산업안전 관리자',
        ],
    },
    {
        JobCategory: '영업/마케팅',
        JobCategoryList: [
            '국내영업 담당자',
            '해외영업 담당자',
            '마케팅 전략 기획자',
            '브랜드 매니저',
            '디지털 마케터',
            '상품기획자(PM)',
        ],
    },
    {
        JobCategory: '재무/회계',
        JobCategoryList: ['재무 분석가', '회계사', '세무사', '자금 관리자', '투자 분석가'],
    },
    {
        JobCategory: '인사/총무',
        JobCategoryList: ['인사 기획자', '채용 담당자', '교육 훈련 담당자', '노무 관리자', '복리후생 담당자'],
    },
    {
        JobCategory: '경영지원/기획',
        JobCategoryList: ['전략 기획자', '경영 컨설턴트', '사업개발(BD) 매니저', '리스크 관리자'],
    },
    {
        JobCategory: '데이터 분석/AI',
        JobCategoryList: [
            '데이터 사이언티스트',
            '머신러닝 엔지니어',
            '비즈니스 인텔리전스 분석가',
            '빅데이터 엔지니어',
        ],
    },
    {
        JobCategory: '디자인',
        JobCategoryList: ['산업 디자이너', '그래픽 디자이너', 'UX/UI 디자이너', '제품 디자이너'],
    },
    {
        JobCategory: '고객 서비스',
        JobCategoryList: ['고객 서비스 매니저', '기술 지원 전문가', 'CRM 관리자'],
    },
    {
        JobCategory: '법무/특허',
        JobCategoryList: ['사내 변호사', '특허 전문가', '법무 담당자'],
    },
    {
        JobCategory: '환경/안전',
        JobCategoryList: ['ESG 전문가', '환경 안전 관리자', '지속가능경영 담당자'],
    },
    {
        JobCategory: '물류/유통',
        JobCategoryList: ['SCM(공급망관리) 전문가', '물류 관리자', '재고 관리자'],
    },
    {
        JobCategory: '홍보/PR',
        JobCategoryList: ['기업 홍보 담당자', '대외협력 담당자', '미디어 관계자'],
    },
];

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatID = msg.chat.id;
    bot.sendMessage(chatID, '안녕하세요. 취업 정보 제공 봇 입니다. /help 를 입력하여 각종 정보를 얻어보세요.');
});

bot.onText(/\/help/, (msg) => {
    const chatID = msg.chat.id;
    bot.sendMessage(
        chatID,
        '[사용 가능한 명령어]\n\n' +
            '/채용 - 관련직무에 대한 사이트 모아보기\n\n' +
            '/기업정보 - 기업정보를 확인할 수 있는 사이트 모아보기\n\n' +
            '/자소서 - 자소서 작성에 도움이 되는 사이트 모아보기\n\n'
    );
});

bot.onText(/\/자소서/, (msg) => {
    const chatID = msg.chat.id;

    bot.sendMessage(chatID, '자소서에 도움이 되는 사이트를 알려드릴게요!');
});

bot.onText(/\/기업정보/, (msg) => {
    const chatID = msg.chat.id;
    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: '잡플래닛 기업랭킹', url: 'https://www.jobplanet.co.kr/companies/cover' }],
                [{ text: '블라인드 기업리뷰', url: 'https://www.teamblind.com/kr/company' }],
            ],
        }),
    };
    bot.sendMessage(chatID, '회사 정보를 알 수 있는 사이트를 알려드릴게요!', options);
});

const userStates = {};

bot.onText(/\/채용/, (msg) => {
    const chatID = msg.chat.id;
    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: '대기업', callback_data: 'large' }],
                [{ text: '중견기업', callback_data: 'medium' }],
                [{ text: '공공기관', callback_data: 'public' }],
            ],
        }),
    };
    bot.sendMessage(chatID, '어떤 규모의 기업에 관심이 있으신가요?', options);
});

bot.on('callback_query', async (callbackQuery) => {
    const chatID = callbackQuery.message.chat.id;
    const data = callbackQuery.data;

    if (!userStates[chatID]) {
        userStates[chatID] = {};
    }

    if (data === 'large' || data === 'medium' || data === 'public') {
        userStates[chatID].companySize = data;
        showCompanies(chatID);
    } else if (data.startsWith('company_')) {
        userStates[chatID].company = data.split('_')[1];
        showJobCategories(chatID);
    } else if (data.startsWith('category_')) {
        userStates[chatID].category = data.split('_')[1];
        showJobList(chatID);
    }
});

const showCompanies = (chatID) => {
    let keyboard;

    const large_companies = ['삼성', 'LG', 'SK', '현대'];
    const medium_companies = ['정보 추가 예정'];
    const public_companies = ['정보 추가 예정'];

    if (userStates[chatID].companySize === 'large') {
        keyboard = large_companies.map((company) => [{ text: company, callback_data: `company_${company}` }]);
    } else if (userStates[chatID].companySize === 'medium') {
        keyboard = medium_companies.map((company) => [{ text: company, callback_data: `company_${company}` }]);
    } else if (userStates[chatID].companySize === 'public') {
        keyboard = public_companies.map((company) => [{ text: company, callback_data: `company_${company}` }]);
    }

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: keyboard,
        }),
    };
    bot.sendMessage(chatID, '어떤 기업에 관심이 있으신가요?', options);
};

const showJobCategories = (chatID) => {
    const jobCategory = JOB.map((item) => item.JobCategory);
    const keyboard = jobCategory.map((category) => [{ text: category, callback_data: `category_${category}` }]);

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: keyboard,
        }),
    };
    bot.sendMessage(chatID, '어떤 직군에 관심이 있으신가요?', options);
};

const showJobList = (chatID) => {
    const category = userStates[chatID].category;
    const jobList = JOB.filter((item) => item.JobCategory === category).map((item) => item.JobCategoryList)[0];

    const keyboard = jobList.map((job) => [{ text: job, callback_data: `job_${job}` }]);

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: keyboard,
        }),
    };
    bot.sendMessage(chatID, '구체적으로 어떤 직업에 관심이 있으신가요?', options);
};
