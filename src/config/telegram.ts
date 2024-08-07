/** @format */
import * as dotenv from 'dotenv';
import TelegramBot = require('node-telegram-bot-api');
dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN as string;

export const bot = new TelegramBot(token, { polling: true });
