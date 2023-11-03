import { Link } from "react-router-dom";
import { useState } from "react";
import useRestronents from "../../utility/useRestronents";
import RestroCard from "./RestroCard";

const CardBody = () => {
  const [search, setSearch] = useState("");
  const restronentList = useRestronents();

  if (restronentList === null) {
    return <h1>Loading</h1>;
  }
  console.log(restronentList);

  const { restaurants } =
    restronentList?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="lg:mx-10 lg:mt-20">
      <h1 className="ml-10 text-xl font-bold font-sans">
        Top restaurant chains in Pune
      </h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 ">
        {restaurants.map((restronent, i) => (
          <Link to={"restronent/" + restronent.info.id} key={i}>
            <RestroCard info={restronent?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
