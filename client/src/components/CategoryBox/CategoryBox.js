import { withRouter } from "react-router-dom";
import "./CategoryBox.css";

const CategoryBox = (props) => {
   const goToCategory = (path) => {
      props.history.push(path);
   };

   return (
      <div
         className={`CategoryBox ${props.active ? "active" : null}`}
         onClick={() => goToCategory(props.path)}
      >
         <p>{props.name}</p>
      </div>
   );
};

export default withRouter(CategoryBox);
