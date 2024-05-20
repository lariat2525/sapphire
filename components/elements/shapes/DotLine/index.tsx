import styles from "./style.module.scss";

const DotLine = () => {
  return (
    <div className={styles.temp}>
      <div className="h-6 utl-flex-center">
        <div className="h-3 w-3 m rounded-full bg-black" />
        <div className="ml-3 mr-4 my-4 utl-size-w-500 flex border-b-4 border-black" />
      </div>
    </div>
  );
};

export default DotLine;
