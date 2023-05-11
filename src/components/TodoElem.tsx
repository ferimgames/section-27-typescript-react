const TodoElem: React.FC<{ text: string }> = (props) => {
  return <li> {props.text}</li>;
};

export default TodoElem;
