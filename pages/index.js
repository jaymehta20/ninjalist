import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid vel possimus similique, eius ullam corrupti ab adipisci minus,
          dolorem obcaecati aperiam dolorum animi voluptates ut culpa mollitia
          velit? Assumenda itaque praesentium corrupti porro iste. Praesentium
          consequatur est labore et tempora esse, ratione illo quis neque
          corporis voluptatibus, nemo hic! Distinctio omnis quae eaque veritatis
          ipsam provident commodi sapiente qui doloribus, culpa tempore hic
          repellendus placeat dolorum rerum enim officia similique nihil, unde
          consequatur non error dolorem voluptatem. Vero quibusdam nesciunt,
          quia neque autem consequuntur, nisi possimus esse quisquam sint enim.
          Alias commodi aliquid neque accusantium quibusdam? Ullam, voluptas
          molestiae.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listings</a>
        </Link>
      </div>
    </>
  );
}
