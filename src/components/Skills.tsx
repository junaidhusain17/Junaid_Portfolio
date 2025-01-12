import React from "react";
import { FaAws } from "react-icons/fa";
import {
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMui,
} from "react-icons/si";

type ISkills = {
  icon: React.ReactNode;
  name: string;
};
const skills: ISkills[] = [
  {
    icon: <SiReact />,
    name: "React",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
  },
  {
    icon: <SiMongodb />,
    name: "MongoDB",
  },
  {
    icon: <SiGraphql />,
    name: "GraphQL",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiMui />,
    name: "Material UI",
  },
  {
    icon: <FaAws />,
    name: "AWS",
  },
];

function Skills() {
  return (
    <div className="flex justify-center gap-4 mt-4 text-4xl flex-wrap">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          {skill.icon}
          <p className="text-xs mt-1 opacity-70">{skill.name}</p>
        </div>
      ))}
    </div>
  );
}
export default Skills;
