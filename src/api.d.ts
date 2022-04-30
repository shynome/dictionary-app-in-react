export type Mean = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: any[];
  antonyms: any[];
};

export type Definition = {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
};

export type Result = {
  word: string;
  phonetic: string;
  phonetics: { text: string; audio: string }[];
  meanings: Mean[];
};
