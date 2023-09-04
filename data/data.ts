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

interface IService {
  id: number;
  service_hash: string;
  service_image: string;
  service_icon: any;
  service_name: string;
  service_description: string;
  technologies: ITechnology[];
}
interface ITechnology {
  tech: string;
  tech_icon: any;
  tech_svg: any;
}

export const servicesList: IService[] = [
  {
    id: 1,
    service_hash: "product-strategy",
    service_image: "/assets/services/service_image_1.webp",
    service_icon: faBriefcase,
    service_name: "Product Strategy",
    service_description:
      "We understand our target customers needs, preferences, and pain points. We continuously iterate and improve your product based on customer feedback, market trends, and emerging technologies.",
    technologies: [
      { tech: "Jira", tech_icon: faJira, tech_svg: "" },
      { tech: "Trello", tech_icon: faTrello, tech_svg: "" },
      { tech: "Github", tech_icon: faGithub, tech_svg: "" },
      { tech: "Gitlab", tech_icon: faGitlab, tech_svg: "" },
    ],
  },
  {
    id: 2,
    service_hash: "ux-and-ui-design",
    service_image: "/assets/services/service_image_2.webp",
    service_icon: faBrush,
    service_name: "UX and UI Design",
    service_description:
      "We follow a series of steps that aim to create a user-friendly and visually appealing product",
    technologies: [
      { tech: "Bootstrap", tech_icon: faBootstrap, tech_svg: "" },
      { tech: "Css", tech_icon: faCss3, tech_svg: "" },
      {
        tech: "Tailwind",
        tech_icon: "",
        tech_svg: "/assets/icons/tailwind_css.svg",
      },
      { tech: "Scss", tech_icon: faSass, tech_svg: "" },
      { tech: "Figma", tech_icon: faFigma, tech_svg: "" },
    ],
  },
  {
    id: 3,
    service_hash: "front-end-development",
    service_image: "/assets/services/service_image_3.webp",
    service_icon: faCode,
    service_name: "Front-end Development",
    service_description:
      "Our job is to take the vision and design concept from the client and implement it through code and make sure the website looks good on all devices.",
    technologies: [
      { tech: "React", tech_icon: faReact, tech_svg: "" },
      { tech: "React Native", tech_icon: faReact, tech_svg: "" },
      { tech: "Angular", tech_icon: faAngular, tech_svg: "" },
      { tech: "Vue", tech_icon: faVuejs, tech_svg: "" },
      {
        tech: "Redux",
        tech_icon: faVuejs,
        tech_svg: "/assets/icons/redux.svg",
      },
    ],
  },
  {
    id: 4,
    service_hash: "back-end-development",
    service_image: "/assets/services/service_image_4.webp",
    service_icon: faServer,
    service_name: "Back-end Development",
    service_description:
      "We write back-end code that forms the backbone of any website or app",
    technologies: [
      { tech: "Node", tech_icon: faNodeJs, tech_svg: "" },
      { tech: "Nest", tech_icon: "", tech_svg: "/assets/icons/nestjs.svg" },
      {
        tech: "Express",
        tech_icon: "",
        tech_svg: "/assets/icons/express_js.svg",
      },
      { tech: "MongoDB", tech_icon: "", tech_svg: "/assets/icons/mongodb.svg" },
      { tech: "MySQL", tech_icon: faDatabase, tech_svg: "" },
      {
        tech: "Postgres",
        tech_icon: "",
        tech_svg: "/assets/icons/postgres_sql.svg",
      },
      { tech: "AWS", tech_icon: faAws, tech_svg: "" },
      { tech: "GCP", tech_icon: faGoogle, tech_svg: "" },
      { tech: "kafka", tech_icon: "", tech_svg: "/assets/icons/kafka.svg" },
      { tech: "Redis", tech_icon: "", tech_svg: "/assets/icons/redis.svg" },
      {
        tech: "Web-Automation",
        tech_icon: "",
        tech_svg: "/assets/icons/automation.svg",
      },
      {
        tech: "Web-Scraping",
        tech_icon: "",
        tech_svg: "/assets/icons/scraping.svg",
      },
    ],
  },
  {
    id: 5,
    service_hash: "data-analytics",
    service_image: "/assets/services/service_image_5.webp",
    service_icon: faChartSimple,
    service_name: "Data Analytics",
    service_description:
      "Turning data into analytics with the goal of discovering useful information, informing conclusions, and supporting decision-making.",
    technologies: [
      { tech: "Tableau", tech_icon: "", tech_svg: "/assets/icons/tableau.svg" },
      {
        tech: "Power BI",
        tech_icon: "",
        tech_svg: "/assets/icons/power_bi.svg",
      },
      { tech: "Looker", tech_icon: "", tech_svg: "/assets/icons/looker.svg" },
      {
        tech: "Quicksight",
        tech_icon: "",
        tech_svg: "/assets/icons/aws_quicksight.svg",
      },
      { tech: "Alteryx", tech_icon: "", tech_svg: "/assets/icons/alteryx.svg" },
      { tech: "Dataiku", tech_icon: "", tech_svg: "/assets/icons/dataiku.svg" },
      { tech: "Easymorph", tech_icon: "", tech_svg: "/assets/icons/easy.png" },
      {
        tech: "Qlikview",
        tech_icon: "",
        tech_svg: "/assets/icons/qlikview.svg",
      },
      { tech: "Python", tech_icon: faPython, tech_svg: "" },
    ],
  },
  {
    id: 6,
    service_hash: "game-development",
    service_image: "/assets/services/service_image_6.webp",
    service_icon: faGamepad,
    service_name: "Game Development",
    service_description: "Gaming Development and Virtual Reality.",
    technologies: [
      { tech: "Game Development", tech_icon: faSteamSymbol, tech_svg: "" },
      {
        tech: "Unreal Engine",
        tech_icon: "",
        tech_svg: "/assets/icons/unreal_engine.svg",
      },
      { tech: "Unity Engine", tech_icon: faUnity, tech_svg: "" },
      {
        tech: "AR, VR, MR Applications",
        tech_icon: faVrCardboard,
        tech_svg: "",
      },
    ],
  },
];

