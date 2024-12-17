import { bot } from '../../../config/index';
import { Message } from '../../../types';

export const handleCheckSelling = (msg: Message) => {
  const responseText = '들어가고 싶은 곳을 눌러주세요.';

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '부산대학교 맞춤법 검사기',
            url: 'http://speller.cs.pusan.ac.kr/',
          },
        ],
        [
          {
            text: '사람인 글자수세기/맞춤법',
            url: 'https://www.saramin.co.kr/zf_user/tools/character-counter?srsltid=AfmBOoq2QdlN5wN5TLOFzmn6q6NuHWzgudsZ0myYIx5WnTaQ4TiDDP1A',
          },
        ],
      ],
    },
  };

  bot.sendMessage(msg.chat.id, responseText, keyboard);
};
