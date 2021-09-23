import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { decryptFile, decryptText, encryptFile, encryptText } from '~/api/modrc4';
import { saveAsTextFile } from '~/utils/text';
import OutputTable from './OutputTable';

type ModRC4Input = {
  text: string;
  file: FileList;
  key: string;
}

const ModifiedRC4Dashboard: React.FC = () => {
  const [inputType, setInputType] = useState<'text' | 'file'>('text');
  const [mode, setMode] = useState<'enc' | 'dec'>('enc');
  const [file, setFile] = useState<string>();
  const [result, setResult] = useState<string>('');

  const { register, handleSubmit } = useForm();

  const onEncrypt = async (data: ModRC4Input) => {
    if (inputType === 'text') {
      const res = await encryptText(data.text, data.key);
      setResult(res);
    } else {
      const filenameSplit = data.file[0].name.split('.');
      await encryptFile(data.file[0], data.key, filenameSplit[filenameSplit.length - 1]);
    }
  };

  const onDecrypt = async (data: ModRC4Input) => {
    if (inputType === 'text') {
      const arr = data.text.split(' ').map((byte) => Number(`0x${byte}`));
      const res = await decryptText(arr, data.key);
      setResult(res);
    } else {
      const filenameSplit = data.file[0].name.split('.');
      await decryptFile(data.file[0], data.key, filenameSplit[filenameSplit.length - 1]);
    }

    console.log(mode);
  }
  
  return (
    <div className="page-container">
      <div className="mb-4">
        <div className="page-title">Modified RC4</div>
      </div>
      <form
        id="modrc4-input"
        className="mb-3 overflow-auto shadow rounded-lg"
        onSubmit={handleSubmit(mode === 'enc' ? onEncrypt : onDecrypt)}
      >
        <table className="table-auto min-w-max text-sm w-full text-[1rem]">
          <thead>
            <tr>
              <th className="table-header" colSpan={4}>Input</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Input Type</td>
                <td className="table-cell" colSpan={3}>
                  <div className="flex flex-row space-x-2">
                    <button
                      className={`button button-${inputType === 'text' ? 'primary' : 'secondary' }`}
                      onClick={() => setInputType('text')}
                    >
                      Text
                    </button>
                    <button
                      className={`button button-${inputType === 'file' ? 'primary' : 'secondary' }`}
                      onClick={() => setInputType('file')}
                    >
                      File
                    </button>
                  </div>
                </td>
              </tr>
              <tr className={`text-center ${inputType === 'text' ? '' : 'hidden'}`}>
                <td className="table-cell">Text Input</td>
                <td className="table-cell">
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Plaintext or ciphertext"
                    required={inputType === 'text'}
                    {...register('text', { required: inputType === 'text' })}
                  />
                </td>
              </tr>
              <tr className={`text-center ${inputType === 'file' ? '' : 'hidden'}`}>
                <td className="table-cell">File Input</td>
                <td className="table-cell">
                  <button
                    className="button button-primary"
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    {file ? file : 'Choose File'}
                    <input
                      className="hidden"
                      type="file"
                      id="file-input"
                      {...register('file')}
                      onInput={() => setFile((document.getElementById('file-input') as HTMLInputElement).value.substr(12))}
                    />
                  </button>
                </td>
              </tr>
              <tr className="text-center">
                <td className="table-cell" colSpan={1}>Cipher Key</td>
                <td className="table-cell" colSpan={3}>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Encryption or decryption key"
                  required
                  {...register('key', { required: true })}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="mb-3">
        <div className="flex justify-between">
          <div></div>
          <div className="flex space-x-2">
            <button
              className="button button-primary"
              type="submit"
              form="modrc4-input"
              onClick={() => setMode('enc')}
            >
              Encrypt
            </button>
            <button
              className="button button-secondary"
              type="submit"
              form="modrc4-input"
              onClick={() => setMode('dec')}
            >
              Decrypt
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <OutputTable output={result} />
      </div>
      <div className="flex justify-between">
          <div></div>
          <div>
            <button
              className="button button-primary"
              onClick={() => saveAsTextFile(`mod-RC4-${mode}rypted`, result)}
            >
              Save as .txt File
            </button>
          </div>
        </div>
    </div>
  );
};

export default ModifiedRC4Dashboard;
