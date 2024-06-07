import styles from "./style.module.scss";

const WorkListLine = () => {
  return (
    <div className={styles.temp}>
      <div className="ml-3 h-6 utl-flex-center">
        <div className="h-3 w-3 m rounded-full bg-black" />
        <div className="ml-3 mr-4 my-4 w-60 flex border-b-4 border-black" />
      </div>
    </div>
  );
};

export default WorkListLine;
