const products = [{
        id: 1,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 3,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    },
    {
        id: 2,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 1,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 3,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 5,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 4,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 2,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 5,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 6,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 6,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 3,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 7,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 5,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 8,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 4,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 9,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 2,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 10,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 6,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 11,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 3,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 12,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 5,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 13,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 4,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 14,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 5,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
    {
        id: 15,
        name: "Shoes",
        productType: "Running shoes",
        price: 50,
        rating: 3,
        image: "https://eldinero.com.do/wp-content/uploads/calzado-deportivo-adidas.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, eveniet? Nihil eveniet laboriosam quaerat dicta doloribus velit, exercitationem optio maiores cupiditate voluptatibus non quibusdam amet ullam ipsum saepe. Reiciendis rerum amet esse minima voluptatibus numquam sint dicta culpa, unde temporibus, optio repellat ipsa excepturi ab necessitatibus dolorum inventore! Exercitationem, quo!"
    }, {
        id: 16,
        name: "Laptop",
        productType: "Gaming Laptop",
        price: 1500,
        rating: 5,
        image: "https://technogarage.com.mx/wp-content/uploads/2021/07/portada-mejores-laptop-gaming.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis architecto, laboriosam accusantium debitis voluptate ut mollitia, minus ipsum eius ullam aspernatur, autem quaerat ab ratione repellendus illum nostrum magnam odit numquam fuga hic quam sed velit explicabo? Reprehenderit neque ea sunt molestiae facere dignissimos eos nisi? Sequi necessitatibus quam hic!"
    },
]
export default products;