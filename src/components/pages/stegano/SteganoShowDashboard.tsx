import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type SteganoShowInput = {
  key?: string;
  masked: FileList;
};

const SteganoShowDashboard: React.FC = () => {
  const [masked, setMasked] = useState<string | undefined>();
  
  const { register, handleSubmit } = useForm();
  
  const onShow = async (data: SteganoShowInput) => {
    console.log(data);
  };

  return (
    <div className="page-container">
      <div className="mb-4">
        <div className="page-title">Steganography</div>
      </div>
      <form
        id="stegano-input"
        className="mb-3 overflow-auto shadow rounded-lg"
        onSubmit={handleSubmit(onShow)}
      >
        <table className="table-auto min-w-max text-sm w-full text-[1rem]">
          <thead>
            <tr>
              <th className="table-header" colSpan={4}>Input</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Key</td>
              <td className="p-2 flex flex-row justify-evenly items-center" colSpan={3}>
                <input
                  className="input-text"
                  type="text"
                  placeholder="Key to decrypt file (if required)"
                  {...register('key')}
                />
              </td>
            </tr>
            <tr className="text-center">
              <td className="table-cell" colSpan={1}>Masked File</td>
              <td className="table-cell" colSpan={3}>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={() => document.getElementById('mask-input')?.click()}
                >
                  {masked ? masked : 'Choose File'}
                  <input
                    className="hidden"
                    type="file"
                    id="mask-input"
                    {...register('masked')}
                    onInput={() => setMasked((document.getElementById('mask-input') as HTMLInputElement).value.substr(12))}
                  />
                </button>
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
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteganoShowDashboard;
