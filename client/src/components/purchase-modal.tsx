import { useState } from 'react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  product: {
    name: string;
    price: number;
    quantity: number;
  };
}

export default function PurchaseModal({ isOpen, onClose, onSuccess, product }: PurchaseModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    paymentMethod: 'stripe'
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      onSuccess();
      setFormData({ name: '', email: '', paymentMethod: 'stripe' });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const total = product.price * product.quantity;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-poppins font-bold text-xl">Finalizar Compra</h2>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              onClick={onClose}
              disabled={isProcessing}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-3">Resumo do Pedido</h3>
            <div className="flex justify-between items-center mb-2">
              <span>{product.name}</span>
              <span className="font-semibold">
                R${(product.price * product.quantity).toFixed(2).replace('.', ',')}
              </span>
            </div>
            {product.quantity > 1 && (
              <div className="text-sm text-gray-600 mb-2">
                Quantidade: {product.quantity} × R${product.price.toFixed(2).replace('.', ',')}
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
              <span>Total</span>
              <span className="text-brand-purple">
                R${total.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* Purchase Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="customer-name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="customer-name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                disabled={isProcessing}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label htmlFor="customer-email" className="block text-sm font-semibold text-gray-700 mb-2">
                E-mail *
              </label>
              <input
                type="email"
                id="customer-email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                disabled={isProcessing}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Método de Pagamento</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="stripe"
                    checked={formData.paymentMethod === 'stripe'}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                    className="mr-2"
                  />
                  <i className="fas fa-credit-card mr-2 text-brand-purple"></i>
                  Cartão de Crédito/Débito
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleInputChange}
                    disabled={isProcessing}
                    className="mr-2"
                  />
                  <i className="fab fa-paypal mr-2 text-blue-500"></i>
                  PayPal
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-brand-purple text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-purple-dark transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className={`fas ${isProcessing ? 'fa-spinner fa-spin' : 'fa-lock'} mr-2`}></i>
              {isProcessing ? 'Processando...' : 'Pagar (Simulado)'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
