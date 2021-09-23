import { BaseInstance } from './base'

export const encryptText = async (text: string, key: string): Promise<string> => {
  const { data } = await BaseInstance.post<number[]>(
    '/modrc4/encrypt/text',
    { input: text, key: key }
  );

  return data.map((byte) => byte.toString(16)).join(' ');
};

export const decryptText = async (cipher: number[], key: string): Promise<string> => {
  const { data } = await BaseInstance.post<string>(
    '/modrc4/decrypt/text',
    { input: cipher, key: key }
  );

  return data;
};
