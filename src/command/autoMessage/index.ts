import { bot } from '../../config';
import { initDB } from '../../db/initDB';

export const sendAutoMessage = async () => {
  const db = await initDB();

  try {
    // 데이터베이스에서 모든 chatID 가져오기
    const rows = await new Promise<{ chatID: number }[]>((resolve, reject) => {
      db.all(
        `SELECT chatID FROM chatIDs`,
        (err, rows: { chatID: number }[]) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        }
      );
    });

    const message = `
      서버가 재시작되었습니다.\n다시 이용하시려면 /start 를 눌러주세요.
    `;

    // 저장된 모든 사용자에게 메시지 전송
    for (const row of rows) {
      await bot.sendMessage(row.chatID, message);
    }

    console.log('✅ 재시작 메시지가 전송되었습니다.');
  } catch (error) {
    console.error('❌ 재시작 메시지 전송 오류:');
  } finally {
    db.close();
  }
};
