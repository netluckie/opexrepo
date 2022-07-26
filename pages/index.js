import Head from "next/head";
import Image from "next/image";
import Footer from "../components/layouts/footer";
import Landin2 from "../components/layouts/landin2";
import WithSubNav from "../components/layouts/navbar";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Opex Portal</title>
      </Head>
      <WithSubNav/>
      <Landin2/>
      <Footer />
    </>
  );
}
