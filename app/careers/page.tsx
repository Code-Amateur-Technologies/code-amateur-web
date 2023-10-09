'use client';
import Image from 'next/image';
import { useState } from 'react';
import AccordionItem from '@/components/carrers/AccordianItem';
import JobForm from '@/components/carrers/JobForm';
import { careersPage } from '@/constants/text';
import { jobs } from '@/constants/jobs';
import hiring from '@/public/assets/images/hiring.webp';

const quotes = [
  {
    id: 1,
    quote:
      'Acquiring the right talent is the most important key to growth. Hiring was and still is the most important thing we do.',
    author: 'Marc Benioff',
  },
  {
    id: 2,
    quote:
      'The secret of my success is that we have gone to exceptional lengths to hire the best people in the world.',
    author: 'Steve Jobs',
  },
  {
    id: 3,
    quote:
      'You can dream, create, design and build the most wonderful place in the world…but it requires people to make the dream a reality.',
    author: 'Walt Disney',
  },
];

export default function Careers() {
  const [jobSelected, setJobSelected] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [clicked, setClicked] = useState<number>();

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return (
    <div className="py-8 px-4 lg:p-20 flex flex-col gap-10 text-gunmetal">
      <h1 className="carrer-heading">{careersPage.careersHeading}</h1>
      <section className="slideset">
        {quotes.map((item) => (
          <div key={item.id} className="flex flex-col">
            <p className="">{item.quote}</p>
            <p className="w-fit self-end text-sm">-{item.author}</p>
          </div>
        ))}
      </section>
      <section className="careers-listings-section">
        <ul className="careers-accordion">
          {jobs.map((job, index) => (
            <AccordionItem
              key={index}
              job={job}
              active={clicked === job.id}
              onToggle={() => handleToggle(job.id)}
              setJobSelected={setJobSelected}
              setShowForm={setShowForm}
            />
          ))}
        </ul>
      </section>
      {showForm && (
        <section className={`job-form-modal ${showForm ? 'flex' : 'hidden'}`}>
          <JobForm
            showForm={showForm}
            setShowForm={setShowForm}
            jobSelected={jobSelected}
          />
        </section>
      )}
    </div>
  );
}
