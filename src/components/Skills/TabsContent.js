import styles from "./TabsContent.module.scss";
import reactLogo from "../../assets/images/skillsLogo/React.svg";
import vueLogo from "../../assets/images/skillsLogo/VueJS.svg";
import nextjsLogo from "../../assets/images/skillsLogo/NextJS.svg";
import djangoLogo from "../../assets/images/skillsLogo/Django.svg";
import symfonyLogo from "../../assets/images/skillsLogo/Symfony.svg";
import javascriptLogo from "../../assets/images/skillsLogo/JavaScript.png";
import typescriptLogo from "../../assets/images/skillsLogo/TypeScript.svg";
import tailwindLogo from "../../assets/images/skillsLogo/TailwindCSS.svg";
import htmlLogo from "../../assets/images/skillsLogo/HTML.svg";
import cssLogo from "../../assets/images/skillsLogo/CSS.svg";
import javaLogo from "../../assets/images/skillsLogo/Java.svg";
import csharpLogo from "../../assets/images/skillsLogo/CSharp.png";
import figmaLogo from "../../assets/images/skillsLogo/Figma.svg";

function TabsContent({ selected }) {
  if (selected === "dev") {
    return (
      <div className={styles.tabsContent}>
        <div className={styles.element}>
          <img src={reactLogo} alt="React Logo" />
          <h3>React</h3>
        </div>

        <div className={styles.element}>
          <img src={vueLogo} alt="Vue.js Logo" />
          <h3>Vue.js</h3>
        </div>

        <div className={styles.element}>
          <img src={reactLogo} alt="React Native Logo" />
          <h3>React Native</h3>
        </div>

        <div className={styles.element}>
          <img src={nextjsLogo} alt="Next.js Logo" />
          <h3>Next.js</h3>
        </div>

        <div className={styles.element}>
          <img src={djangoLogo} alt="Django Logo" />
          <h3>Django</h3>
        </div>

        <div className={styles.element}>
          <img src={symfonyLogo} alt="Symfony Logo" />
          <h3>Symfony</h3>
        </div>

        <div className={styles.element}>
          <img src={typescriptLogo} alt="TypeScript Logo" />
          <h3>TypeScript</h3>
        </div>

        <div className={styles.element}>
          <img src={javascriptLogo} alt="JavaScript Logo" />
          <h3>JavaScript</h3>
        </div>

        <div className={styles.element}>
          <img src={tailwindLogo} alt="TailwindCSS Logo" />
          <h3>TailwindCSS</h3>
        </div>

        <div className={styles.element}>
          <img src={htmlLogo} alt="HTML Logo" />
          <h3>HTML</h3>
        </div>

        <div className={styles.element}>
          <img src={cssLogo} alt="CSS Logo" />
          <h3>CSS</h3>
        </div>

        <div className={styles.element}>
          <img src={javaLogo} alt="Java Logo" />
          <h3>Java</h3>
        </div>

        <div className={styles.element}>
          <img src={csharpLogo} alt="C# Logo" />
          <h3>C#</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.tabsContent}>
        <div className={styles.element}>
          <img src={figmaLogo} alt="Figma Logo" />
          <h3>Figma</h3>
        </div>
      </div>
    );
  }
}

export default TabsContent;
