import Link from "next/link";

interface ILink {
  id: number;
  name: string;
}

export default function Footer(): JSX.Element {
  const links: ILink[] = [
    { id: 1, name: "LinkedIn" },
    { id: 2, name: "Facebook" },
    { id: 3, name: "Twitter" },
    { id: 4, name: "Instagram" },
  ];

  return (
    <div className="py-8 px-4 sm:p-20">
      <div className="text-center">
        <h1 className="footer-heading">GET IN TOUCH</h1>
        <p className="my-5 text-xl">
          Plot No D199, 7th Floor, 8B, Industrial Area, Sector 74, Sahibzada
          Ajit Singh Nagar, Punjab 160071
        </p>
        <div className="flex-center flex-col sm:flex-row">
          <div className="footer-button">sales@codeamateur.com</div>
          <div className="footer-button">+917889178080</div>
        </div>
      </div>
      <hr className="footer-divider"></hr>
      <div className="flex-center flex-col">
        <h1 className="footer-linkheading">Follow Us</h1>
        <div className="flex flex-wrap justify-center">
          {links.map((items) => (
            <Link key={items.id} href={""} className="footer-link">
              {items.name}
            </Link>
          ))}
        </div>
      </div>
      <hr className="footer-divider"></hr>
      <p className="footer-description">
        © 2023 by Code Amateurs | All Rights Reserved
      </p>
    </div>
  );
}
