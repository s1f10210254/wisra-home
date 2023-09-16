import { useState } from 'react';

const Home = () => {
  interface Props {
    name: string;
    onButtonClick: (name: string) => void;
  }

  interface ItemData {
    name: string;
    imagePath: string;

    description: string;
  }

  const itemData: Record<string, ItemData> = {
    LED: {
      name: 'LED',
      imagePath: 'path_to_your_image/image1.jpeg',
      description: '項目1の説明箇所です',
    },
    SERVO: {
      name: '項目2',
      imagePath: 'path_to_your_image/image2.jpeg',
      description: '項目2の説明箇所です',
    },
    項目3: {
      name: '項目3',
      imagePath: 'path_to_your_image/image3.jpeg',
      description: '項目3の説明箇所です',
    },
  };

  const CheckboxItem: React.FC<Props> = ({ name, onButtonClick }) => {
    const [isChecked, setIschecked] = useState(false);
    const [count, setCount] = useState(0);

    return (
      <div>
        <input type="checkbox" checked={isChecked} onChange={() => setIschecked(!isChecked)} />
        {name}
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
        <button onClick={() => onButtonClick(name)}>ボタン</button>
      </div>
    );
  };

  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  const handleButtonClick = (name: string) => {
    setSelectedItem(itemData[name]);
  };

  return (
    <div>
      <CheckboxItem name="LED" onButtonClick={handleButtonClick} />
      <CheckboxItem name="SERVO" onButtonClick={handleButtonClick} />
      <CheckboxItem name="項目3" onButtonClick={handleButtonClick} />

      {selectedItem !== null ? (
        <div>
          <img src={selectedItem.imagePath} alt={selectedItem.name} />
          <p> {selectedItem.description} </p>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
