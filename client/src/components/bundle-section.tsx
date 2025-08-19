import { useState } from 'react';

interface BundleProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  included?: boolean;
}

interface BundleSectionProps {
  products: BundleProduct[];
  onBuyBundle: (selectedProducts: BundleProduct[]) => void;
}

export default function BundleSection({ products, onBuyBundle }: BundleSectionProps) {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(
    products.filter(p => p.included).map(p => p.id)
  );

  const toggleProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product?.included) return; // Can't deselect included products

    setSelectedProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getBundlePrice = () => {
    // Oferta especial: quando ambos produtos estão selecionados, preço fixo de R$ 18,90
    if (selectedProducts.length === 2) {
      return 18.90;
    }
    // Caso contrário, soma dos preços individuais
    return products
      .filter(p => selectedProducts.includes(p.id))
      .reduce((total, p) => total + p.price, 0);
  };

  const getRegularTotal = () => {
    return products
      .filter(p => selectedProducts.includes(p.id))
      .reduce((total, p) => total + p.price, 0);
  };

  const getDiscount = () => {
    const bundlePrice = getBundlePrice();
    const regularTotal = getRegularTotal();
    return selectedProducts.length === 2 ? regularTotal - bundlePrice : 0;
  };

  const handleBuyBundle = () => {
    const selected = products.filter(p => selectedProducts.includes(p.id));
    onBuyBundle(selected);
  };

  return (
    <section className="bg-gray-50 rounded-2xl p-6 lg:p-8 mb-16">
      <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-2 text-center">
        Oferta Especial
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Leve os 2 PDFs por apenas <span className="font-bold text-brand-purple">R$ 18,90</span> - Economize R$ 4,00!
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {products.map((product, index) => (
          <div key={product.id}>
            {index > 0 && (
              <div className="text-center mb-4 lg:mb-0 lg:hidden">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-purple text-white rounded-full font-bold text-xl">
                  +
                </div>
              </div>
            )}
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={`product-${product.id}`}
                  checked={selectedProducts.includes(product.id)}
                  disabled={product.included}
                  onChange={() => toggleProduct(product.id)}
                  className="mr-3 text-brand-purple"
                />
                <label htmlFor={`product-${product.id}`} className="text-sm font-medium text-gray-700">
                  {product.included ? 'Este produto' : 'Adicionar ao combo'}
                </label>
              </div>
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="text-brand-purple font-bold">
                R${product.price.toFixed(2).replace('.', ',')}
              </div>
            </div>

            {index === 0 && (
              <div className="hidden lg:block text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-brand-purple text-white rounded-full font-bold text-xl">
                  +
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bundle Pricing */}
      <div className="mt-8 text-center">
        <div className="space-y-2">
          <div className="text-2xl font-bold text-gray-900">
            Preço total: <span className="text-brand-purple">R${getBundlePrice().toFixed(2).replace('.', ',')}</span>
          </div>
          {getDiscount() > 0 && (
            <div className="text-success-green font-semibold">
              Economize R${getDiscount().toFixed(2).replace('.', ',')} comprando junto!
            </div>
          )}
        </div>

        <button
          type="button"
          className="mt-6 bg-success-green text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors shadow-lg"
          onClick={handleBuyBundle}
        >
          <i className="fas fa-shopping-cart mr-2"></i>
          Comprar Combo
        </button>
      </div>
    </section>
  );
}
