import styles from "./style.module.scss";

const LineDotCenter = () => {
  return (
    <div className={styles.temp}>
      <div className="h-6 ml-5 mr-5 utl-flex-center">
        <div className="mr-3 w-36 flex border-b-4 border-black" />
        <div className="h-3 w-3 m rounded-full bg-black" />
        <div className="ml-3 my-4 w-36 flex border-b-4 border-black" />
      </div>
    </div>
  );
};

export default LineDotCenter;
