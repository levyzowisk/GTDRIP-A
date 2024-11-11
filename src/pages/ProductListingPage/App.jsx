import ProductListing from "../../components/ProductListing/App";
import Layout from "../../components/Layout/App";
import FilterGroup from "../../components/FilterGroup/App";
import "./style.css";
import SectionResultados from "../../components/SectionResultados/App";

export default function ProductListingPage() {
  return (
    <Layout>
      <SectionResultados />
      
      {/* Contêiner para os filtros e lista de produtos lado a lado */}
      <div className="product-listing-container">
        <FilterGroup />
        <ProductListing />
      </div>
    </Layout>
  );
}
