const bcrypt = require("bcryptjs");

const data = {
    "users": [{
            name: "Boss",
            password: bcrypt.hashSync("admin", 8),
            isAdmin: true,
            email: "admin@eshop.com",
            image: "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/photo.jpg"
        },
        {
            name: "Boss",
            password: bcrypt.hashSync("admin", 8),
            isAdmin: true,
            email: "james123@eshop.com",
            image: "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/photo.jpg"
        }
    ],
    "products": [
        { "name": "Polo Shirt", "brand": "Polo", "price": 100, "countInStock": 20, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p1.jpg", "rating": 0.5, "description": "This Shirt is Branded Shirt", "numReviews": 100 },
        { "name": "American Shirt", "brand": "American", "price": 200, "countInStock": 0, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p2.jpg", "rating": 4.5, "description": "This Shirt is Most Demanding Shirt", "numReviews": 50 },
        { "name": "Niki Shirt", "brand": "Niki", "price": 300, "countInStock": 20, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p3.jpg", "rating": 2.5, "description": "This Shirt is Shirt Shirt", "numReviews": 30 },
        { "name": "Pant", "brand": "Polo", "price": 500, "countInStock": 0, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p4.jpg", "rating": 4, "description": "This Pant is Cotton Pant", "numReviews": 10 },
        { "name": "Polo Pant", "brand": "Polo", "price": 1000, "countInStock": 100, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p5.jpg", "rating": 5, "description": "This Pant is Slim Pant", "numReviews": 25 },
        { "name": "American Pant", "brand": "American", "price": 2000, "countInStock": 200, "image": "https://ecommerce-9am.s3.ap-south-1.amazonaws.com/p6.jpg", "rating": 2.5, "description": "This Pant is Branded Pant", "numReviews": 10 }
    ]
}

module.exports = data;