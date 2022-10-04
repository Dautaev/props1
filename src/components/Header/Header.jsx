import header from './header.module.css'
import { BsBag } from 'react-icons/bs'

const Header = () => {
    return (
        <div className={header.container}>
            <div className={header.title}>Intocode Coding Shopcamp</div>
            <div className={header.logo}>
                <div className={header.amount}>2</div>
                <div className={header.icon}><BsBag /></div>
            </div>
        </div>
    );
};
export default Header;