import {v4 as uuidv4} from 'uuid';
import { getRandomWord } from '../api';

export const guid = async (args?: string[]): Promise<string> => {
    return uuidv4();
}

export const username = async (args?: string[]): Promise<string> => {
    var word1 = await getRandomWord();
    var word2 = await getRandomWord();
    var number = getRandomInt(2000);

    console.log(word1);

    return `
    Generated username: ${word1[0].word}${word2[0].word}${number}

    Meaning of ${word1[0].word}: ${word1[0].definition}
    Meaning of ${word2[0].word}: ${word2[0].definition}

    Pronunciation: ${word1[0].pronunciation} ${word2[0].pronunciation} ${number}
    
    `;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
