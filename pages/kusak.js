import Head from "next/head";
import Footer from "../components/layouts/footer";
import Kusak from "../components/layouts/kusaklar";

import WithSubNav from "../components/layouts/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Opex Portal | Kuşaklar</title>
      </Head>
      <WithSubNav/>
        <Kusak/>
      <Footer />
    </>
  );
}
