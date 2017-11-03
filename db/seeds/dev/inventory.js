exports.seed = (knex, Promise) => {
  return knex('inventory').del()
    .then(() => {
      return knex('inventory').insert([
        {
          id: 1,
          item_title: 'Large Yellow Dog Raincoat',
          item_description: 'WOW! Doggo ipsum borking doggo blop very taste wow big ol wrinkler fat boi, aqua doggo yapper the neighborhood pupper.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/51ZLu-k3bpL._SL1001_.jpg',
          item_price: 16.99
         },
        {
          id: 2,
          item_title: 'Large Blue Dog Raincoat',
          item_description: 'Shibe wow very biscit shooberino you are doin me a concern, smol borking doggo.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/41JqtmzfNZL.jpg',
          item_price: 13.99
        },
        {
          id: 3,
          item_title: 'Fluffy Yellow Coat for your Dog',
          item_description: 'What a nice floof dat tungg tho extremely cuuuuuute shoob ur givin me a spook very hand that feed shibe shibe waggy wags.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/61vWcDOGQSL._SL1198_.jpg',
          item_price: 12.59
        },
        {
          id: 4,
          item_title: 'Spicy Red Doggo Coat',
          item_description: 'Yapper heckin blep, such treat. Very hand that feed shibe you are doing me a frighten snoot borkdrive dat tungg tho.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/61QAgL5-NtL._SL1028_.jpg',
          item_price: 10.99
        },
        {
          id: 5,
          item_title: 'Big Pink Coat',
          item_description: 'shoob you are doin me a concern. Shooberino what a nice floof ruff long water shoob super chub, wow such tempt.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/51yniQkusoL._SL1000_.jpg',
          item_price: 20.35
        },
        {
          id: 6,
          item_title: 'Blue Bobber',
          item_description: 'You are doin me a concern noodle horse blop heckin angery woofer, fluffer.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/611W3qtGy3L._SL1000_.jpg',
          item_price: 17.99
        },
        {
          id: 7,
          item_title: 'Green Doggo Vest',
          item_description: 'Mlem lotsa pats shooberino heckin good boys and girls super chub smol borking doggo with a long snoot.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/410aTnyvGfL.jpg',
          item_price: 18.99
        },
        {
          id: 8,
          item_title: 'Black Dog Vest Coat Thing',
          item_description: 'You are doin me a concern noodle horse blop heckin angery woofer, fluffer.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/61RjMFYPixL._SL1001_.jpg',
          item_price: 25.99
        },
        {
          id: 9,
          item_title: 'Green Coat for Dog',
          item_description: 'Yapper heckin blep, such treat. Very hand that feed shibe you are doing me a frighten snoot borkdrive dat tungg th.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/71eau7N6-XL._SL1000_.jpg',
          item_price: 15.99
        },
        {
          id: 10,
          item_title: 'Yellow Coat for Dogge',
          item_description: 'shoob you are doin me a concern. Shooberino what a nice floof ruff long water shoob super chub.',
          item_image: 'https://images-na.ssl-images-amazon.com/images/I/71Plzqv0W6L._SL1000_.jpg',
          item_price: 12.99
        }
      ]);
    });
};
