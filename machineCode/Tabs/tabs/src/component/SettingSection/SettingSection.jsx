import styles from "./index.module.css";

export const SettingSection = ({ data, setData }) => {
  const { theme } = data;
  return (
    <div>
      <fieldset
        onChange={(e) => {
          console.log(e.target.value);
          setData((prev) => ({ ...prev, theme: e.target.value }));
        }}
      >
        <legend>Theme</legend>
        <label>
          <input
            name="theme"
            type="radio"
            id="light"
            value="light"
            checked={theme === "light"}
          />
          Light
        </label>
        <label>
          <input
            name="theme"
            type="radio"
            id="dark"
            value="dark"
            checked={theme === "dark"}
          />
          Dark
        </label>
      </fieldset>
      <input type="submit" />
    </div>
  );
};
