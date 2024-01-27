
# To understand state management and how useState hook works. Especially the asynchronous behaviour of setCount function. Here is the breif Explanation


### Task 1 --> Your task is to explain why the console.log shows the older value of count from the following Code Snippet 

```
import React from 'react'
function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(count); // You will see the older value of count in console
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
```

### Ans - 
The reason why "Console.log(count)" shows the older value of COUNT is because of the asynchronous nature of state updates in React.
When we call "setCount(count+1)" React does an update to the state with the new value of "count+1", this update does not happen immediately. it collects all the changes and batches state updates and updates it in the optimized way.

so when we log the "count" immediately after "setCount", React has not applied to the state update. The state update is scheduled, and React continues with its rendering cycle. that's why, the console.log(count) statement prints the old value of count.

To solve this we can use useEffect 
because useEffect Hook only runs after rendering is finished only then it will catch the count and will console it 
### Here is the code solution>>
```
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
      console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

```

# Taks 2 --> // Your task is to explain why count value is not updated to 3 as expected from the following code snippet

```
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
		console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
```
### Ans - 
The reason the "count" value is not update to 3 as expected is due to the asynchronous nature of the 'setCount' function in react.
this change doesn't happen immediately, it takes a little time and
React kind of groups all the updates together and updates the state in one go.

This happens like - 
1. setCount(count + 1) goes to queue > gets the old data > holds the new data,
2. setCount(count + 1) goes to queue > gets the old data which is still 0 > holds the new data,
3. setCount(count + 1) goes to queue > gets the old data which is still 0 > holds the new data,

after that it compares the old data which is (0) with the new data which is (100) and returns it.

To solve this we have to use callback function inside setCount state and the data we have to pass in the argument is previous the we can calculate it . 
Here is the code example

```
import React from 'react'

function App() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  return (
    <div>
      <p>Button is clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App
```
This maybe not the correct words but i have answerd it with my understanding till now, Thank you