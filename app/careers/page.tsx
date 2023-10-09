import type { Metadata } from 'next';
import CareersPage from '@/components/carrers/CareersPage';
import { careersPage } from '@/constants/text';
import { hiringQuotes } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Code Amateur | Careers',
};

export default function Careers() {
  return (
    <div className="py-8 px-4 lg:p-20 flex flex-col gap-10 text-gunmetal">
      <h1 className="carrer-heading">{careersPage.careersHeading}</h1>
      <section className="slideset">
        {hiringQuotes.map((item) => (
          <div key={item.id} className="flex flex-col">
            <p className="">{item.quote}</p>
            <p className="w-fit self-end text-sm">-{item.author}</p>
          </div>
        ))}
      </section>
      <CareersPage />
    </div>
  );
}
