/**
 * Live Code examples
 */

//
// JSX EXPRESSIONS
//

export const jsxExpressionsA = `
const element = <h1>Hello, Mary Poppins</h1>;

render(element)
`;

export const jsxExpressionsB = `
const name = 'Mary Poppins';
const element = <h1>Hello, {name}</h1>;

render(element)
`;

export const jsxExpressionsC1 = `
render(
  <h1>
    Time: {(new Date().toLocaleTimeString('en-US'))}
  </h1>
);
`;

export const jsxExpressionsC2 = `
const getName = () => 'Harry Potter';

const element = (
  <h1>
    Hello, {getName()}
  </h1>
);


render(element)
`;

export const jsxExpressionsC3 = `
const element = (
  <h1>
    {6 > 4
      ? "Ok, the sky is still blue"
      : "I don't feel so good..."}
  </h1>
);

render(element)
`;

export const jsxExpressionsD = `
function greetUser(isLoggedIn, username){
  if (isLoggedIn) {
    return <h1>Hello, {username}</h1>;
  }

  return <h1>Hello, Stranger</h1>;
}

render(greetUser(false, undefined))
`;

//
// RENDERING COMPONENTS
//

export const renderingComponentsA = `
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}

render(
  <Welcome name="Mary" />
);
`;

export const renderingComponentsB = `
function Welcome(props){
  return <h2>Hello, {props.name}</h2>;
}

function App(){
  return (
    <div>
      <Welcome name="Mary" />
      <Welcome name="Harry" />
      <Welcome name="Alice" />
    </div>
  )
}

render(<App />);
`;

export const classComponentState = `
class Foo extends React.Component {
  constructor(props) {
    super(props); // Important!

    this.state = {
      bar: 'baz',
    };

  }

  render() {
    return <h1>Hello {this.state.bar}</h1>;
  }
}

render(<Foo />);
`;

export const useStateClassExample = `
class Foo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <Div>
        <span>Clicked count: {this.state.count} times</span>
        <button onClick={this.handleClick}>Update</button>
      </Div>
    );
  }
}

render(<Foo />);
`;

export const useStateFunctionExample = `
function Foo(props) {
  const [count, setCount] = useState(0);

  return (
    <Div>
      <span>Clicked count: {count} times</span>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </Div>
  );
};

render(<Foo />);
`;

export const useStateFunctionExampleMultiState = `
function Foo(props) {
  const [count, setCount] = useState(0);
  const [icr, setIcr] = useState(10);

  return (
    <Div>
      <span>Clicked count: {count} times (icr = {icr})</span>
      <button onClick={() => {
        setCount(count + 1);
        setIcr(icr + 1);
      }}>Update</button>
    </Div>
  );
};

render(<Foo />);
`;
