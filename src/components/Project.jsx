import React from 'react';

function Project({ title, img, deployed, repo }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt={title} />
      <a href={deployed}>Deployed</a>
      <a href={repo}>Repo</a>
    </div>
  );
}

export default Project;

// export default function Project() {
//     return (
//       <div>
//         <h1>Project Card</h1>
//         <p>
//           Project card goes here.
//         </p>
//       </div>
//     );
//   }
  