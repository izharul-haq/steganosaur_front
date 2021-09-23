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

export const encryptFile = async (file: File, key: string, filetype: string): Promise<void> => {
  const formData = new FormData();
  formData.append('input', file);
  formData.append('key', key);
  
  const { data } = await BaseInstance.post<string>(
    '/modrc4/encrypt/file',
    formData,
    { responseType: 'blob' }
  );

  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `mod-RC4-encrypted.${filetype}`);
  document.body.appendChild(link);
  link.click();
};

export const decryptFile = async (file: File, key: string, filetype: string): Promise<void> => {
  const formData = new FormData();
  formData.append('input', file);
  formData.append('key', key);
  
  const { data } = await BaseInstance.post<string>(
    '/modrc4/decrypt/file',
    formData,
    { responseType: 'blob' }
  );

  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `mod-RC4-decrypted.${filetype}`);
  document.body.appendChild(link);
  link.click();
};