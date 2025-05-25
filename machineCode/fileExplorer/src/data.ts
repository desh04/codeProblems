// List of files and folders
export const files = [
  {
    name: "Documents",
    type: "folder",
    id: "l1-1",
    subItem: [
      {
        name: "Resume.docx",
        type: "file",
        id: "l2-1",
        size: "15 KB",
      },
    ],
  },
  {
    name: "src",
    type: "folder",
    id: "l1-2",
    subItem: [
      {
        name: "components",
        type: "folder",
        id: "l2-2",
        subItem: [
          {
            id: "l3-1",
            name: "SomeComponent.tsx",
            type: "file",
            size: "15 KB",
          },
          { id: "l3-2", name: "index.ts", type: "file", size: "1 KB" },
        ],
      },
      { id: "l2-3", name: "data.ts", type: "file", size: "1 KB" },

      {
        id: "l2-4",
        name: "main.tsx",
        type: "file",
        size: "2 KB",
      },
    ],
  },
  { id: "l1-3", name: "index.html", type: "file", size: "1 KB" },
  { id: "l1-4", name: "App.css", type: "file", size: "1 KB" },
];
