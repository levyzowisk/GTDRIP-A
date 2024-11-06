import Gallery from "../../components/Gallery/app";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import "./style.css";

export default function App() {
  return (
    <>
      <Layout>
        <Gallery />
        <Section />
      </Layout>
    </>
  );
}
