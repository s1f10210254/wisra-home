import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  interface ItemData {
    name: string;
    imagePath: string;

    description: string;
  }

  const itemData: ItemData[] = [
    {
      name: 'INDEX',
      imagePath: 'path_to_your_image/image1.jpeg',
      description: '項目1の説明箇所です',
    },
    {
      name: 'LED',
      imagePath: 'path_to_your_image/image2.jpeg',
      description: '項目2の説明箇所です',
    },
    {
      name: 'SERVO',
      imagePath: 'path_to_your_image/image3.jpeg',
      description: '項目3の説明箇所です',
    },
  ];

  const [selectedItem, setSelectedItem] = useState<ItemData | null>(null);

  return (
    <div style={{ display: 'flex' }}>
      <aside className={styles.sidebar}>
        {itemData.map((item) => (
          <div
            key={item.name}
            className={`sidebarItem ${
              selectedItem && selectedItem.name === item.name ? 'active' : ''
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </div>
        ))}
      </aside>
      <main className={styles.main}>
        {selectedItem ? (
          <div>
            <img src={selectedItem.imagePath} alt={selectedItem.name} />
            <p>{selectedItem.description}</p>
          </div>
        ) : (
          <p>項目を選択してください</p>
        )}
      </main>
    </div>
  );
};

export default Home;
