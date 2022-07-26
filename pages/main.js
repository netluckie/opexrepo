import Head from "next/head";
import Footer from "../components/layouts/footer";
import Landin from "../components/layouts/landin";
import WithSubNav from "../components/layouts/navbar";
import WithSubNav2 from "../components/layouts/navbar2";

export default function Home() {
  return (
    <>
      <Head>
        <title>Opex Portal</title>
      </Head>
      <WithSubNav2 />
      <Landin/>
      <Footer />
    </>
  );
}
