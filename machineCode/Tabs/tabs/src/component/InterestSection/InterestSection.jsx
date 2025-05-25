import styles from "./index.module.css";

export const InterestSection = () => {
  return (
    <div>
      <fieldset>
        <legend>Likes</legend>

        <label>
          <input name="likes" type="checkbox" id="music" value="music" />
          Music
        </label>
        <label>
          <input name="likes" type="checkbox" id="game" value="game" />
          Game
        </label>
        <label>
          <input name="likes" type="checkbox" id="travel" value="travel" />
          Travel
        </label>
      </fieldset>
    </div>
  );
};
