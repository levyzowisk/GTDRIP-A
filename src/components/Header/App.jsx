// import Busca from "../Busca/index";
// import "./style.css";

// export default function Header() {
//   return (
//     <>
//       <header>
//         <Busca />
//         <nav className="nav">
//           <ul>
//             <li>
//               <a href="/" className="active">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="/produtos">Produtos</a>
//             </li>
//             <li>
//               <a href="/categorias">Categorias</a>
//             </li>
//             <li>
//               <a href="/pedidos">Meus Pedidos</a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </>
//   );
// }

//

import { Link, useLocation } from 'react-router-dom';
import Busca from "../Busca/index";
import "./style.css";

export default function Header() {
  const location = useLocation(); // Obtém o caminho atual

  return (
    <header>
      <Busca />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/produtos" className={location.pathname === "/produtos" ? "active" : ""}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/categorias" className={location.pathname === "/categorias" ? "active" : ""}>
              Categorias
            </Link>
          </li>
          <li>
            <Link to="/pedidos" className={location.pathname === "/pedidos" ? "active" : ""}>
              Meus Pedidos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
