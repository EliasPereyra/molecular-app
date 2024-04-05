export const productService = {
  name: "products",
  actions: {
    listProducts(ctx) {
      return [
        ({ name: "Laptops", price: "2000" },
        { name: "Screen", price: "1000" },
        { name: "Mouse", price: "400" }),
      ];
    },
  },
};
