import {
  faAngular,
  faAws,
  faBootstrap,
  faCss3,
  faFigma,
  faGithub,
  faGitlab,
  faGoogle,
  faJira,
  faNodeJs,
  faPython,
  faReact,
  faUnity,
  faVuejs,
  faSass,
  faSteamSymbol,
  faTrello,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faBrush,
  faCode,
  faServer,
  faChartSimple,
  faGamepad,
  faVrCardboard,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

export interface Service {
  id: number;
  hash: string;
  img: string;
  serviceIcon: any;
  service: string;
  description: string;
  technologies: technology[];
}
interface technology {
  tech: string;
  techIcon: any;
  techsvg: any;
}

export const services: Service[] = [
  {
    id: 1,
    hash: "product-strategy",
    img: "/assets/services/img1.png",
    serviceIcon: faBriefcase,
    service: "Product Strategy",
    description:
      "We understand our target customers needs, preferences, and pain points. We continuously iterate and improve your product based on customer feedback, market trends, and emerging technologies.",
    technologies: [
      {tech: "Jira", techIcon: faJira, techsvg: ""},
      {tech: "Trello", techIcon: faTrello, techsvg: ""},
      {tech: "Github", techIcon: faGithub, techsvg: ""},
      {tech: "Gitlab", techIcon: faGitlab, techsvg: ""},
    ],
  },
  {
    id: 2,
    hash: "ux-and-ui-design",
    img: "/assets/services/img2.png",
    serviceIcon: faBrush,
    service: "UX and UI Design",
    description:
      "We follow a series of steps that aim to create a user-friendly and visually appealing product",
    technologies: [
      { tech: "Bootstrap", techIcon: faBootstrap, techsvg: "" },
      { tech: "Css", techIcon: faCss3, techsvg: "" },
      {
        tech: "Tailwind",
        techIcon: "",
        techsvg: "/assets/icons/tailwind_css.svg",
      },
      { tech: "Scss", techIcon: faSass, techsvg: "" },
      { tech: "Figma", techIcon: faFigma, techsvg: "" },
    ],
  },
  {
    id: 3,
    hash: "front-end-development",
    img: "/assets/services/img3.png",
    serviceIcon: faCode,
    service: "Front-end Development",
    description:
      "Our job is to take the vision and design concept from the client and implement it through code and make sure the website looks good on all devices.",
    technologies: [
      { tech: "React", techIcon: faReact, techsvg: "" },
      { tech: "React Native", techIcon: faReact, techsvg: "" },
      { tech: "Angular", techIcon: faAngular, techsvg: "" },
      { tech: "Vue", techIcon: faVuejs, techsvg: "" },
      { tech: "Redux", techIcon: faVuejs, techsvg: "/assets/icons/redux.svg" },
    ],
  },
  {
    id: 4,
    hash: "back-end-development",
    img: "/assets/services/img4.png",
    serviceIcon: faServer,
    service: "Back-end Development",
    description:
      "We write back-end code that forms the backbone of any website or app",
    technologies: [
      { tech: "Node", techIcon: faNodeJs, techsvg: "" },
      { tech: "Nest", techIcon: "", techsvg: "/assets/icons/nestjs.svg" },
      { tech: "Express", techIcon: "", techsvg: "/assets/icons/express_js.svg" },
      { tech: "MongoDB", techIcon: "", techsvg: "/assets/icons/mongodb.svg" },
      { tech: "MySQL", techIcon: faDatabase, techsvg: "" },
      { tech: "Postgres", techIcon: "", techsvg: "/assets/icons/postgres_sql.svg" },
      { tech: "AWS", techIcon: faAws, techsvg: "" },
      { tech: "GCP", techIcon: faGoogle, techsvg: "" },
      { tech: "kafka", techIcon: "", techsvg: "/assets/icons/kafka.svg" },
      { tech: "Redis", techIcon: "", techsvg: "/assets/icons/redis.svg" },
      { tech: "Web-Automation", techIcon: "", techsvg: "/assets/icons/automation.svg" },
      { tech: "Web-Scraping", techIcon: "", techsvg: "/assets/icons/scraping.svg" },
    ],
  },
  {
    id: 5,
    hash: "data-analytics",
    img: "/assets/services/img5.png",
    serviceIcon: faChartSimple,
    service: "Data Analytics",
    description:
      "Turning data into analytics with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
    technologies: [
      { tech: "Tableau", techIcon: "", techsvg: "/assets/icons/tableau.svg" },
      { tech: "Power BI", techIcon: "", techsvg: "/assets/icons/power_bi.svg" },
      { tech: "Looker", techIcon: "", techsvg: "/assets/icons/looker.svg" },
      { tech: "Quicksight", techIcon: "", techsvg: "/assets/icons/aws_quicksight.svg" },
      { tech: "Alteryx", techIcon: "", techsvg: "/assets/icons/alteryx.svg" },
      { tech: "Dataiku", techIcon: "", techsvg: "/assets/icons/dataiku.svg" },
      { tech: "Easymorph", techIcon: "", techsvg: "/assets/icons/easy.png" },
      { tech: "Qlikview", techIcon: "", techsvg: "/assets/icons/qlikview.svg" },
      { tech: "Phython", techIcon: faPython, techsvg: "" },
    ],
  },
  {
    id: 6,
    hash: "game-development",
    img: "/assets/services/img6.png",
    serviceIcon: faGamepad,
    service: "Game Development",
    description: "Gaming Development and Virtual Reality.",
    technologies: [
      { tech: "Game Development", techIcon: faSteamSymbol, techsvg: "" },
      { tech: "Unreal", techIcon: "", techsvg: "/assets/icons/unreal_engine.svg" },
      { tech: "Unity", techIcon: faUnity, techsvg: "" },
      { tech: "AR, VR, MR Applications", techIcon: faVrCardboard, techsvg: "" },
    ],
  },
];

export interface Client {
  id: number;
  client: string;
}

export const clientList: Client[] = [
  { id: 1, client: "/assets/clients/logo_love_local.png" },
  { id: 2, client: "/assets/clients/logo_hot_box_cookies.png" },
  { id: 3, client: "/assets/clients/logo_orderex.png" },
  { id: 4, client: "/assets/clients/logo_hungry_media.png" },
  { id: 5, client: "/assets/clients/logo_ygoin.png" },
  { id: 6, client: "/assets/clients/logo_SBTS_group.png" },
  { id: 7, client: "/assets/clients/logo_fnp.png" },
];

export interface portfolio {
  id: number;
  img: string;
}

export const portfolioList: portfolio[] = [
  // { id: 1, img: "/assets/portfolio/fnp_mobile.png" },
  { id: 2, img: "/assets/portfolio/fnp_website.png" },
  // { id: 3, img: "/assets/portfolio/fnp_app.png" },
  // { id: 4, img: "/assets/portfolio/momos_1.png" },
  { id: 5, img: "/assets/portfolio/momos_2.png" },
  // { id: 6, img: "/assets/portfolio/momos_3.png" },
  { id: 7, img: "/assets/portfolio/orderex_1.png" },
  // { id: 8, img: "/assets/portfolio/orderex_2.png" },
  // { id: 9, img: "/assets/portfolio/orderex_3.png" },
  // { id: 10, img: "/assets/portfolio/prixa_1.png" },
  // { id: 11, img: "/assets/portfolio/prixa_2.png" },
  // { id: 12, img: "/assets/portfolio/prixa_3.png" },
  { id: 13, img: "/assets/portfolio/raena_1.png" },
  // { id: 14, img: "/assets/portfolio/raena_2.png" },
  { id: 15, img: "/assets/portfolio/ygoin_1.png" },
  // { id: 16, img: "/assets/portfolio/ygoin_2.png" },
  { id: 17, img: "/assets/portfolio/tallhaven.png" },
];

export interface customerOpinion {
  id: number;
  name: string;
  text: string;
}

export const customerOpinions: customerOpinion[] = [
  {
    id: 1,
    name: "Mohammed Kamil",
    text: "Code Amateur Team is very professional, punctual, super responsive and did the job exactly as requested. Thank you so much for a job well done.",
  },
  {
    id: 2,
    name: "LoveLocal",
    text: "Its been a delight working with Code Amateur Team. They understood the requirements precisely and went on lengths to make sure the work was taken care of to satisfaction.",
  },
  {
    id: 3,
    name: "RadioLogex",
    text: "Code Amateur Team is Intelligent and has an understanding of the project needs. Adapts to sudden changes in requirements, works cooperatively to troubleshoot and adjust, and delivers results until expectations are met.",
  },
  {
    id: 4,
    name: "Jonathan M",
    text: "Code Amateur Team worked tirelessly to ensure that our app was released with vast improvements from where we were previously. They worked 48 hours straight a few times to ensure that we could stay on schedule and maintain a level of quality.",
  },
  {
    id: 5,
    name: "Anonymous",
    text: "Extremely professional and cooperative with extensive knowledge. Code Amateur Team should be your go-to option without hesitation. Thanks for a job well done.",
  },
];
