var initialState = [
    {
        id: 1,
        name: 'Iphone 12 Pro',
        image: 'https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-bac-new-600x600-200x200.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 700,
        stock: 17,
        rating: 5
    },
    {
        id: 2,
        name: 'Samsung Galaxy S21',
        image: 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 600,
        stock: 12,
        rating: 4
    },
    {
        id: 3,
        name: 'Samsung Galaxy S21 Ultra',
        image: 'https://cdn.tgdd.vn/Products/Images/42/226316/samsung-galaxy-s21-ultra-bac-600x600-1-200x200.jpg',
        description: 'Sản phẩm do Samsung sản xuất',
        price: 800,
        stock: 5,
        rating: 5
    }
];

var products = (state = initialState, action) => {
    switch(action.type){
        default : return [...state];
    }
};

export default products;