import React, { useState } from 'react';
interface Data {
  isChecked: boolean;
  name: string;
  number: string;
}

const UseWisraComponent: React.FC = () => {
  const [data, setData] = useState<Data[]>([
    { isChecked: false, name: 'LED', number: '' },
    { isChecked: false, name: 'SERVO', number: '' },
    { isChecked: false, name: 'Item3', number: '' },
  ]);

  const handleInputChange = (index: number, key: keyof Data, value: boolean | string) => {
    console.log('Input changed: ', index, key, value);
    const updatedData = [...data];

    if (key === 'isChecked') {
      updatedData[index].isChecked = value as boolean;
    } else if (key === 'name') {
      updatedData[index].name = value as string;
    } else if (key === 'number') {
      updatedData[index].number = value as string;
    }
    // updatedData[index][key] = value as any;
    setData(updatedData);
    console.log('Updated data: ', updatedData);
  };

  const handleButtonClick = () => {
    console.log('Data:', data);
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
            placeholder="Enter number"
            value={item.number}
            onChange={(e) => handleInputChange(index, 'number', e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleButtonClick}>起動</button>
    </div>
  );
};

export default UseWisraComponent;
