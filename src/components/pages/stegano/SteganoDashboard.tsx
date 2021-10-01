import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type SteganoInput = {
  encrypt: 0 | 1;
  mask: FileList;
  content: FileList;
  mode?: 'sequential' | 'random';
};

const SteganoDashboard: React.FC = () => {
  const [mode, setMode] = useState<'hide' | 'show'>('hide');
  const [mask, setMask] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  
  const { register, handleSubmit } = useForm();
  
  const onHide = async (data: SteganoInput) => {
    console.log(mode);
    console.log(data);
  };

  const onShow = async (data: SteganoInput) => {
    console.log(mode);
    console.log(data);
  }

  return (
    <div className="page-container">
      <div className="mb-4">
        <div className="page-title">Steganography</div>
      </div>
      <form
        id="stegano-input"
        className="mb-3 overflow-auto shadow rounded-lg"
        onSubmit={handleSubmit(mode === 'hide' ? onHide : onShow)}
      >
        <table className="table-auto min-w-max text-sm w-full text-[1rem]">
          <thead>
            <tr>
              <th className="table-header" colSpan={4}>Input</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Encrypt Message</td>
              <td className="p-2 flex flex-row justify-around items-center" colSpan={3}>
                <div className="flex p-2 space-x-2 items-center">
                  <input
                    type="radio"
                    id="encrypt-message"
                    required
                    value={1}
                    {...register('encrypt', { required: true, setValueAs: parseInt })}
                  />
                  <label htmlFor="encrypt-message">Encrypt message</label>
                </div>
                <div className="flex p-2 space-x-2 items-center">
                  <input
                    type="radio"
                    id="not-encrypt-message"
                    required
                    value={0}
                    {...register('encrypt', { required: true, setValueAs: parseInt })}
                  />
                  <label htmlFor="not-encrypt-message">Don{'\''}t encrypt message</label>
                </div>
              </td>
            </tr>
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Mask</td>
              <td className="table-cell" colSpan={3}>
                <button
                  className="button button-primary"
                  onClick={() => document.getElementById('mask-input')?.click()}
                >
                  {mask ? mask : 'Choose File'}
                  <input
                    className="hidden"
                    type="file"
                    id="mask-input"
                    {...register('mask')}
                    onInput={() => setMask((document.getElementById('mask-input') as HTMLInputElement).value.substr(12))}
                  />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Content</td>
              <td className="table-cell" colSpan={3}>
                <button
                  className="button button-primary"
                  onClick={() => document.getElementById('content-input')?.click()}
                >
                  {content ? content : 'Choose File'}
                  <input
                    className="hidden"
                    type="file"
                    id="content-input"
                    {...register('content')}
                    onInput={() => setContent((document.getElementById('content-input') as HTMLInputElement).value.substr(12))}
                  />
                </button>
              </td>
            </tr>
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Mode</td>
              <td className="p-2 flex flex-row justify-around items-center" colSpan={3}>
                <div className="flex p-2 space-x-2 items-center">
                  <input
                    type="radio"
                    id="sequential"
                    required={mode === 'hide'}
                    value={'sequential'}
                    {...register('mode', { required: mode === 'hide' })}
                  />
                  <label htmlFor="sequential">Sequential</label>
                </div>
                <div className="flex p-2 space-x-2 items-center">
                  <input
                    type="radio"
                    id="random"
                    required={mode === 'hide'}
                    value={'random'}
                    {...register('mode', { required: mode === 'hide' })}
                  />
                  <label htmlFor="random">Random</label>
                </div>
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
              form="stegano-input"
              onClick={() => setMode('hide')}
            >
              Hide
            </button>
            <button
              className="button button-secondary"
              type="submit"
              form="stegano-input"
              onClick={() => setMode('show')}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteganoDashboard;
