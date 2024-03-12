import SectionHeading from "./Utility/SectionHeading";
import Persons from "./Team/Persons";

function Team() {
  return (
    <div
      className="bg-neutral-100 flex flex-col items-center w-full py-8 px-4"
      id="team"
    >
      <SectionHeading title="NASZ ZESPÓŁ"></SectionHeading>
      <Persons></Persons>
    </div>
  );
}

export default Team;
