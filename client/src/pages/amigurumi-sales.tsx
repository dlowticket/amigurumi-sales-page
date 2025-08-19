import { useState } from 'react';
import ProductGallery from '@/components/product-gallery';
import PurchaseModal from '@/components/purchase-modal';
import FAQAccordion from '@/components/faq-accordion';
import BundleSection from '@/components/bundle-section';

export default function AmigurumiSales() {
  const [quantity, setQuantity] = useState(1);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const product = {
    id: 'amigurumi-dorminhoco',
    name: 'Passo a passo PDF - Amigurumi Dorminhoco: A Fofura que Dorme! 😴💤',
    price: 9.90,
    oldPrice: 12.90,
    description: 'Confeccione o amigurumi Dorminhoco com instruções detalhadas em PDF — ideal para iniciantes e presentes cheios de amor.',
    features: [
      'PDF detalhado com fotos passo-a-passo',
      'Nível: Iniciante / Intermediário',
      'Arquivo digital enviado por e-mail após confirmação de pagamento'
    ]
  };

  const images = [
    {
      src: 'https://i.ibb.co/dzf2Wnh/e8d03537fbaf320a1ff1a0b5bb0d8cc1.jpg',
      alt: 'Amigurumi Dorminhoco - Boneca azul com ursinho'
    },
    {
      src: 'https://i.ibb.co/SXx40ptt/a36ffd7a50759c7cf45dd85837668113.jpg',
      alt: 'Amigurumi Dorminhoco - Boneca dormindo com almofada'
    },
    {
      src: 'https://i.ibb.co/v6SDqPry/ba76bd98b16e6d8b9942f511a9ea6626.jpg',
      alt: 'Amigurumi Dorminhoco - Bebê dormindo com toalha'
    }
  ];

  const faqItems = [
    {
      question: 'Preciso ter experiência para fazer este amigurumi?',
      answer: 'Não! Este tutorial é desenvolvido para iniciantes, com explicações detalhadas e fotos de cada etapa. Se você sabe fazer pontos básicos de crochê, conseguirá fazer o Dorminhoco.'
    },
    {
      question: 'Como recebo o arquivo após a compra?',
      answer: 'O PDF será enviado automaticamente para seu e-mail em até 5 minutos após a confirmação do pagamento. Você também pode entrar em contato conosco pelo WhatsApp para receber o arquivo.'
    },
    {
      question: 'Posso vender os amigurumis que eu fizer?',
      answer: 'Sim! Você pode vender os amigurumis confeccionados com este tutorial. Pedimos apenas que não redistribua o PDF original e dê os créditos quando possível.'
    }
  ];

  const bundleProducts = [
    {
      id: 'amigurumi-dorminhoco',
      name: 'PDF Amigurumi Dorminhoco',
      price: 9.90,
      image: 'https://i.ibb.co/dzf2Wnh/e8d03537fbaf320a1ff1a0b5bb0d8cc1.jpg',
      included: true
    },
    {
      id: 'amigurumi-bailarina',
      name: 'PDF Amigurumi Bailarina',
      price: 12.90,
      image: 'https://i.ibb.co/xqhDxFpp/952023ec815f895b5a268e8885d57d4c.jpg'
    }
  ];

  const increaseQuantity = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 50) {
      setQuantity(value);
    }
  };



  const handleBuyNow = () => {
    // Redireciona direto para o checkout do produto individual
    window.location.href = 'https://checkout.digitais.online/VCCL1O8SC61B';
  };

  const handleBuyBundle = (selectedProducts: any[]) => {
    console.log('Buying bundle:', selectedProducts);
    
    // Se tem 2 produtos selecionados, redireciona para o checkout do combo
    if (selectedProducts.length === 2) {
      window.location.href = 'https://checkout.digitais.online/VCCL1O8SC62Q';
    } else {
      // Se apenas 1 produto, redireciona para o checkout individual
      window.location.href = 'https://checkout.digitais.online/VCCL1O8SC61B';
    }
  };

  const handlePurchaseSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const text = encodeURIComponent(product.name);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      pinterest: `https://pinterest.com/pin/create/button/?url=${url}&description=${text}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="font-poppins font-bold text-2xl text-gray-900">Pistache</h1>
            </div>
            <div className="flex items-center space-x-4">
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Image Gallery - 60% width on desktop */}
          <div className="lg:col-span-3">
            <ProductGallery images={images} />
          </div>

          {/* Product Details - 40% width on desktop */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Title */}
              <div>
                <h1 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 leading-tight">
                  {product.name}
                </h1>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-poppins font-bold text-3xl text-brand-purple">
                    R${product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    R${product.oldPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <div className="text-sm text-success-green font-bold bg-green-50 px-3 py-2 rounded-lg border border-green-200">
                  <i className="fas fa-bolt mr-1"></i>
                  Economize R${(product.oldPrice - product.price).toFixed(2).replace('.', ',')} (23% de desconto) + OFERTA LIMITADA!
                </div>
              </div>



              {/* Features */}
              <div className="space-y-3">
                <h3 className="font-poppins font-semibold text-gray-900">O que você receberá:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-success-green mt-1"></i>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="font-semibold text-gray-900">Quantidade:</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-600 hover:text-brand-purple transition-colors"
                      onClick={decreaseQuantity}
                      aria-label="Diminuir quantidade"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-16 px-3 py-2 text-center border-0 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="px-3 py-2 text-gray-600 hover:text-brand-purple transition-colors"
                      onClick={increaseQuantity}
                      aria-label="Aumentar quantidade"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  className="w-full bg-brand-purple text-white font-semibold py-4 px-6 rounded-xl hover:bg-brand-purple-dark transition-colors shadow-lg hover:shadow-xl"
                  onClick={handleBuyNow}
                >
                  <i className="fas fa-bolt mr-2"></i>
                  Comprar Agora
                </button>

              </div>

              {/* Payment Methods */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Formas de pagamento:</h4>
                <div className="flex items-center gap-4">
                  <i className="fab fa-cc-visa text-2xl text-blue-600"></i>
                  <i className="fab fa-cc-mastercard text-2xl text-red-500"></i>
                  <i className="fab fa-paypal text-2xl text-blue-500"></i>
                  <i className="fas fa-credit-card text-2xl text-teal-500"></i>
                </div>
              </div>

              {/* Digital Notice */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <i className="fas fa-exclamation-triangle text-yellow-600 mt-1"></i>
                  <div className="text-sm text-yellow-800">
                    <strong>ATENÇÃO:</strong> Após a compra, o arquivo será enviado por e-mail.
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Compartilhar:</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => shareOnSocial('facebook')}
                    className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    aria-label="Compartilhar no Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    onClick={() => shareOnSocial('twitter')}
                    className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    aria-label="Compartilhar no Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    onClick={() => shareOnSocial('pinterest')}
                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                    aria-label="Compartilhar no Pinterest"
                  >
                    <i className="fab fa-pinterest"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-2 text-center">
              O que nossos clientes estão dizendo
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Mais de 1.500+ pessoas já criaram seus amigurumis com nossos tutoriais
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Depoimento 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Simplesmente PERFEITO! As instruções são super claras e detalhadas. Mesmo sendo iniciante consegui fazer um amigurumi lindo. Minha filha ficou encantada! 🥰"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Maria Silva</p>
                    <p className="text-sm text-gray-500">Comprou há 2 dias</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Tutorial incrível! As fotos passo a passo fazem toda diferença. Já fiz 3 amigurumis e todos ficaram lindos. Super recomendo! Vale cada centavo 💖"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Ana Costa</p>
                    <p className="text-sm text-gray-500">Comprou há 1 semana</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Que tutorial maravilhoso! Muito bem explicado e fácil de seguir. O resultado final é uma fofura. Já estou pensando em fazer mais! 😍✨"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    C
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Carla Santos</p>
                    <p className="text-sm text-gray-500">Comprou há 3 dias</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Amei demais! Super didático e bem organizado. Consegui fazer em um fim de semana. Agora quero o combo para fazer a bailarina também! 💃"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    L
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Lucia Ferreira</p>
                    <p className="text-sm text-gray-500">Comprou há 5 dias</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 5 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Produto excelente! Tutorial muito bem feito com explicações claras. Meu primeiro amigurumi ficou perfeito. Já indiquei para várias amigas! ⭐"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                    J
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Julia Oliveira</p>
                    <p className="text-sm text-gray-500">Comprou há 1 dia</p>
                  </div>
                </div>
              </div>

              {/* Depoimento 6 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">5.0</span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Melhor investimento que fiz! O PDF é completo e as fotos ajudam muito. Fiz para presentear minha neta e ela adorou. Parabéns pelo trabalho! 👏"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    R
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Rosa Almeida</p>
                    <p className="text-sm text-gray-500">Comprou há 4 dias</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">1.500+</div>
                <div className="text-gray-600">Clientes satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">4.9/5</div>
                <div className="text-gray-600">Avaliação média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">98%</div>
                <div className="text-gray-600">Recomendam</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-purple mb-2">24h</div>
                <div className="text-gray-600">Suporte rápido</div>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Together Section */}
        <BundleSection products={bundleProducts} onBuyBundle={handleBuyBundle} />

        {/* Description Section */}
        <section className="mb-16">
          <div className="max-w-4xl">
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-6">Descrição do Produto</h2>

            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O <strong>Amigurumi Dorminhoco</strong> é mais que um simples tutorial — é uma experiência de criação que traz alegria e relaxamento. Este PDF contém instruções detalhadas, fotografadas passo a passo, para você criar sua própria fofura adormecida.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Perfeito para quem está começando no mundo do crochê ou para quem já tem experiência e busca um projeto relaxante. O resultado final é um amigurumi encantador que pode ser um presente especial ou uma decoração aconchegante para qualquer ambiente.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-4">Perguntas Frequentes</h3>
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-poppins font-bold text-xl mb-4">Pistache</h3>
              <p className="text-gray-400">Criando momentos especiais através do artesanato.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Pistache. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Purchase Modal */}
      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={() => setIsPurchaseModalOpen(false)}
        onSuccess={handlePurchaseSuccess}
        product={{
          name: product.name,
          price: product.price,
          quantity: quantity
        }}
      />

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full text-center p-6">
            <div className="text-success-green text-6xl mb-4">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2 className="font-poppins font-bold text-2xl text-gray-900 mb-4">Compra Realizada!</h2>
            <p className="text-gray-700 mb-6">
              Seu arquivo PDF foi enviado para o e-mail informado. Verifique também sua caixa de spam.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <i className="fas fa-info-circle mr-2"></i>
                Em caso de dúvidas, entre em contato pelo WhatsApp: (11) 99999-9999
              </p>
            </div>
            <button
              type="button"
              className="bg-brand-purple text-white font-semibold py-3 px-6 rounded-xl hover:bg-brand-purple-dark transition-colors"
              onClick={() => setIsSuccessModalOpen(false)}
            >
              Entendi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
