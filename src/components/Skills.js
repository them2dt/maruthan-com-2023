import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Skills({ dragEnabled }) {
  const dragRef = useRef(null);
  const skills = [
    { skill: "HTML", status: "secondary" },
    { skill: "CSS", status: "secondary" },
    { skill: "PHP", status: "secondary" },
    { skill: "JavaScript", status: "primary" },
    { skill: "TypeScript", status: "secondary" },
    { skill: "Node.js", status: "primary" },
    { skill: "React.js", status: "secondary" },
    { skill: "Next.js", status: "primary" },
    { skill: "Rust", status: "primary" },
    { skill: "Web3.js", status: "primary" },
    { skill: "Anchor-lang", status: "primary" },
    { skill: "Framer motion", status: "primary" },
    { skill: "Dart", status: "secondary" },
    { skill: "Flutter", status: "secondary" },
    { skill: "Wordpress", status: "secondary" },
    { skill: "Firebase", status: "secondary" },
    { skill: "Vercel", status: "primary" },
    { skill: "MySQL", status: "secondary" },
    { skill: "Java", status: "secondary" },
    { skill: "Python", status: "secondary" },
    { skill: "Adobe Illustrator", status: "secondary" },
    { skill: "Adobe Express", status: "secondary" },
    { skill: "Adobe Fresco", status: "secondary" },
    { skill: "Figma", status: "secondary" },
    { skill: "Microsoft Word", status: "secondary" },
    { skill: "Microsoft Excel", status: "secondary" },
    { skill: "Microsoft Visio", status: "secondary" },
    { skill: "Microsoft Powerpoint", status: "secondary" },
  ];

  return (
    <div className="skillset-content-carousel-wrapper">
      <div className="skillset-content-carousel" ref={dragRef}>
        {skills.map((e) => (
          <motion.button drag={dragEnabled} className={"skill " + e.status}>
            {e.skill}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
