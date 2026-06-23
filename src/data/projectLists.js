import onof from "../assets/images/projetImage/onof.png";
import operationIceStation from "../assets/images/projetImage/operationIceStation.png";
import strasevent from "../assets/images/projetImage/strasevent.png";

export const data = [
  {
    title: "FocusFlow",
    _id: crypto.randomUUID(),
    image: strasevent,
    description:
      "Un application web d'aide à la concentration et à la productivité.",
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
      "Une application de bureau et mobile d'organisation d'événements et de sécurisation d'événements.",
    date: new Date("January 15, 2026 17:09:10"),
    languagesUsed: ["Electron", "Express", "React", "React Native"],
    toolsUsed: null,
    github: "https://github.com/clement-chretien94/nidhoggr",
  },
  {
    title: "Operation Ice Station",
    _id: crypto.randomUUID(),
    image: operationIceStation,
    description:
      "Une jeu sérieux de gestion de resources dans l'environnement polaire.",
    date: new Date("April 11, 2025 17:09:10"),
    languagesUsed: ["Electron", "React", "HTML", "CSS"],
    toolsUsed: null,
    github: "https://github.com/clement-chretien94/nidhoggr",
  },
  {
    title: "O'nof",
    _id: crypto.randomUUID(),
    image: onof,
    description:
      "Un jeu sérieux de carte permettant de comprendre les processus de création d'une offre de formation universitaire.",
    date: new Date("December 20, 2024 08:33:52"),
    languagesUsed: ["Electron", "React", "HTML", "CSS"],
    toolsUsed: ["Figma"],
    github: "https://github.com/clement-chretien94/onof",
  },
];
