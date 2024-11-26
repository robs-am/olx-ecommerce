// AddToCartButton.tsx
import { useState } from 'react';

const AddToCartButton = () => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(true);

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <button
      aria-label="Adicionar ao Carrinho"
      onClick={handleClick}
      className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      {isAdded ? 'Adicionado!' : 'Adicionar ao Carrinho'}
    </button>
  );
};

export default AddToCartButton; 
