/**
 * Live Code examples
 */

//
// JSX EXPRESSIONS
//

export const jsxExpressionsA = `
const element = <h1>Hello, Mary Poppins</h1>;

render(element)
`.trim();

export const jsxExpressionsB = `
const name = 'Mary Poppins';
const element = <h1>Hello, {name}</h1>;

render(element)
`.trim();

export const jsxExpressionsC1 = `
  render(
  <h1>
    Time: {(new Date().toLocaleTimeString('en-US'))}
  </h1>
);
`.trim();

export const jsxExpressionsC2 = `
const getName = () => 'Harry Potter';

const element = (
  <h1>
    Hello, {getName()}
  </h1>
);


render(element)
`.trim();

export const jsxExpressionsC3 = `
const element = (
  <h1>
    {6 > 4
      ? "Ok, the sky is still blue"
      : "I don't feel so good..."}
  </h1>
);

render(element)
`.trim();

export const jsxExpressionsD = `
function greetUser(isLoggedIn, username){
  if (isLoggedIn) {
    return <h1>Hello, {username}</h1>;
  }

  return <h1>Hello, Stranger</h1>;
}

render(greetUser(false, undefined))
`.trim();

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
`.trim();

export const renderingComponentsB = `
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
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

render(
  <App />
);
`.trim();
