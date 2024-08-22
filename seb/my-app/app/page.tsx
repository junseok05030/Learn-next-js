import Navbar from "@/components/navbar";
import Styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={Styles.container}>
        Hell world!
        <h1 className={Styles.title}>더 큰거 온다</h1>
        <h2>큰거 온다</h2>
      </div>
    </>
  );
}
