import product from './product.module.css'
import Product from './Product';

const Products = () => {
    return (
        <div className={product.container}>
            <div className={product.cart1}><Product
                img='http://intocode.ru/d/react-project-1/images/1.jpg'
                name='MacBook'
                price='97000 ₽'
                discount='100000'
                button='Купить'
            />
            </div>
            <div className={product.cart2}><Product
                img='http://intocode.ru/d/react-project-1/images/2.jpg'
                name='Galaxy'
                price='65500 ₽'
                button='Купить'
            />
            </div>
            <div className={product.cart3}><Product
                img='http://intocode.ru/d/react-project-1/images/3.jpg'
                name='Скутер'
                price='58950 ₽'
                discount='65000'
                button='Купить'
            />
            </div>
            <div className={product.cart4}><Product
                img='http://intocode.ru/d/react-project-1/images/4.jpg'
                name='Монитор Samsung'
                price='12000 ₽'
                button='Купить'
            />
            </div>
            <div className={product.cart5}><Product
                img='http://intocode.ru/d/react-project-1/images/5.jpg'
                name='Респераторная маска'
                price='500 ₽'
                button='Купить'
            />   
            </div>
            <div className={product.cart6}><Product
                img='http://intocode.ru/d/react-project-1/images/6.jpg'
                name='Стиральная машина'
                price='75000 ₽'
                discount='100000'
                button='Купить'
            />
            </div>  
        </div>
    );
};

export default Products;