interface IClient {
  id: number;
  client_name: string;
  client_image: string;
}

export const clientList: IClient[] = [
  {
    id: 1,
    client_name: "LoveLocal",
    client_image: "/assets/clients/logo_love_local.webp",
  },
  {
    id: 2,
    client_name: "Hot Box Cookies",
    client_image: "/assets/clients/logo_hot_box_cookies.webp",
  },
  {
    id: 3,
    client_name: "OrderEX",
    client_image: "/assets/clients/logo_orderex.webp",
  },
  {
    id: 4,
    client_name: "Hungry Media",
    client_image: "/assets/clients/logo_hungry_media.webp",
  },
  {
    id: 5,
    client_name: "YGOIN",
    client_image: "/assets/clients/logo_ygoin.webp",
  },
  {
    id: 6,
    client_name: "SBTS group",
    client_image: "/assets/clients/logo_SBTS_group.webp",
  },
  {
    id: 7,
    client_name: "Fernsnpetals",
    client_image: "/assets/clients/logo_fnp.webp",
  },
];

interface IPortfolio {
  id: number;
  client_name: string;
  client_portfolio_image: string;
}

export const portfolioList: IPortfolio[] = [
  // { id: 1, client_name: "", client_portfolio_image: "/assets/portfolio/fnp_mobile.webp" },
  {
    id: 2,
    client_name: "Fernsnpetals",
    client_portfolio_image: "/assets/portfolio/fnp_website.webp",
  },
  // { id: 3, client_name: "", client_portfolio_image: "/assets/portfolio/fnp_app.webp" },
  // { id: 4, client_name: "", client_portfolio_image: "/assets/portfolio/momos_1.webp" },
  {
    id: 5,
    client_name: "momos",
    client_portfolio_image: "/assets/portfolio/momos_2.webp",
  },
  // { id: 6, client_name: "", client_portfolio_image: "/assets/portfolio/momos_3.webp" },
  {
    id: 7,
    client_name: "OrderEx",
    client_portfolio_image: "/assets/portfolio/orderex_1.webp",
  },
  // { id: 8, client_name: "", client_portfolio_image: "/assets/portfolio/orderex_2.webp" },
  // { id: 9, client_name: "", client_portfolio_image: "/assets/portfolio/orderex_3.webp" },
  // { id: 10, client_name: "", client_portfolio_image: "/assets/portfolio/prixa_1.webp" },
  // { id: 11, client_name: "", client_portfolio_image: "/assets/portfolio/prixa_2.webp" },
  // { id: 12, client_name: "", client_portfolio_image: "/assets/portfolio/prixa_3.webp" },
  {
    id: 13,
    client_name: "Raena",
    client_portfolio_image: "/assets/portfolio/raena_1.webp",
  },
  // { id: 14, client_name: "", client_portfolio_image: "/assets/portfolio/raena_2.webp" },
  {
    id: 15,
    client_name: "YGOIN",
    client_portfolio_image: "/assets/portfolio/ygoin_1.webp",
  },
  // { id: 16, client_name: "", client_portfolio_image: "/assets/portfolio/ygoin_2.webp" },
  {
    id: 17,
    client_name: "Tallhaven",
    client_portfolio_image: "/assets/portfolio/tallhaven.webp",
  },
];

export interface ITestimonial {
  id: number;
  name: string;
  text: string;
}

export const testimonials: ITestimonial[] = [
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
