import { useState, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        localStorage.removeItem('cart');
      }
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    const existingIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    const quantity = item.quantity || 1;

    if (existingIndex !== -1) {
      const newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
      saveCart(newCart);
    } else {
      const newCart = [...cart, { ...item, quantity }];
      saveCart(newCart);
    }
  };

  const removeFromCart = (id: string) => {
    const newCart = cart.filter(item => item.id !== id);
    saveCart(newCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const newCart = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  };
}
