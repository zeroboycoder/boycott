import "./CateBox.css";

const CateBox = (props) => {
   return (
      <div className="CateBox" onClick={props.clicked}>
         {props.icon}
         <p className="CateBox__Name">{props.name}</p>
      </div>
   );
};

export default CateBox;
