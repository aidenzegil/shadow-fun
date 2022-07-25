import styles from './CssBackground.module.css'
function makeBoxes(boxArray = []) {
    if (boxArray.length >= 50) return boxArray;
  
    const newBox = (
      <div className={styles.Boxes}>
  
      </div>
    );
  
    return makeBoxes([...boxArray, newBox]);
  }
  
  export const CssBackground = () => {
    return <div className={styles.BoxWrapper}>{makeBoxes()}</div>;
  };