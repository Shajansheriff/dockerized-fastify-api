import { FastifyInstance } from "fastify";

export const customersRoutes = async (app: FastifyInstance) => {
  app.route({
    method: "GET",
    url: "/customers",

    handler: async (req, res) => {
      res.send({
        data: [
          {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "1234567890",
            address: "123 Main St, Anytown, USA",
          },
        ],
        total: 1,
        page: 1,
        limit: 10,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: false,
        nextPage: null,
        previousPage: null,
      });
    },
  });

  app.route({
    method: "POST",
    url: "/customers",
    handler: async (req, res) => {
      res.send({
        data: {
          id: 1,
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "1234567890",
          address: "123 Main St, Anytown, USA",
        },
      });
    },
  });
};
