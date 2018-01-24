// stateless functional component
const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
//render using same RenderDOM.render method with component name

ReactDOM.render(<User name="Matt" age={39} />, document.getElementById('app'));



// class based components
class Option extends React.Component {
  render() {
    return (
      <div>
        optionText
      </div>
    );
  }
}
