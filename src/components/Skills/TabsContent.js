import styles from "./TabsContent.module.scss";
import reactLogo from "../../assets/images/skillsLogo/React.svg";
import javascriptLogo from "../../assets/images/skillsLogo/JavaScript.png";
import htmlLogo from "../../assets/images/skillsLogo/HTML.svg";
import cssLogo from "../../assets/images/skillsLogo/CSS.svg";
import csharpLogo from "../../assets/images/skillsLogo/CSharp.png";
import figmaLogo from "../../assets/images/skillsLogo/Figma.svg";

function TabsContent({selected}) {
    if (selected ==="dev") {
        return (
            <div className={styles.tabsContent}>
                <div className={styles.element}>
                    <img src={reactLogo} alt="React Logo"/>
                    <h3>React</h3>
                </div>

                <div className={styles.element}>
                    <img src={javascriptLogo} alt="JavaScript Logo"/>
                    <h3>JavaScript</h3>
                </div>

                <div className={styles.element}>
                    <img src={htmlLogo} alt="HTML Logo"/>
                    <h3>HTML</h3>
                </div>

                <div className={styles.element}>
                    <img src={cssLogo} alt="CSS Logo"/>
                    <h3>CSS</h3>
                </div>
                        
                <div className={styles.element}>
                    <img src={csharpLogo} alt="C# Logo"/>
                    <h3>C#</h3>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className={styles.tabsContent}>
                <div className={styles.element}>
                    <img src={figmaLogo} alt="Figma Logo"/>
                    <h3>Figma</h3>
                </div>
            </div>
        )
    }
}

export default TabsContent;