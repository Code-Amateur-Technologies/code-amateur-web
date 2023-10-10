'use client';
import { MouseEventHandler, useRef } from 'react';
import { RightArrow } from '@/utils/customIcons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IAccordianProps {
  job: { position: string; description: string };
  onToggle: MouseEventHandler<HTMLButtonElement>;
  active: boolean;
  setJobSelected: (arg0: string) => void;
  setShowForm: (arg0: boolean) => void;
}

const AccordionItem = (props: IAccordianProps) => {
  const accordianRef = useRef<HTMLDivElement>(null);
  const { position, description } = props.job;

  const handleSelect = () => {
    props.setJobSelected(position);
    props.setShowForm(true);
  };

  return (
    <li className="border-b-2">
      <button className="careers-acccordian-toggle" onClick={props.onToggle}>
        {position}
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className={`text-xl transition-all duration-200 ease-linear ${
            props.active ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        ref={accordianRef}
        className="careers-accordian-content-wrapper"
        style={
          props.active
            ? { height: accordianRef.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="p-5 bg-gray-100">
          <p className="py-5 text-xl">{description}</p>
          <button onClick={() => handleSelect()} className="dark-button gap-2">
            <p>apply</p>
            <RightArrow />
          </button>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
