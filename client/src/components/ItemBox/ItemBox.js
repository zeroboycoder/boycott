import "./ItemBox.css";
import Img from "../../assets/mytel.png";

const ItemBox = (props) => {
   return (
      <div className="ItemBox">
         <div className="ItemImg">
            <img src={Img} alt="Mytel" />
         </div>
         <div className="ItemName">Mytel</div>
      </div>
   );
};

ItemBox.propTypes = {
   img: String,
   name: String,
};

export default ItemBox;
