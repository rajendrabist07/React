import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function greating() {
  return (
    <h1>hello react developer</h1>
  );
}

const Welcome = () => {
  return (
    <h1>hello react developer</h1>
  );
}

function JSXExample() {
  const name = "Ramesh";
  const age = 21;
  const isStudent = true;

  return (
    <div className="practice-area">
      <h3>Example Code Output:</h3>
      {/* JSX ma comments yesto lekhne */}
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>

      {/* JavaScript expressions {} bhitra */}
      <p>Next Year: {age + 1}</p>

      {/* Conditional rendering */}
      <p>{isStudent ? "Student ho" : "Student hoina"}</p>

      {/* Inline styles - object ma */}
      <div style={{ color: '#61dafb', fontSize: '20px' }}>
        Styled Text
      </div>
    </div>
  );
}

// 3. Props Component Example
function UserCard({ name, age, city, role }) {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Role:</strong> <span className="role-tag">{role}</span></p>
    </div>
  );
}

function PropsExample() {
  return (
    <div className="practice-area">
      <h3>Example Code Output:</h3>
      <p style={{ marginBottom: '10px' }}>We use the same <code>&lt;UserCard /&gt;</code> component twice with different data!</p>
      <div className="card-grid">
        <UserCard
          name="Sita Sharma"
          age={22}
          city="Kathmandu"
          role="Developer"
        />
        <UserCard
          name="Hari Thapa"
          age={24}
          city="Pokhara"
          role="Designer"
        />
      </div>
    </div>
  );
}

// 4. State Component Examples
function Counter() {
  // [currentValue, functionToUpdateValue] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div className="practice-area">
      <h3>Counter Example (useState)</h3>
      <h2>Count: <span style={{ color: '#61dafb' }}>{count}</span></h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button className="btn" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

function UserForm() {
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

function App() {
  return (
    <>
      <div >
        <div className="introduction-section">
          <div className="intro-header">
            <h1>Introduction to React ⚛️</h1>
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

          <Counter />
          <UserForm />
        </div>

        <div className='container container-events'>
          <h2>Event Handling</h2>
          <p>Event handling is the process of handling user interactions such as clicks, hovers, and keyboard inputs. It is used to make components interactive.</p>
          <span>Why This Matters:</span>
          <p>Event handling le component lai interactive banaucha. It allows components to respond to user interactions and update their state accordingly.</p>
        </div>
      </div >
    </>
  );
}

export default App;
