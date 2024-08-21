import Styles from "./page.module.css";

export default function Home() {
  return (
    <div className={Styles.container}>
      Hell world!
      <h1 className={Styles.title}>너무 덥다</h1>
      <h2>사진 찾기 귀찮다</h2>
    </div>
  );
}
