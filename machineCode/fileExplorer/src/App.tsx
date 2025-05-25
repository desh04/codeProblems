import React, { useEffect, useRef } from "react";
import { FileExplorer } from "./component/FileExplorer";
import "./App.css";
import { files } from "./data";

function App() {
  const [data, setData] = React.useState(files);

  // const handleDelete = (id: string) => {
  //   console.log("Delete clicked for id:", id);
  //   // Add your delete logic here
  // };

  // const handleCreate = (id: string) => {
  //   console.log("Create new clicked for id:", id);
  //   // Add your create logic here
  // };

  // const handleContextMenu = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   const menu = document.getElementById("contextMenu");
  //   if (menu) {
  //     menu.style.position = "absolute";
  //     menu.style.left = `${e.clientX}px`;
  //     menu.style.top = `${e.clientY}px`;
  //     // @ts-ignore - popover API is new and TypeScript doesn't have types for it yet
  //     menu.showPopover();
  //   }
  // };

  return (
    <>
      <FileExplorer data={data} onChange={setData} />
      {/* <div id="123">open menu</div>

      <div id="contextMenu" popover="auto" className="context-menu">
        <button onClick={() => handleDelete("123")}>Delete</button>
        <button onClick={() => handleCreate("123")}>Create New</button>
      </div> */}
      {/* <div
        popoverTarget="menu"
        onContextMenu={(e) => {
          e.preventDefault();
          console.log("Context menu opened");
          popoverRef.current?.showPopover();
        }}
      >
        Toggle the popover
      </div>
      <div ref={popoverRef} id="menu" popover={"manual"}>
        Popover content
        <button onClick={() => popoverRef.current?.hidePopover()}>close</button>
      </div> */}
    </>
  );
}

export default App;
