/** @format */

import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();
const token = process.env.TELEGRAM_BOT_TOKEN as string;

export const bot = new TelegramBot(token, { polling: true });
