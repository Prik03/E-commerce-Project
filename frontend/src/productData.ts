export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string; // URL of the product image
    category: string;
  }
  
  const products: Product[] = [
    {
      id: '1',
      name: 'Apple iPhone 14',
      description: 'Latest iPhone with A15 Bionic chip.',
      price: 999.99,
      image: 'https://example.com/images/iphone14.jpg',
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Samsung Galaxy S23',
      description: 'High-performance smartphone with excellent camera quality.',
      price: 899.99,
      image: 'https://example.com/images/galaxy-s23.jpg',
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Sony WH-1000XM5',
      description: 'Noise-cancelling wireless headphones.',
      price: 349.99,
      image: 'https://example.com/images/sony-headphones.jpg',
      category: 'Accessories',
    },
    {
      id: '4',
      name: 'Dell XPS 13',
      description: 'Compact laptop with stunning display and performance.',
      price: 1249.99,
      image: 'https://example.com/images/dell-xps13.jpg',
      category: 'Computers',
    },
    {
      id: '5',
      name: 'Apple MacBook Air M2',
      description: 'Ultra-thin laptop with M2 chip for outstanding performance.',
      price: 1199.99,
      image: 'https://example.com/images/macbook-air-m2.jpg',
      category: 'Computers',
    },
    {
      id: '6',
      name: 'Bose SoundLink II',
      description: 'Portable Bluetooth speaker with excellent sound quality.',
      price: 199.99,
      image: 'https://example.com/images/bose-soundlink.jpg',
      category: 'Accessories',
    },
    {
      id: '7',
      name: 'Nike Air Max 270',
      description: 'Stylish and comfortable sneakers.',
      price: 149.99,
      image: 'https://example.com/images/nike-air-max.jpg',
      category: 'Footwear',
    },
    {
      id: '8',
      name: 'Adidas Ultraboost 22',
      description: 'High-performance running shoes.',
      price: 179.99,
      image: 'https://example.com/images/adidas-ultraboost.jpg',
      category: 'Footwear',
    },
  ];
  
  export default products;
  