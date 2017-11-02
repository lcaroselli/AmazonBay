exports.seed = (knex, Promise) => {
  return knex('order_history').del()
    .then(() => {
      return knex('order_history').insert([
        { id: 1, order_total: 100.99 },
        { id: 2, order_total: 200.00 },
        { id: 3, order_total: 500.35 }
      ]);
    });
};
