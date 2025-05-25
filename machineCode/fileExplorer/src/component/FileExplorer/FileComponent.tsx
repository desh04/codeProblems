import styles from "./FileExplorer.module.css";

export const FileComponent: React.FC<{ name: string; type: string }> = ({
  name,
  type,
}) => {
  console.log("FileComponent", name, type);
  return (
    <div className={styles.fileContainer}>
      <p className={styles.icon}>File</p>
      <p className={styles.text}>{name}</p>
    </div>
  );
};
