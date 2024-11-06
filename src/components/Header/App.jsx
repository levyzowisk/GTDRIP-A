import Busca from "../Busca/index";
import "./style.css";

export default function Header() {
  return (
    <>
      <header>
        <Busca />
        <nav className="nav">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/categorias">Categorias</a>
            </li>
            <li>
              <a href="/pedidos">Meus Pedidos</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
