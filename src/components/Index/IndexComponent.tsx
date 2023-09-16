import styles from './IndexComponent.module.css';

const IndexComponent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wisra モジュールの紹介</h1>
      <p className={styles.description}>
        Wisraは、Arduinoでの開発を容易にするnpmモジュールです。このページでは、Wisraの基本的な紹介とその使用方法について説明します。
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>インストール方法</h2>
        <p>npmを使用して簡単にWisraをインストールできます:</p>
        <code className={styles.code}>npm install wisra</code>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>使い方</h2>
        <p>
          Wisraを使用する前に、ArduinoのIDEを設定する必要があります。以下の手順に従ってください:
        </p>
        <ol>
          <li>Arduino IDEを開く</li>
          <li>
            メニューからFile {'>'} Example {'>'} Firmata {'>'} StandardFirmataを選択
          </li>
          <li>Arduinoにアップロードする</li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>サンプル: LEDの制御</h2>
        <p>以下は、Wisraを使用してLEDを制御する基本的な例です:</p>
        <code className={styles.code}>
          import {'{LED}'} from {"'"}wisra{"'"};
          <br />
          const led = LED(13);
          <br />
          led.on();
        </code>
      </section>
    </div>
  );
};

export default IndexComponent;
