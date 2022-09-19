import Layout from "./Layout";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Cards from "./Cards"
import Buttons from "./Buttons"
import Footer from "./Footer"

const Page = () => {
  return (
    <>
      <Header />
      <Layout>
        <h1 style={{ marginBottom: "80rem" }}>Page</h1>
        <Cards />
        <About />
        <Contact />
      </Layout>
    </>
  );
};

export default Page;
