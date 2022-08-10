import Link from "next/link";
import { Fragment, useEffect } from "react";

export default function FirstPost(props) {
  useEffect(async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();

    console.log(data, "dynamic");
  }, []);

  return (
    <Fragment>
      <h1>First Post</h1>
      <p>{props.fact}</p>
      <p>
        <Link href="/">Zurück</Link>
      </p>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await Promise.all([
    response.json(),
    new Promise(resolve => setTimeout(resolve, 5000)) // sleep for 5 seconds
  ]);

  console.log(data[0]);

  return {
    props: data[0],
  };
}
