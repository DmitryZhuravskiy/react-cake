import React from "react";
import styles from "./FormSelectOption.module.scss";


interface IMyProps {
    optionText: string;
  }

const FormSelectOption: React.FC<IMyProps> = (props: IMyProps) => {
  return (
    <option value={`"${props.optionText}"`} className={styles.workFormInput}>
      {props.optionText}
    </option>
  );
};

export default FormSelectOption;
