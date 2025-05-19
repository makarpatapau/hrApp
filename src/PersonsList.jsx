import {persons} from "./personsData";
import PersonCard from "./PersonCard";

const PersonsList = () => {
    return (
        <div>
            {persons.map(el =>(<PersonCard key={el.id} {...el}/>))}
        </div>
    )
}

export default PersonsList;


// NEED TO STILL COMPLETE 4, 5, 7, 8