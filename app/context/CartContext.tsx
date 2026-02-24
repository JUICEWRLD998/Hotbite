"use client";

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product, CartItem, CartTotals } from '../types/cart';

// Cart state interface
interface CartState {
  items: CartItem[];
  isCartOpen: boolean;
}

// Cart actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string } // uniqueId
  | { type: 'UPDATE_QUANTITY'; payload: { uniqueId: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'SET_CART_OPEN'; payload: boolean }
  | { type: 'LOAD_CART'; payload: CartItem[] };

// Cart context value interface
interface CartContextValue {
  items: CartItem[];
  isCartOpen: boolean;
  itemCount: number;
  totals: CartTotals;
  addItem: (product: Product) => void;
  removeItem: (uniqueId: string) => void;
  updateQuantity: (uniqueId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setCartOpen: (isOpen: boolean) => void;
}

// Create context
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Generate unique ID for cart items (includes size for menu items)
const generateUniqueId = (product: Product): string => {
  return product.size ? `${product.id}-${product.size}` : product.id;
};

// Cart reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const product = action.payload;
      const uniqueId = generateUniqueId(product);
      const existingItemIndex = state.items.findIndex(item => item.uniqueId === uniqueId);

      if (existingItemIndex > -1) {
        // Item exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        // New item, add to cart
        const newItem: CartItem = {
          ...product,
          quantity: 1,
          uniqueId,
        };
        return { ...state, items: [...state.items, newItem] };
      }
    }

    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.uniqueId !== action.payload),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { uniqueId, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.uniqueId !== uniqueId),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.uniqueId === uniqueId ? { ...item, quantity } : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }

    case 'TOGGLE_CART': {
      return { ...state, isCartOpen: !state.isCartOpen };
    }

    case 'SET_CART_OPEN': {
      return { ...state, isCartOpen: action.payload };
    }

    case 'LOAD_CART': {
      return { ...state, items: action.payload };
    }

    default:
      return state;
  }
};

// Calculate cart totals
const calculateTotals = (items: CartItem[]): CartTotals => {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const deliveryFee = subtotal > 0 ? 5 : 0; // $5 delivery fee, free if cart is empty
  const total = subtotal + tax + deliveryFee;

  return {
    subtotal: Math.round(subtotal * 100) / 100,
    tax: Math.round(tax * 100) / 100,
    deliveryFee,
    total: Math.round(total * 100) / 100,
  };
};

// Initial state
const initialState: CartState = {
  items: [],
  isCartOpen: false,
};

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('hotbite_cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (state.items.length > 0) {
      localStorage.setItem('hotbite_cart', JSON.stringify(state.items));
    } else {
      localStorage.removeItem('hotbite_cart');
    }
  }, [state.items]);

  // Calculate item count
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  // Calculate totals
  const totals = calculateTotals(state.items);

  // Context value
  const value: CartContextValue = {
    items: state.items,
    isCartOpen: state.isCartOpen,
    itemCount,
    totals,
    addItem: (product: Product) => dispatch({ type: 'ADD_ITEM', payload: product }),
    removeItem: (uniqueId: string) => dispatch({ type: 'REMOVE_ITEM', payload: uniqueId }),
    updateQuantity: (uniqueId: string, quantity: number) =>
      dispatch({ type: 'UPDATE_QUANTITY', payload: { uniqueId, quantity } }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    toggleCart: () => dispatch({ type: 'TOGGLE_CART' }),
    setCartOpen: (isOpen: boolean) => dispatch({ type: 'SET_CART_OPEN', payload: isOpen }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
