import {useState} from 'react';

const Home = () => {

    // let name = "Mary"
    const [name, setName] = useState("Mary");
    const [age, setAge] = useState(35)
    
    const handleClick = () => {
     setName("Kevin");
     setAge(44)
    }

    const handleClickAgain = (name, e) => {
        console.log("hello " + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("Mary", e)}>Click me again</button>
        </div>
     );
}
 
export default Home;