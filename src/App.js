// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 1. Class Component Example
import React, { Component } from 'react';
function ClassExample() {
  class Welcome extends Component {
    render() {
      return (
        <div className="class-example">
          <h2>Hello, {this.props.name}!</h2>
          <p>This is a class component example.</p>
        </div>
      );
    }
  }
}


// 2. JSX Component Example

function JSXExample() {
  const name = "Rajendra";
  const age = 21;
  const isStudent = true;
  const role = "Developer";

  return (
    <div className='jsx-example'>
      <h3> Name: {name}</h3>
      <p> Age: {age}</p>
      <p> Next year: {age + 1}</p>
      <p> {isStudent ? "Is a Student" : "Is not a Student"}</p>
      <p> Role: {role}</p>
      <div style={{ color: 'lightblue', fontFamily: 'sans-serif', fontSize: '20px' }}>
        This is a styled div using inline CSS.
      </div>
    </div>

  );
}

// 3. Props Component Example
function UserCard(props) {
  return (
    <div className="user-card">
      <h3>{props.name}</h3>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>Role:</strong> <span className="role-tag">{props.role}</span></p>
    </div>
  );
}

function PropsExample() {
  return (
    <div className="practice-area">
      <UserCard className="user-card"
        name="Rajendra Bist"
        age={21}
        city="Dhangadhi"
        role="Full-Stack Devloper"
      />
      <UserCard className="user-card"
        name="Krishna kumar"
        age={22}
        city="Delhi"
        role="Devloper"
      />
      <UserCard className="user-card"
        name="Nabin Thapa"
        age={23}
        city="Kathmandu"
        role="Software Engineer"
      />
    </div>
  );
}

function ButtonExample({ text = "Click Me", color = "blue" }) {
  return (
    <div className="button-example">
      <button className="btn" style={{ backgroundColor: color }}>
        {text}
      </button>
    </div>
  );
}

// 4. State Component Examples
function Counter() {
  // [currentValue, functionToUpdateValue] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div className="practice-area">
      <h2>Count: {count}</h2>
      <div className="button-example">
        <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

function UserInput() {
  const [name, setName] = useState('');

  return (
    <div className="practice-area" style={{ marginTop: '20px' }}>
      <h3>Input State Example</h3>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
      <p>Your Name: <strong>{name}</strong></p>
    </div>
  );
}

// Multiple State Variables 

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, age });
    alert(`Form Submitted: ${name}`);
    setName('');
    setEmail('');
    setAge('');
  }

  return (
    <div className="practice-area user-form-container">
      <h3>User Registration Form</h3>
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="btn btn-submit">Submit</button>
      </form>
    </div>
  );
}

// React Logo SVG Component
function ReactLogo() {
  return (
    <svg
      className="react-logo"
      viewBox="0 0 841.9 595.3"
      width="50"
      height="50"
      style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '10px' }}
    >
      <g fill="#61DAFB">
        <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
        <circle cx="420.9" cy="296.5" r="45.7" />
        <path d="M520.5 78.1z" />
      </g>
    </svg>
  );
}

// State With Objects

function UserProfile() {

  const [user, setUser] = useState({
    name: "Rajendra Bist",
    age: 21,
    city: "Dhangadhi",
    role: "Full-Stack Devloper"
  });

  const updateCity = () => {
    setUser({
      city: "Delhi",
      role: "Full-Stack Devloper",
      age: 22,
      name: "Krishna Kumar",

    });
  };

  return (
    <div className="practice-area2">
      <h3>{user.name}</h3>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>Role:</strong> <span className="role-tag">{user.role}</span></p>
      <button className="btn btn-secondary" onClick={updateCity}>Update City</button>
    </div>
  );
}

function EventDemo() {
  const [message, setMessage] = useState('');

  // Event handler finction
  const handleClick = () => {
    alert("Button clicked");
    setMessage("Button clicked");
  };
  const handleMouseEnter = () => {
    console.log("Mouse entered");
    setMessage("Mouse entered");
  };
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      alert(`You pressed Enter: ${message}`);
    }
  };

  return (
    <div className="event-demo">
      {/* Click Event */}
      <button onClick={handleClick}>Click Me</button>

      {/* Inline Function */}
      <button onClick={() => alert('Inline Alert!')}>Click Me</button>

      {/* Mouse Enter Event */}
      <div onMouseEnter={handleMouseEnter}
        onMouseLeave={() => console.log('Mouse left')}
        style={{ padding: '20px', backgroundColor: 'lightgray', marginTop: '1ream', width: '10%', marginTop: '1rem', }}>
        Hover over Me!
      </div>

      {/* Input Event */}
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="Type and press Enter"
      />
      <p>Message: {message}</p>
    </div >
  )
}


function ConditionalRenderingDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');
  const [score, setScore] = useState(75);

  return (
    <div>
      {/* Method1: Ternary Operator */}
      <h2>{isLoggedIn ? "Welcome Back" : "Please Login"}</h2>


      {/* // Method 2: && Operator (if true show component) */}
      {isLoggedIn && <p>You are logged in!</p>}
      {!isLoggedIn && <p>you are not Logged in!</p>}

      {/* // Method 3: If-Else with Function */}

      {
        (() => {
          if (userRole === 'admin') {
            return <p>Welcome Dashboard!</p>
          } else if (userRole === 'User') {
            return <p>Welcome User!</p>
          } else {
            return <p>Guest Mode!</p>
          }
        })()
      }

      {/* // Method 4: Multile Conditions */}
      <p>
        Grade: {
          score >= 90 ? 'A' :
            score >= 80 ? 'B' :
              score >= 70 ? 'C' :
                score >= 60 ? 'D' : 'Fail'
        }
      </p>

      {/* // Toggle Button */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}


function ListsAndKeysDemo() {
  const students = [
    { id: 1, name: 'Rajendra', marks: 95 },
    { id: 2, name: 'Krishna', marks: 88 },
    { id: 3, name: 'Sharik', marks: 78 },
    { id: 4, name: 'Nabin', marks: 88 }
  ];

  const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  const getGradeBadge = (marks) => {
    let grade, className;
    if (marks >= 90) {
      grade = 'A';
      className = 'grade-a';
    } else if (marks >= 80) {
      grade = 'B';
      className = 'grade-b';
    } else if (marks >= 70) {
      grade = 'C';
      className = 'grade-c';
    } else if (marks >= 40) {
      grade = 'D';
      className = 'grade-d';
    } else {
      grade = 'Fail';
      className = 'grade-fail';
    }
    return { grade, className };
  };

  return (
    <div>
      <h3>🍎 Fruits List:</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      
      <h3>📚 Student Performance Table:</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => {
            const { grade, className } = getGradeBadge(student.marks);
            return (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td><span className={`grade-badge ${className}`}>{grade}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Filtered List */}
      <h3>⭐ Top Performers (Marks ≥ 85):</h3>
      <ul>
        {students
          .filter(student => student.marks >= 85)
          .map(student => (
            <li key={student.name}><strong>{student.name}</strong>: {student.marks} marks</li>
          ))}
      </ul>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <div className="introduction-section">
        <div className="intro-header">
          <h1>Introduction to React <ReactLogo /></h1>
          <p className="main-description">
            React is a JavaScript library for building user interfaces. <br />
            <span className="nepali-text">React euta JavaScript library ho jasle user interfaces (UI) banaauna help garcha. Yo Facebook (ahile Meta) le 2013 ma banayeko thiyo. React le component-based architecture use garcha, matlab tapai afno application lai sano-sano pieces ma divide garna saknu huncha.</span>
          </p>
        </div>

        <div className="features-wrapper">
          <h2 className="section-title">✨ React Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>1. Component-Based</h3>
              <p>React ma sabai kura components ma divide huncha. Component vaneko reusable UI piece ho. Jastai: button, form, navbar - sabai components hun.</p>
            </div>
            <div className="feature-card">
              <h3>2. Virtual DOM</h3>
              <p>React le Virtual DOM use garcha jasle performance lai fast banaucha. Real DOM lai directly change nagari, pahila Virtual DOM ma change garcha ani efficiently real DOM update garcha.</p>
            </div>
            <div className="feature-card">
              <h3>3. JSX (JavaScript XML)</h3>
              <p>React ma HTML jasto syntax JavaScript bhitra lekhna sakincha. Yo JSX vancha.</p>
            </div>
            <div className="feature-card">
              <h3>4. Props (Properties)</h3>
              <p>Props le data pass garna sakcha parent component lai child component ma.</p>
            </div>
            <div className="feature-card">
              <h3>5. One-Way Data Flow</h3>
              <p>One-Way Data Flow le data flow lai unidirectional banaucha.</p>
            </div>
            <div className="feature-card">
              <h3>6. State</h3>
              <p>State le component lai dynamic banaucha.</p>
            </div>
            <div className="feature-card">
              <h3>7. Declarative</h3>
              <p>Tapai ke chahincha vannu huncha, kaso garnu vannu hudaina. React afai handle garcha.</p>
            </div>

          </div>
        </div>

        <div className="types-wrapper">
          <h2 className="section-title">🧩 React Component Types</h2>
          <div className="types-grid">
            <div className="type-card class-type">
              <h3>Class Components</h3>
              <p>ES6 classes extending `React.Component`. Uses `render()` method.</p>
            </div>
            <div className="type-card func-type">
              <h3>Function Components</h3>
              <p>Simple functions that return JSX. Modern and recommended.</p>
            </div>
            <div className="type-card state-type">
              <h3>Stateful Components</h3>
              <p>Components that hold state (Smart/Container).</p>
            </div>
            <div className="type-card stateless-type">
              <h3>Stateless Components</h3>
              <p>Presentation only, no internal state (Dumb components).</p>
            </div>
          </div>
        </div>

        <div className="concepts-wrapper">
          <h2 className="section-title">📚 Basic Concepts</h2>
          <ul className="concepts-list">
            <li><strong>Prop</strong> - Parent bata child ma data pathaaune tarika</li>
            <li><strong>State</strong> - Component ko internal data</li>
            <li><strong>Hooks</strong> - useState, useEffect jasta functions</li>
            <li><strong>Events</strong> - onClick, onChange jasta user interactions</li>
            <li><strong>Conditional Rendering</strong> - Condition anusar UI dekhaaune</li>
          </ul>
        </div>
      </div>
      <div className='container component-intro'>
        <h1>Components (Building Blocks)</h1>
        <p>Components are the building blocks of React applications. They are independent, reusable pieces of UI that can be combined to create complex interfaces. </p>

        <h2>Class Component (Old Way - Exam ma aaucha)</h2>
        <p>Class components are ES6 classes that extend `React.Component`. They have a `render()` method that returns JSX.</p>
        <span>Why This Matters:</span>
        <p>Components le code reusable ani organized banaucha. Navbar, Footer, Card - sabai separate components hun.</p>
      </div>

      <div className="container container-intro">
        <h2>Introduction</h2>
        <p>React is a JavaScript library for building user interfaces.</p>
      </div>

      <div className='container container-jsx'>
        <h2>JSX (JavaScript XML)</h2>
        <p>JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your React components. It is not actually HTML, but a shorthand for creating React elements.</p>
        <span>Why This Matters:</span>
        <p>JSX le UI design lai simple ani readable banaucha. It combines the power of JavaScript with the simplicity of HTML.</p>

        <JSXExample />
      </div>

      <div className='container container-props'>
        <h2>Props (Properties)</h2>
        <p>Props are used to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component.</p>
        <span>Why This Matters:</span>
        <p>Props le data share garna help garxa. Parent component le child component lai data pass garcha.</p>

        <PropsExample />
      </div>

      <div className='container container-state'>
        <h2>State (Data Management)</h2>
        <p>State is a JavaScript object that holds data that can change over time. It is used to manage the internal state of a component.</p>
        <span>Why This Matters:</span>
        <p>State le component lai dynamic banaucha. It allows components to maintain their own internal state and update it based on user interactions.</p>

        <div className='state-demo-wrapper'>
          <h2>State Management Examples</h2>
          <p><strong>Learn how to use state in different scenarios:</strong></p>

          <div className='state-subsection'>
            <h3>📊 Counter - Simple State</h3>
            <p>A basic example showing how to manage a single numeric state value.</p>
            <Counter />
          </div>

          <div className='state-subsection'>
            <h3>👤 State With Objects</h3>
            <p>Managing complex state with objects containing multiple properties.</p>
            <UserProfile />
          </div>

          <div className='state-subsection'>
            <h3>📝 Multiple State Variables</h3>
            <p>Handling multiple independent state variables in a form.</p>
            <UserForm />
          </div>
        </div>
      </div>

      <div className='container container-events'>
        <h2>Event Handling</h2>
        <p>Event handling is the process of handling user interactions such as clicks, hovers, and keyboard inputs. It is used to make components interactive.</p>
        <span>Why This Matters:</span>
        <p>Event handling le component lai interactive banaucha. It allows components to respond to user interactions and update their state accordingly.</p>

        <div className='events-demo-wrapper'>
          <h2>Events (User Interactions)</h2>
          <p>Event handling le component lai interactive banaucha. It allows components to respond to user interactions and update their state accordingly.</p>
          <p><strong>Key Points:</strong></p>
          <p>• React events use camelCase naming (onClick, onChange, onSubmit)</p>
          <p>• Event handler functions are passed in curly braces</p>
          <p>• Supports mouse events, keyboard events, form events, and more</p>
          <EventDemo />
        </div>
      </div>

      <div className='container container-conditional-rendering'>
        <h2>Conditional Rendering</h2>
        <p>Conditional rendering is the process of rendering components based on certain conditions. It is used to make components interactive.</p>
        <span>Why This Matters:</span>
        <p>Conditional rendering le component lai dynamic banaucha. It allows components to respond to user interactions and update their state accordingly.</p>

        <div className='conditional-demo-wrapper'>
          <h2>Conditional Rendering (User Interactions)</h2>
          <p>Conditional rendering le component lai dynamic banaucha. It allows components to respond to user interactions and update their state accordingly.</p>
          <p><strong>Methods Used:</strong> Ternary operator, if-else, switch statement, && operator</p>
          <ConditionalRenderingDemo />
        </div>
      </div>

      <div className='container lists-and-keys'>
        <h2>Lists and Keys</h2>
        <p>Lists and keys are used to render multiple components dynamically based on an array of data. Keys help React identify which items have changed, are added, or are removed.</p>
        <span>Why This Matters:</span>
        <p>Lists and keys le dynamic data rendering lai efficient banaucha. It allows you to render lists of components based on an array of data.</p>
        
        <div className='lists-and-keys-demo-wrapper'>
          <h2>Lists and Keys Examples</h2>
          <p><strong>Learn how to render dynamic lists efficiently with proper key usage:</strong></p>
          <p>✅ Keys help React identify which items have changed</p>
          <p>✅ Improves performance and maintains component state</p>
          <p>✅ Always use unique identifiers instead of array indices when possible</p>
          <ListsAndKeysDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
