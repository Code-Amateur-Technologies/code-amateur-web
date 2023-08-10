export interface Service {
  id: number;
  service: string;
  description: string;
  serviceIcon: string;
  img: string;
}

export const services: Service[] = [
  {
    id: 1, 
    service: "Product Strategy",
    description:
      "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
    serviceIcon: "/assets/icons/service_product.svg",
    img: "/assets/slideshow/img1.png"
  },
  {
    id: 2,
    service: "UX and UI Design",
    description:
      "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
    serviceIcon: "/assets/icons/service_UX.svg",
    img: "/assets/slideshow/img2.png"
  },
  {
    id: 3,
    service: "Front-end Development",
    description:
      "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
    serviceIcon: "/assets/icons/service_frontend.svg",
    img: "/assets/slideshow/img3.png"
  },
  {
    id: 4,
    service: "Back-end Development",
    description:
      "Fermentum natoque semper suscipit vulputate phasellus nibh augue.",
    serviceIcon: "/assets/icons/service_backend.svg",
    img: "/assets/slideshow/img4.png"
  },
];

export interface AboutBox {
  id: number;
  value: string;
  text: string;
}

export const aboutBox: AboutBox[] = [
  {
    id: 1,
    value: "51200",
    text: "Viverra in pellentesque massa justo commodo. Dignissim id egestastridad es lare",
  },
  {
    id: 2,
    value: "99%",
    text: "Morbi mollis scelerisque dictumst enim odio rhoncus pellentesque esterum viverra.",
  },
  {
    id: 3,
    value: "96",
    text: "Congue porttitor et convallis leo lectus lobortis lorem habitantultrices loboritor.",
  },
];

export interface Client {
  id: number;
  client: string;
}

export const clientList: Client[] = [
  { id: 1, client: "/assets/clients/logo_love_local.png" },
  { id: 2, client: "/assets/clients/logo_fnp.png" },
  { id: 3, client: "/assets/clients/logo_orderex.png" },
  { id: 4, client: "/assets/clients/logo_hungry_media.png" },
  { id: 5, client: "/assets/clients/logo_ygoin.png" },
  { id: 6, client: "/assets/clients/logo_SBTS_group.png" },
  { id: 7, client: "/assets/clients/logo_hot_box_cookies.png" },
];

export interface Opinion {
  id: number;
  name: string;
  text: string;
}

export const customerOpinions: Opinion[] = [
  {
    id: 1,
    name: "John Smith",
    text: "first Fermentum natoque semper suscipit vulputate phasellus nibh augue. Non pharetra quisque ligula inceptos magnis praesent rhoncus. Vehicula sem augue venenatis mollis torquent etiam ornare curae est dis.",
  },
  {
    id: 2,
    name: "Carlos Doe",
    text: "second Elementum lacinia tempus vel praesent elit cubilia etiam aptent urna metus venenatis. Finibus dictum enim habitasse diam venenatis. Congue augue inceptos ornare neque dolor non pulvinar ultricies.",
  },
  {
    id: 3,
    name: "Michal Scofrano",
    text: "third Consectetuer si ultrices nunc nostra metus dictum arcu ante facilisi eu. Sagittis conubia nunc odio vivamus dictum faucibus. Felis platea donec malesuada ut aliquam consequat vehicula sapien turpis.",
  },
  {
    id: 4,
    name: "caroline Lawrence",
    text: "fourth Egestas maximus mattis orci malesuada mollis sed morbi venenatis pede. Adipiscing non convallis nam torquent blandit quis. Hendrerit euismod condimentum lectus conubia vitae leo ultricies tortor nullam.",
  },
  {
    id: 5,
    name: "Marge Biel",
    text: "fifth Egestas molestie condimentum venenatis velit lacus inceptos class quis. Bibendum praesent eros ornare hac cubilia interdum egestas sociosqu volutpat lacus urna. Elit risus iaculis vivamus ipsum curabitur.",
  },
];
