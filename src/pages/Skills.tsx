import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout.tsx";
import MainArea from "../layouts/MainArea.tsx";
import IndividualSkills from "../components/skills/IndividualSkills.tsx";
import OrganizationnalSkills from "../components/skills/OrganizationalSkills.tsx";
import InterpersonalSkills from "../components/skills/InterpersonalSkills.tsx"
import PersonnalSkills from "../components/skills/PersonalSkills.tsx";

const Skills = () => {
  const [activePage, setActivePage] = useState(0);

  const pages = [
    <IndividualSkills key="individual-skills" />,
    <OrganizationnalSkills key="Organisational-skills" />,
    <InterpersonalSkills key="Interpersonal-skills" />,
    <PersonnalSkills key="Personal-skills" />,
  ];

  const handleNext = () => {
    setActivePage((prev) => (prev + 1) % pages.length);
  };

  const handlePrevious = () => {
    setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <>
      <MainLayout children={""} />
      <MainArea > 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="isolate inline-flex rounded-md shadow-sm">
          <button onClick={handlePrevious} disabled={activePage === 0} className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
            <span className="sr-only">
              Précédent
            </span>
            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5"/>
          </button>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {pages[activePage]}
            </div>
          <button onClick={handleNext} disabled={activePage === pages.length - 1} className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10">
            <span className="sr-only">
              Suivant
            </span>
            <ChevronRightIcon aria-hidden="true" className="h-5 w-5"/>
          </button>
          </span>
        </div>
      </MainArea>
    </>
  );
};

export default Skills;