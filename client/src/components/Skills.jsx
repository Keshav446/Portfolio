
// import "./Skills.css";

// const skillGroups = [
//   {
//     number: "01",
//     title: "Full Stack Development",
//     description: "Building complete web applications",
//     icon: "</>",
//     skills: [
//       { name: "HTML & CSS", level: "Comfortable", value: 80 },
//       { name: "JavaScript", level: "Intermediate", value: 70 },
//       { name: "React.js", level: "Intermediate", value: 70 },
//       { name: "Node.js", level: "Learning", value: 50 },
//       { name: "Express.js", level: "Learning", value: 45 },
//     ],
//   },
//   {
//     number: "02",
//     title: "Data Structures & Algorithms",
//     description: "Logic, efficiency and problem solving",
//     icon: "⌘",
//     skills: [
//       { name: "Data Structures", level: "Practicing", value: 65 },
//       { name: "Algorithms", level: "Practicing", value: 60 },
//       { name: "Problem Solving", level: "Practicing", value: 65 },
//       { name: "Time & Space Complexity", level: "Learning", value: 55 },
//     ],
//   },
//   {
//     number: "03",
//     title: "Core Computer Science",
//     description: "Understanding the fundamentals",
//     icon: "◈",
//     skills: [
//       { name: "Operating Systems", level: "Learning", value: 55 },
//       { name: "Computer Networks", level: "Learning", value: 55 },
//       { name: "DBMS Concepts", level: "Intermediate", value: 65 },
//     ],
//   },
//   {
//     number: "04",
//     title: "Databases",
//     description: "Data modeling and management",
//     icon: "▤",
//     skills: [
//       { name: "SQL", level: "Intermediate", value: 70 },
//       { name: "MongoDB", level: "Learning", value: 50 },
//     ],
//   },
//   {
//     number: "05",
//     title: "Programming Languages",
//     description: "Writing efficient and maintainable code",
//     icon: "{ }",
//     skills: [
//       { name: "C++", level: "Practicing", value: 70 },
//       { name: "C", level: "Comfortable", value: 65 },
//       { name: "Python", level: "Learning", value: 55 },
//     ],
//   },
// ];

// function Skills() {
//   return (
//     <section className="skills-section" id="skills">
//       <div className="skills-container">
//         <div className="skills-heading">
//           <span className="skills-eyebrow">
//             MY TECHNICAL TOOLKIT
//           </span>

//           <h2>
//             Skills & <span>Expertise.</span>
//           </h2>

//           <p>
//             Technologies, problem-solving techniques, and
//             computer science fundamentals I'm learning and
//             using to build better software.
//           </p>
//         </div>

//         <div className="skills-grid">
//           {skillGroups.map((group) => (
//             <article className="skill-card" key={group.number}>
//               <div className="skill-card-header">
//                 <div className="skill-icon">
//                   {group.icon}
//                 </div>

//                 <span className="skill-number">
//                   {group.number}
//                 </span>
//               </div>

//               <h3>{group.title}</h3>

//               <p className="skill-card-description">
//                 {group.description}
//               </p>

//               <div className="skill-list">
//                 {group.skills.map((skill) => (
//                   <div className="skill-item" key={skill.name}>
//                     <div className="skill-item-info">
//                       <span className="skill-name">
//                         {skill.name}
//                       </span>

//                       <span className="skill-level">
//                         {skill.level}
//                       </span>
//                     </div>

//                     <div
//                       className="skill-progress"
//                       role="progressbar"
//                       aria-label={`${skill.name} proficiency`}
//                       aria-valuemin={0}
//                       aria-valuemax={100}
//                       aria-valuenow={skill.value}
//                     >
//                       <div
//                         className="skill-progress-fill"
//                         style={{
//                           "--skill-level": `${skill.value}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="skills-footer">
//           <span className="skills-footer-dot" />

//           <p>
//             Always learning. Always building. Always improving.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Development",
    description: "Building server-side applications and REST APIs.",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Programming & DSA",
    description: "Developing logical thinking and problem-solving skills.",
    skills: ["C", "C++", "Python", "Data Structures", "Algorithms"],
  },
  {
    title: "Databases",
    description: "Working with structured and NoSQL databases.",
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Core Computer Science",
    description: "Understanding the fundamentals of computer systems.",
    skills: ["DBMS", "Operating Systems", "Computer Networks"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-eyebrow">
            WHAT I WORK WITH
          </span>

          <h2>
            Skills & <span>Expertise.</span>
          </h2>

          <p>
            My technical toolkit includes web development,
            programming, databases, and computer science
            fundamentals. I'm continuously learning and
            improving by building projects and solving problems.
          </p>
        </div>

        <div className="skills-content">
          {skillGroups.map((group, index) => (
            <div className="skills-row" key={group.title}>
              <div className="skills-category">
                <span className="skills-index">
                  0{index + 1}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skills-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
