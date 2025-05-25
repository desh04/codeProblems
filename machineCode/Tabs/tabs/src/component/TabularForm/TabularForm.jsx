import { useEffect, useState } from "react";

import { InterestSection } from "../InterestSection/InterestSection";
import { ProfileSection } from "../ProfileSection/ProfileSection";
import { SettingSection } from "../SettingSection/SettingSection";

import styles from "./index.module.css";

export const TabularForm = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [formData, setFromData] = useState({
    name: "hello",
    age: 12,
    email: "test@gmail.com",
    theme: "light",
  });
  const [error, setError] = useState({});
  const formTabs = [
    {
      field: "Profile",
      component: ProfileSection,
      tabId: "1",
      validator: (value) => {
        if (!value) {
          return "";
        }
        return "";
      },
    },
    { field: "Interest", component: InterestSection, tabId: "2" },
    { field: "Setting", component: SettingSection, tabId: "3" },
  ];

  useEffect(() => {}, []);

  const handleTabChange = (e) => {
    console.log(e);
    setActiveTab(e.target.value);
  };

  const CurrentComponent = formTabs.filter((tab) => tab.tabId === activeTab)[0]
    .component;
  return (
    <form>
      {formTabs.map((tab) => (
        <button
          type="button"
          key={tab.tabId}
          value={tab.tabId}
          onClick={handleTabChange}
        >
          {tab.field}
        </button>
      ))}
      <div className={styles.section}>
        <CurrentComponent
          data={formData}
          setData={setFromData}
          error={error}
          setError={setError}
        />
      </div>
    </form>
  );
};
