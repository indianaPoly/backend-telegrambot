/** @format */
import { help, insight, recruiting, resume, start } from './command/index.js';

const main = () => {
    start();
    help();
    resume();
    insight();
    recruiting();
};

main();
