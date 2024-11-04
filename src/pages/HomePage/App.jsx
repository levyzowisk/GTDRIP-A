import Footer from "../../components/Footer/App";
import Gallery from "../../components/Gallery/app"; // Revendo essa opção (Header e Footer)
import Header from "../../components/Header/App";
import Layout from "../../components/Layout/App"; // Revendo essa opção (Header e Footer)
import Section from "../../components/Section/App";

export default function App() {
  return (
    <>
      <Header />
      <Gallery />
      <Section />
      <Footer />
    </>
  );
}
