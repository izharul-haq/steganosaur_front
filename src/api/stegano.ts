import { BaseInstance } from './base'

export const hideFileInAudio = async (mask: File, content: File, mode: 'seq' | 'rand', key?: string): Promise<void> => {
  const formData = new FormData();
  formData.append('mask', mask);
  formData.append('content', content);
  key ? formData.append('key', key) : null;
  formData.append('mode', mode);
  
  const { data } = await BaseInstance.post<string>(
    '/stegano/hide/audio',
    formData,
    { responseType: 'blob' }
  );

  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'stegano_audio.wav');
  document.body.appendChild(link);
  link.click();
};

export const showFileInAudio = async (masked: File, key?: string): Promise<void> => {
  const formData = new FormData();
  formData.append('maskedfile', masked);
  key ? formData.append('key', key) : null;

  const { data } = await BaseInstance.post<string>(
    '/stegano/show/audio',
    formData,
    { responseType: 'blob' }
  );

  const url = window.URL.createObjectURL(new Blob([data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.txt');
  document.body.appendChild(link);
  link.click();
}