'use client';
import Image from 'next/image';
import { useState } from 'react';
import AccordionItem from './AccordianItem';
import JobForm from './JobForm';

import { jobs } from '@/constants/jobs';
import hiring from '@/public/assets/images/hiring.webp';



export default function CareersPage() {
  const [jobSelected, setJobSelected] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [clicked, setClicked] = useState<number>(0);

  const handleToggle = (index: any) => {
    if (clicked === index) {
      return setClicked(0);
    }
    setClicked(index);
  };

  return (
    <div>
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
