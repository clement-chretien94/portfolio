import Header from '../../components/Header/Header';
import HeroArea from '../../components/HeroArea/HeroArea';
import AboutMe from '../../components/AboutMe/AboutMe';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.scss';

function HomePage() {
    return (
        <>
            <Header/>
            <div className={styles.main}>
                <HeroArea/>
                <AboutMe/>
                <Education/>
                <Skills/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>

        </>
    );
}
  
export default HomePage;