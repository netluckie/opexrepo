import Head from "next/head";
import Footer from "../components/layouts/footer";
import WithSubNav from "../components/layouts/navbar";
import Project from "../components/layouts/projeler";


export default function Home() {
  return (
    <>
      <Head>
        <title>Opex Portal | Projeler</title>
      </Head>
      <WithSubNav/>
      <Project/>
      <Footer />
    </>
  );
}
