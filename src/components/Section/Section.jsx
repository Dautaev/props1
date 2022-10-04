import section from './section.module.css'
import NavBar from './../NavBar/NavBar';
import Main from './../Main/Main';

const Section = () => {
    return (
        <div className={section.container}>
            <NavBar className={section.navbar} />
            <Main className={section.main}/>
        </div>
    );
};

export default Section;