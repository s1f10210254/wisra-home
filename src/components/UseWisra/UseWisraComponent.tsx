import React, { useState } from 'react';
import styles from './UseWisraComponent.module.css';
interface Data {
  isChecked: boolean;
  name: string;
  number: string;
}

const UseWisraComponent: React.FC = () => {
  const initialData: Data[] = [
    { isChecked: false, name: 'LED', number: '' },
    { isChecked: false, name: 'SERVO', number: '' },
    // { isChecked: false, name: 'Item3', number: '' },
  ];

  const [data, setData] = useState<Data[]>(initialData);
  const [tempData, setTempData] = useState<Data[]>(initialData);

  const handleInputChange = (index: number, key: keyof Data, value: boolean | string) => {
    console.log('Input changed: ', index, key, value);
    const updatedTempData = [...data];

    if (key === 'isChecked') {
      updatedTempData[index].isChecked = value as boolean;
    } else if (key === 'name') {
      updatedTempData[index].name = value as string;
    } else if (key === 'number') {
      updatedTempData[index].number = value as string;
    }
    setTempData(updatedTempData);
    console.log('Updated data: ', updatedTempData);
  };

  const [showInstructions, setShowInstructions] = useState<boolean>(false);

  const handleButtonClick = () => {
    setData(tempData);
    console.log('Data:', data);

    // if (data[0].isChecked) {
    //   setShowInstructions(true);
    // } else {
    //   setShowInstructions(false);
    // }
    setShowInstructions(data[0].isChecked ? true : false);
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={item.isChecked}
            onChange={(e) => handleInputChange(index, 'isChecked', e.target.checked)}
          />
          <span>{item.name}</span>
          <input
            type="number"
            placeholder="Connected Pin"
            value={item.number}
            onChange={(e) => handleInputChange(index, 'number', e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleButtonClick}>起動</button>
      {showInstructions && (
        <div className={styles.instructions}>
          <h2>Setup</h2>
          <ol>
            <li>
              <code>npm install wisra</code>
            </li>
            <li>
              Arduinoを開く
              <br />
              メニューから
              <code>
                File {'>'} Example {'>'} Firmata {'>'} StandardFirmata
              </code>
              を選択
              <br />
              Arduinoにアップロードする
            </li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default UseWisraComponent;
