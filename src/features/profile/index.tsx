import React, { useState } from "react";

// Define props interface (optional but recommended)
interface GreetingProps {
  name?: string;
}

// Define your functional component
const Profile: React.FC<GreetingProps> = ({ name }) => {
  // useState hook to manage state
  const [count, setCount] = useState<number>(0);

  // Event handler function
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Profile;
