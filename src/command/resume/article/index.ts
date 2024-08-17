import { bot } from '../../../config/index';
import { getArticlesKeyboard } from './keyboards/articleKeyboard';

export const handleArticles = (msg: any) => {
  const responseText = '자기소개서 관련 아티클 목록입니다';
  bot.sendMessage(msg.chat.id, responseText, getArticlesKeyboard);
};
