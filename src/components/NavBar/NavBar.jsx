import navbar from './navbar.module.css'

const NavBar = () => {
    return (
        <div className={navbar.container}>
            <ul>
                <li>Гаджеты и аксессуары</li>
                <hr />
                <li>Бытовая техника</li>
                <hr />
                <li>Прочее</li>
            </ul>
        </div>
    );
};

export default NavBar;