import styles from "./index.module.css";
// import {
//   nameValidator,
//   ageValidator,
//   emailValidator,
// } from "../../utility/formValidators.js";
import {
  ageValidator,
  nameValidator,
  emailValidator,
} from "../../utility/formValidators";

export const ProfileSection = ({ data, setData, error, setError }) => {
  const modifyField = (value, field) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div>
        <label>
          Name:
          <input
            id="name-input"
            type="text"
            value={data.name}
            onChange={(e) => {
              const error = nameValidator(e.target.value);

              setError((prev) => ({ ...prev, name: error }));
              modifyField(e.target.value, "name");
            }}
          />
        </label>
        {error.name && (
          <p id="name-input" className={styles.errorMessage} role="alert">
            {error.name}
          </p>
        )}
      </div>
      <div>
        <label>
          Age:
          <input
            id="age-input"
            type="number"
            aria-invalid={error.age ? "true" : "false"}
            value={data.age}
            onChange={(e) => {
              const error = ageValidator(e.target.value);

              setError((prev) => ({ ...prev, age: error }));
              modifyField(e.target.value, "age");
            }}
          />
        </label>
        {error.age && (
          <p id="age-error" className={styles.errorMessage} role="alert">
            {error.age}
          </p>
        )}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            id="email-input"
            value={data.email}
            onChange={(e) => {
              const error = emailValidator(e.target.value);

              setError((prev) => ({ ...prev, email: error }));
              modifyField(e.target.value, "email");
            }}
          />
        </label>
        {error.email && (
          <p id="email-input" className={styles.errorMessage} role="alert">
            {error.email}
          </p>
        )}
      </div>
    </div>
  );
};
