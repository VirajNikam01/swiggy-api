import { useParams } from "react-router-dom";
import useMenuInfo from "../../utility/useMenuInfo";
import InfoList from "./InfoList";
import {useState} from 'react'

const RestronentInfo = () => {
  const[collapse, setCollapse] = useState(true)
  const { resId } = useParams();

  const resInfo = useMenuInfo(resId);

  if (resInfo === null) return <h1>Loading...</h1>;

  const collapsebtn = ()=>{
    setCollapse(!collapse)
  }


  // const { cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const FilteredRestro = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>(
    c.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  ))

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);


  return (
    <div>
      {FilteredRestro.map((menu, i) => (
          <div key={i}
          className="relative shadow-md my-10 lg:w-4/5 m-auto  px-10 py-5"
          >
              <h1 className="font-bold text-2xl my-6 cursor-pointer"
              onClick={collapsebtn}
              >{menu.card.card.title}</h1>
             {collapse && <InfoList data={menu.card.card.itemCards} />}
              
          </div>
      ))}
    </div>
  );
};

export default RestronentInfo;
