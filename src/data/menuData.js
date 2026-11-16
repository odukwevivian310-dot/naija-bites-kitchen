// MENU DATA
// Think of this as the restaurant's menu card, written as an array of objects.
// Each object = one dish. Later we use .map() to turn each one into a card on screen.
// To add a new dish: copy one block, change the details, add an image in public/images.

const menuData = [
  {
    id: 1, name: "Party Jollof Rice", category: "Rice", price: 3500,
    description: "Smoky, spicy party-style jollof served with fried plantain.",
    image: "/images/images (1).jpg"
  },
  {
    id: 2, name: "Fried Rice & Chicken", category: "Rice", price: 4000,
    description: "Colourful fried rice with veggies and a juicy grilled chicken thigh.",
    image: "/images/images.jpg"
  },
  {
    id: 3, name: "Egusi Soup & Pounded Yam", category: "Soups", price: 4500,
    description: "Rich melon-seed soup with assorted meat and smooth pounded yam.",
    image: "/images/egusi.jpg"
  },
  {
    id: 4, name: "Catfish Pepper Soup", category: "Soups", price: 4000,
    description: "Hot and peppery broth with fresh catfish. Perfect for rainy days.",
    image: "/images/catfish.jpg"
  },
  {
    id: 5, name: "Beef Suya", category: "Grills", price: 2500,
    description: "Spicy yaji-rubbed beef skewers with onions and tomatoes.",
    image: "/images/suya.jpg"
  },
  {
    id: 6, name: "Moi Moi", category: "Snacks", price: 1200,
    description: "Steamed bean pudding with fish and egg. Soft and savoury.",
    image: "/images/download.jpg"
  },
  {
    id: 7, name: "Donut (6 pcs)", category: "Snacks", price: 1000,
    description: "Fluffy, golden fried dough balls dusted with a little sugar.",
    image: "/images/donut.jpg"
  },
  {
    id: 8, name: "Chapman", category: "Drinks", price: 1500,
    description: "Fruity Nigerian cocktail (non-alcoholic) with orange and cucumber.",
    image: "/images/chapman.jpg"
  },
  {
    id: 9, name: "Zobo Drink", category: "Drinks", price: 1000,
    description: "Chilled hibiscus drink with ginger and pineapple.",
    image: "/images/zobo.jpg"
  },
];

export default menuData;
