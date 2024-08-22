import Link from "next/link";
import Styles from "./detail.module.css";

export default function Home() {
  const value = "typescript 최고";
  const numList: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
  const nList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <nav>
        <Link href="/" >Home</Link>
        <Link href="/counter" >Counter</Link>
        <Link href="/detail" >Detail</Link>
      </nav>
      <div className={Styles.container}>
        {numList.map((value, i) => {
          console.log(value, i);
          return (
            <div key={i}>
              <h1>{value}단</h1>
              {nList.map((n, j) => {
                return (
                  <h2>
                    {value} * {n} = {value * n}
                  </h2>
                );
              })}
              <br />
            </div>
          );
        })}{" "}
      </div>
    </>
  );
}
