import ProductListing from "../../components/ProductListing/App";
import Gallery from "../../components/Gallery/app2";
import Layout from "../../components/Layout/App";
import Section from "../../components/Section/App";
import ProductDetails from "../../components/ProductDetails/App";
import "./style.css";
import BuyBox from "../../components/BuyBox/App";

export default function ProductViewPage() {
  return (
    <>
      <Layout>
        <BuyBox></BuyBox>
      </Layout>
    </>
  );
}
