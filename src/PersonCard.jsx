const PersonCard = (props) => {
      return (<div class="person-card">
        <p>Name: {props.name}</p>
        <p>Title: {props.title}</p>
        <p>Salary: € {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Animal: {animalToEmoji(props.animal)}</p>
        <p>Start date: {props.startDate}</p>
        <p>Location: {props.location}</p>
        <p>Department: {props.department}</p>
        <p>Skills: {props.skills}</p>
        <h3>Years worked: {calculateYearsWorked(props.startDate)}</h3>

{calculateYearsWorked(props.startDate) % 5 === 0 && calculateYearsWorked(props.startDate) !== 0 && (
  <p>🎉 Schedule recognition meeting.</p>
)}

{calculateYearsWorked(props.startDate) < 0.5 && (
  <p>🔔 Schedule probation review.</p>
)}
      </div>
      );
    };


  //Calculating the amount of years in the company
  const calculateYearsWorked = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
  
    let years = now.getFullYear() - start.getFullYear();
  
    // Check if the current month/day is before the start month/day
    const hasNotHadAnniversaryThisYear =
      now.getMonth() < start.getMonth() ||
      (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  
    if (hasNotHadAnniversaryThisYear) {
      years--;
    }
  
    return years;
  };


  //Displaying the emojes for animals
  function animalToEmoji(animal) {
  const map = {
    cat: "🐱",
    dog: "🐶",
    bear: "🐻",
    eagle: "🦅",
    fox: "🦊",
    wolf: "🐺",
    snake: "🐍",
    panther: "🐆",
    raven: "🐦‍⬛",
    owl: "🦉",
  };

  return map[animal.toLowerCase()] || "❓";
}

  
    export default PersonCard;