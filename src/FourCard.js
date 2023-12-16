import React from "react";
import calculator from './images/icon-calculator.svg'
import karma from './images/icon-karma.svg'
import superviser from './images/icon-supervisor.svg'
import builder from './images/icon-team-builder.svg'
function FourCard() {
//   const data = [
//     {
//       cardtype: "Supervisor",
//       feature: "Monitors activity to identify project roadblocks",
//     },
//     {
//       cardtype: "Team Builder",
//       feature:
//         "Scans our talent network to create the optimal team for your project",
//     },
//     {
//       cardtype: "Karma",
//       feature: "Regularly evaluates our talent to ensure quality",
//     },
//     {
//       cardtype: "Calculator",
//       feature:
//         "Uses data from past projects to provide better delivery estimates",
//     },
//   ];
  return (
    <ul className="gridcontainer">
      <li className="  g-item g-child1">
        <h1>Supervisor</h1>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={superviser} alt="superviser" />
      </li>
      <li className=" g-item g-child2">
        <h1>Team Builder</h1>
        <p>Scans our talent network to create the optimal team for your project</p>
        <img src={builder} alt="builder" />
      </li>
      <li className=" g-item g-child3"> 
        <h1>Karma</h1>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src={karma} alt="karma" />
      </li>
      <li className=" g-item g-child4">
        <h1>Calculator</h1>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src={calculator} alt="calculator" />
      </li>
    </ul>
  );
}

export default FourCard;
