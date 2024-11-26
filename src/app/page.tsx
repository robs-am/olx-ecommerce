
"use client";
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo à Mobile Store</h1>
      <p className="mb-6">Descubra nossos produtos incríveis.</p>
      <Link aria-label="Ir para os Página de Produtos" className="bg-blue-500 text-white p-3 rounded" href="/products">
        Ir para Produtos
      </Link>
    </div>
  );
}
