import onof from "../assets/images/projetImage/onof.png";
import focusFlow from "../assets/images/projetImage/focusFlow.png";
import operationIceStation from "../assets/images/projetImage/operationIceStation.png";
import strasevent from "../assets/images/projetImage/strasevent.png";

export const data = [
  {
    title: "FocusFlow",
    _id: crypto.randomUUID(),
    image: focusFlow,
    description:
      "Il s'agit d'une application web d'aide à la concentration et à la productivité. Je réalise ce projet sur mon temps libre afin de monter en compétences et de créer un outil sur mesure pour mes propres besoins. Le projet est actuellement en cours de développement et une première version devrait bientôt voir le jour. Étant seul sur ce projet, je gère l'intégralité du processus : de la conception à la mise en production de l'application, en passant par le développement.",
    date: new Date("Jun 4, 2026 17:09:10"),
    languagesUsed: ["Electron", "Express", "React", "React Native"],
    toolsUsed: null,
    github: "https://github.com/clement-chretien94/management-app-frontend",
  },
  {
    title: "StrasEvent",
    _id: crypto.randomUUID(),
    image: strasevent,
    description:
      "Application de bureau et mobile dédiée à l'organisation et à la sécurisation d'événements. Développé en équipe de 6 personnes sur un semestre dans le cadre de mon BUT Informatique, ce projet m'a permis de concevoir et de développer l'intégralité de l'application mobile. En parallèle, je suis également intervenu ponctuellement sur le développement front-end.",
    date: new Date("January 15, 2026 17:09:10"),
    languagesUsed: ["Electron", "Express", "React", "React Native"],
    toolsUsed: null,
    github: "https://github.com/clement-chretien94/StrasEvent",
  },
  {
    title: "Operation Ice Station",
    _id: crypto.randomUUID(),
    image: operationIceStation,
    description:
      "Jeu sérieux de gestion de ressources en milieu polaire. Ce projet intensif a été réalisé sur trois jours, en équipe de 4 personnes, dans le cadre de mon BUT Informatique. J'ai participé à la conception des systèmes de base du jeu et au développement de l'application.",
    date: new Date("April 11, 2025 17:09:10"),
    languagesUsed: ["Electron", "React", "HTML", "CSS"],
    toolsUsed: null,
    github: "https://github.com/clement-chretien94/Operation-Ice-Station",
  },
  {
    title: "O'nof",
    _id: crypto.randomUUID(),
    image: onof,
    description:
      "Jeu sérieux de cartes éducatif conçu pour illustrer et vulgariser le processus de création d'une offre de formation universitaire. Réalisé en équipe de trois étudiants dans le cadre de mon BUT Informatique. Avec la double casquette de chef de projet et de développeur, j'ai piloté l'équipe et assuré l'intégration technique, tout en m'impliquant activement dans le game design et la conception physique des cartes.",
    date: new Date("December 20, 2024 08:33:52"),
    languagesUsed: ["Electron", "React", "HTML", "CSS"],
    toolsUsed: ["Figma"],
    github: "https://github.com/clement-chretien94/O-nof",
  },
];
