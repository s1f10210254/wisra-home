import { useState } from 'react';
import IndexComponent from '../components/IndexComponent';
import LEDComponent from '../components/LEDComponent';
import SERVOComponent from '../components/SERVOComponent';
import styles from './index.module.css';

const Home = () => {
  interface ItemData {
    name: string;

    description: string;
  }

  const itemData: ItemData[] = [
    {
      name: 'INDEX',

      description: 'WELCOM TO WISRA',
    },
    {
      name: 'LED',

      description: 'LED',
    },
    {
      name: 'SERVO',

      description: 'SERVO',
    },
  ];

  const [selectedItem, setSelectedItem] = useState<ItemData>(itemData[0]);

  return (
    <div style={{ display: 'flex' }}>
      <aside className={styles.sidebar}>
        {itemData.map((item) => (
          <div
            key={item.name}
            className={`${styles.sidebarItem} ${selectedItem.name === item.name ? 'active' : ''}`}
            onClick={() => setSelectedItem(item)}
          >
            {item.name}
          </div>
        ))}
      </aside>
      <main className={styles.main}>
        <div>
          <h1>{selectedItem.description}</h1>
          {renderContentBasedOnItemName(selectedItem.name)}
        </div>
      </main>
    </div>
  );
};

function renderContentBasedOnItemName(name: string) {
  switch (name) {
    case 'INDEX':
      return <IndexComponent />;
    case 'LED':
      return <LEDComponent />;
    case 'SERVO':
      return <SERVOComponent />;
  }
}

export default Home;
