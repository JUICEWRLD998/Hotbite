// Product type definition
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'product' | 'menu';
  size?: 'wrap' | 'bowl' | 'box'; // Only for menu items
}

// Cart item includes product info plus quantity
export interface CartItem extends Product {
  quantity: number;
  uniqueId: string; // Unique identifier for cart item (id + size)
}

// Order details for checkout
export interface OrderDetails {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'cod' | 'online';
  notes?: string;
}

// Cart totals
export interface CartTotals {
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
}

// Complete order with cart and customer details
export interface Order {
  orderId: string;
  items: CartItem[];
  totals: CartTotals;
  customerDetails: OrderDetails;
  orderDate: string;
  status: 'pending' | 'confirmed' | 'completed';
}
