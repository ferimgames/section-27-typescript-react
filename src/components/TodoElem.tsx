import styles from './TodoElem.module.css'

const TodoElem: React.FC<{ text: string }> = (props) => {
  return <li className={styles.item}> {props.text}</li>;
};

export default TodoElem;
