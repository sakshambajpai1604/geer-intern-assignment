let productList = [
  {
    id: '1',
    name: 'Eco T-Shirt',
    price: 499,
    image: '/images/tshirt.jpg'
  },
  {
    id: '2',
    name: 'Recycled Tote Bag',
    price: 299,
    image: '/images/totebag.jpg'
  }
];

module.exports = {
  getAll: () => productList,
  add: ({ name, price, image }) => {
    const newProduct = {
      id: Date.now().toString(),
      name,
      price,
      image
    };
    productList.push(newProduct);
    return newProduct;
  },
  remove: (id) => {
    const index = productList.findIndex(p => p.id === id);
    if (index === -1) return null;
    const [removed] = productList.splice(index, 1);
    return removed;
  }
};
