const Person = (props) => {
      return (<div class="person-card">
        <p>Name: {props.name}</p>
        <p>Title: {props.title}</p>
        <p>Salary: {props.salary}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Spirit animal: {props.animal}</p>
      </div>
      );
    };
  
    export default Person;
  