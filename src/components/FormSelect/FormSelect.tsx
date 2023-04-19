import React from "react";
import FormSelectOption from "../FormSelectOption/FormSelectOption";
import { useForm } from "react-hook-form";
import styles from "../../pages/Work/Work.module.scss";

interface IMyProps {
  word:
    | "post"
    | "town"
    | "citizenship"
    | "lastName"
    | "firstName"
    | "patronymic"
    | "date"
    | "phone"
    | "check";
  wordRequired: string;
  optionText: string;
  optionsArr: string[];
}

const FormSelect: React.FC<IMyProps> = ({
  word,
  wordRequired,
  optionText,
  optionsArr,
}: IMyProps) => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      post: "",
      town: "",
      citizenship: "",
      lastName: "",
      firstName: "",
      patronymic: "",
      date: "",
      phone: "",
      check: "",
    },
  });

  return (
    <select
      {...register(word, {
        required: wordRequired,
      })}
      className={styles.workFormInput}
    >
      <option value="" className={styles.workFormInput} disabled>
        {optionText}
      </option>
      {optionsArr.map((el) => (
        <FormSelectOption optionText={el} />
      ))}
    </select>
  );
};

export default FormSelect;
