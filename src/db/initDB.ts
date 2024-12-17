import sqlite3 from 'sqlite3';
import fs from 'fs';
import path from 'path';

export const initDB = async (): Promise<sqlite3.Database> => {
  return new Promise((resolve, reject) => {
    const dbPath = path.resolve('./data/chatIDs.db');

    // 디렉토리 존재 여부 확인 및 생성
    const dirPath = path.dirname(dbPath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log('✅ data 디렉토리가 생성되었습니다.');
    }

    // SQLite3 데이터베이스 연결
    const db = new sqlite3.Database(dbPath, (err) => {
      if (err) {
        console.error('❌ 데이터베이스 연결 실패:', err.message);
        reject(err);
      } else {
        console.log('✅ 데이터베이스 연결 성공');
        db.run(
          `
          CREATE TABLE IF NOT EXISTS chatIDs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            chatID INTEGER UNIQUE
          )
        `,
          (tableError) => {
            if (tableError) {
              console.error('❌ 데이터 테이블 생성 실패:', tableError.message);
              reject(tableError);
            } else {
              console.log('✅ 테이블 생성 성공');
              resolve(db);
            }
          }
        );
      }
    });
  });
};
