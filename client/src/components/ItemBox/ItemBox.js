import { withRouter } from "react-router-dom";
import "./ItemBox.css";
import Logo from "../../assets/mytel.png";

const ItemBox = (props) => {
   const goToItemDetail = () => {
      props.history.push(`/${props.params}/abcdef`);
   };
   return (
      <div className="ItemBox" onClick={goToItemDetail}>
         <div className="ItemImg">
            <img src={Logo} alt="Mytel" />
         </div>
         <div className="ItemName">Mytel</div>
      </div>
   );
};

export default withRouter(ItemBox);
