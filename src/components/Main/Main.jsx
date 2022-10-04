import Products from '../Product/Products';
import main from './main.module.css'

const Main = () => {
    return (
        <div className={main.container}>
            <Products />
        </div>
    );
};

export default Main;