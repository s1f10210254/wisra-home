import React, { useState } from 'react';
interface ItemData {
  name: string;
  imagePath: string;
  description: string;
}

const itemsData: Record<string, ItemData> = {
  項目1: {
    name: '項目1',
    imagePath: 'path_to_your_image/image1.jpg',
    description: '項目1の説明箇所です。',
  },
  項目2: {
    name: '項目2',
    imagePath: 'path_to_your_image/image2.jpg',
    description: '項目2の説明箇所です。',
  },
  項目3: {
    name: '項目3',
    imagePath: 'path_to_your_image/image3.jpg',
    description: '項目3の説明箇所です。',
  },
};

const UseWisraComponent: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);
  const handleButtonClick = (name: string) => {
    setSelectedItem(itemsData[name]);
  };

  interface Props {
    name: string;
    onButtonClick: (name: string) => void;
  }

  const CheckboxItem: React.FC<Props> = ({ name, onButtonClick }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [count, setCount] = useState(0);

    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        {name}
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => onButtonClick(name)}>ボタン</button>
      </div>
    );
  };

  return (
    <div>
      <CheckboxItem name="項目1" onButtonClick={handleButtonClick} />
      <CheckboxItem name="項目2" onButtonClick={handleButtonClick} />
      <CheckboxItem name="項目3" onButtonClick={handleButtonClick} />

      {selectedItem !== null ? (
        <div>
          <img src={selectedItem.imagePath} alt={selectedItem.name} />
          <p>{selectedItem.description}</p>
        </div>
      ) : null}
    </div>
  );
};

export default UseWisraComponent;
