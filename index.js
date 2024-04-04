import { ServiceBroker } from "moleculer";
import HTTPServer from "moleculer-web";

const broker1 = new ServiceBroker({
  nodeID: "node-1",
  transporter: "NATS",
});

broker1.createService({
  name: "gateway",
  mixins: [HTTPServer],
  settings: {
    routes: [
      {
        aliases: {
          "GET /products": "products.listProducts",
        },
      },
    ],
  },
});

const broker2 = new ServiceBroker({
  nodeID: "node-2",
  transporter: "NATS",
});

broker2.createService({
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
});

Promise.all([broker1.start(), broker2.start()]);
