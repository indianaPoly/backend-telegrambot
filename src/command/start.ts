/** @format */
import { bot } from '../config/index.js';
import { initDB } from '../db/initDB.js';

export const start = () => {
  bot.onText(/\/start/, async (msg) => {
    const chatID = msg.chat.id;
    const db = await initDB();

    try {
      await new Promise<void>((resolve, reject) => {
        db.run(
          `INSERT OR IGNORE INTO chatIDs (chatID) VALUES (?)`,
          [chatID],
          (err) => {
            if (err) reject(err);
            else resolve();
          }
        );
      });

      const welcomeMessage = `
        안녕하세요! 취업 정보 제공 봇입니다.\n명령어를 확인하려면 👉 /help 를 눌러보세요!
      `;

      await bot.sendMessage(chatID, welcomeMessage);
    } catch (error) {
      console.error('❌ /start 명령어 처리 중 오류 발생:', error);
    } finally {
      db.close();
    }
  });
};
