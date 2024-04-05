import ApiGatewayService from "moleculer-web";

export const apiGateway = {
  name: "gateway",
  mixins: [ApiGatewayService],
  settings: {
    port: process.env.PORT || 3000,
    routes: [
      {
        path: "/api",
        aliases: {
          "GET /products": "products.listProducts",
        },
      },
    ],
  },
};
