"use client";
import { useEffect, useState } from "react";
import { RightArrow } from "@/utils/customIcons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ListingsAccordian(props: {
  position: string;
  description: string;
  setJobSelected: (arg0: string) => void;
  setShowForm: (arg0: boolean) => void;
}) {
  const [isActive, setIsActive] = useState(false);
  const handleSelect = () => {
    props.setJobSelected(props.position);
    props.setShowForm(true);
  };
  return (
    <div className="">
      <div
        className="p-5 border-b-2 flex-between cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-xl md:text-3xl">{props.position}</div>
        {isActive ? (
          <FontAwesomeIcon icon={faChevronDown} rotation={180} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </div>
      {isActive && (
        <div className="p-5 ">
          {props.description}
          <button onClick={() => handleSelect()} className="dark-button gap-2">
            <p>Apply</p>
            <RightArrow />
          </button>
        </div>
      )}
    </div>
  );
}
