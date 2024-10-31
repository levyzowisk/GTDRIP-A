import './style.css';
import ProductCard from '../../components/ProductCard/App'
import tenis from '../../../src/assets/tenis.png'


const product = {
    
    image: tenis,
    descontooff: "30% OFF",
    title: "Tênis",
    nomeproduto: "K-Swiss V8 - Masculino",
    preco: "$200",
    precodesconto: "$100"

}





function productListing (props) {
    return (
        <>
            <div className='productListing'>
                {[product(8)].map((g,index) => (
                    <ProductCard 
                        key={index}
                        image={product.image}
                        descontooff={product.descontooff}
                        title={product.title}
                        nomeproduto={product.nomeproduto}
                        preco={product.preco}
                        precodesconto={product.precodesconto}

                    /> 
                ))}
            </div>
    
        </>
    );
}

export default productListing;