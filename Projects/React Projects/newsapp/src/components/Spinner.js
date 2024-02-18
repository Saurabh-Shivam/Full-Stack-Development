// import React, { Component } from "react";
// import loading from "./loading.gif";

// export default class Spinner extends Component {
//   render() {
//     return (
//       <div>
//         <img src={loading} alt="loading" />
//       </div>
//     );
//   }
// }

import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div className="spinner-border my-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
