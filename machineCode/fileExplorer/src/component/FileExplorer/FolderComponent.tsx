import * as React from "react";

import styles from "./FileExplorer.module.css";
import { FileComponent } from "./FileComponent";

export const FolderComponent: React.FC<{
  id: string;
  name: string;
  type: string;
  subItems: any[];
  onAddNew: (id: string) => void;
}> = ({ id, name, type, subItems, onAddNew }) => {
  const [open, setOpen] = React.useState(false);
  console.log("FolderComponent", name, type, subItems);
  return (
    <div className={styles.folderContainer}>
      <div className={styles.fileContainer}>
        <div className={styles.folderButton}>
          <p className={styles.icon}>Fold</p>
          <button onClick={() => setOpen(!open)}>
            <p className={styles.text}> {open ? "-" : "+"}</p>
          </button>
          <p className={styles.text}>{name}</p>
          <button
            style={{ marginLeft: "auto" }}
            onClick={() => {
              onAddNew(id);
            }}
          >
            Add folder
          </button>
        </div>
      </div>
      {open ? (
        <div className={styles.subFileContainer}>
          {subItems.map((item) => {
            if (item.type === "folder") {
              return (
                <FolderComponent
                  id={id}
                  name={item.name}
                  type={item.type}
                  subItems={item.subItem}
                  onAddNew={onAddNew}
                />
              );
            }
            if (item.type === "file") {
              return <FileComponent name={item.name} type={item.type} />;
            }
            return <></>;
          })}
        </div>
      ) : null}
    </div>
  );
};
