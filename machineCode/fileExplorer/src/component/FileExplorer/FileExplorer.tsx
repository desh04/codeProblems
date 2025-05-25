import React from "react";
import styles from "./FileExplorer.module.css";
import { FolderComponent } from "./FolderComponent";
import { FileComponent } from "./FileComponent";

type FileExplorerProps = {
  data: any[];
  onChange: React.Dispatch<React.SetStateAction<any[]>>;
};

export const FileExplorer: React.FC<FileExplorerProps> = (props) => {
  const { data, onChange } = props;

  const updating = (data: any[], id: string, folder: any) => {
    return data?.map((item) => {
      if (item.id === id) {
        return { ...item, subItem: [...item.subItem, folder] };
      }
      if (item?.subItem?.length > 0) {
        return { ...item, subItem: updating([...item.subItem], id, folder) };
      }

      return item;
    });
  };
  const addNewFolder = (id: string, folder: any) => {
    onChange((prev) => {
      const newData = updating(prev, id, folder);
      return newData;
    });
  };
  return (
    <div>
      {data.map((item, index) => {
        if (item.type === "folder") {
          return (
            <FolderComponent
              key={`${item.name}-${index}`}
              name={item.name}
              id={item.id}
              type={item.type}
              subItems={item.subItem}
              onAddNew={(id: string) => {
                const folderName = prompt("Enter folder name:");
                const newFolder = {
                  id: `l${Date.now()}`,
                  name: folderName,
                  type: "folder",
                  subItem: [],
                };
                addNewFolder(id, newFolder);
              }}
            />
          );
        }
        if (item.type === "file") {
          return (
            <FileComponent
              key={`${item.name}-${index}`}
              name={item.name}
              type={item.type}
            />
          );
        }
        return <></>;
      })}
    </div>
  );
};
