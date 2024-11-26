import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav
        aria-label="Navegação principal"
        className="flex justify-between items-center max-w-7xl mx-auto"
      >

        <div>
          <Link
            href="/"
            className="text-2xl font-bold hover:opacity-80"
            aria-label="Ir para a página inicial"
          >
            <h1 className="sr-only">Mobile Store</h1>
            Mobile Store
          </Link>
        </div>


        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="hover:underline focus:outline focus:ring-2 focus:ring-white"
              aria-current="page"
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:underline focus:outline focus:ring-2 focus:ring-white"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
