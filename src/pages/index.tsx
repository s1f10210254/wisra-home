import { useState } from 'react';
import { Link } from 'react-router-dom';
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
        {itemData.map((item, index) => (
          <Link
            key={index}
            to={`./item${index + 1}`}
            className={styles.sidebarItem}
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </Link>
        ))}
      </aside>
      <main className={styles.main}>
        {selectedItem ? (
          <div>
            <img src={selectedItem.imagePath} alt={selectedItem.name} />
            <p>{selectedItem.description}</p>
          </div>
        ) : (
          <h1>WELCOME TO WISRA</h1>
        )}
      </main>
    </div>
  );
};

export default Home;
