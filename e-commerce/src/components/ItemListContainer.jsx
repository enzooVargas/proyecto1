/* eslint-disable react/prop-types */
import "./ItemListContainer.css"
export default function ItemListContainer({greeting}){
  
    return(
       <div>
        <h1 className="greetingH1">{greeting}</h1>
       </div>
    )
}