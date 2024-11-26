
import dynamic from 'next/dynamic';


const AddToCartButton = dynamic(() => import('./AddToCartButton'), {
  loading: () => <p>Carregando...</p>,
});

interface Product {
  image: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border bg-white rounded-lg p-4 shadow-lg flex flex-col items-center">
      <img
        src={product.image}
        alt={`Imagem do produto ${product.name}`}
        loading="lazy"
        className="w-full h-40 object-contain mb-4"
      />
      <h3 className="text-lg text-gray-900 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-900">{product.description}</p>
      <p className="my-4 text-gray-600 font-bold">R$ {product.price}</p>


      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
