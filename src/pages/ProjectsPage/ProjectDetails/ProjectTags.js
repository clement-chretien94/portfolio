import styles from "./ProjetTags.module.scss";

function ProjetTags({ makeWith }) {
  function chooseTheClass(test) {
    switch (test) {
      case "Electron":
        return styles.electron;
      case "React Native":
      case "React":
        return styles.react;
      case "JavaScript":
        return styles.javascript;
      case "HTML":
        return styles.html;
      case "TypeScript":
      case "CSS":
        return styles.css;
      case "C#":
        return styles.csharp;
      case "Figma":
        return styles.figma;
      case "Unity":
        return styles.unity;
    }
  }

  return (
    <div className={`${styles.projectTag} ${chooseTheClass(makeWith)}`}>
      {makeWith}
    </div>
  );
}

export default ProjetTags;
