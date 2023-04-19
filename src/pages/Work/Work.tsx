import React, { useState } from "react";
import styles from "./Work.module.scss";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormSelectOption from "../../components/FormSelectOption/FormSelectOption";
import FormSelect from "../../components/FormSelect/FormSelect";
import WorkProfessionLeft from "../../components/WorkProfessionLeft/WorkProfessionLeft";
import WorkOption from "../../components/WorkOption/WorkOption";

const data = [
  {
    id: 1,
    imageLink: "/img/profession1.png",
    title: "Сотрудник ресторана",
    description:
      "Лицо компании БУРГЕР КИНГ. Поддерживает чистоту и атмосферу гостеприимства, обеспечивает высокое качество блюд",
    experience: "Стаж, от 3 месяцев ",
  },
  {
    id: 5,
    imageLink: "/img/profession2.png",
    title: "Курьер",
    description:
      "Быстро, бережно и вежливо доставляет заказы из ресторанов Гостям",
    experience: "",
  },
  {
    id: 2,
    imageLink: "/img/profession3.png",
    title: "Тренер-наставник",
    description:
      "Отвечает за знания команды о новых процессах и стандартах, координирует кухню или прилавок в часы пик",
    experience: "Стаж, от 6 месяцев",
  },
  {
    id: 3,
    imageLink: "/img/profession4.png",
    title: "Менеджер смены",
    description:
      "Управляет сменой: ставит задачи команде, мотивирует, контролирует ход работы, поддерживает позитивный настрой ",
    experience: "Стаж, от 9 месяцев",
  },
  {
    id: 4,
    imageLink: "/img/profession5.png",
    title: "Директор",
    description:
      "Руководитель бизнеса БУРГЕР КИНГ. Делать свой ресторан гостеприимным и прибыльным – его главная задача ",
    experience: "Стаж, от 1 года",
  },
];

interface IUser {
  id: number;
}

const Work = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
  const onSubmit = (data: object) => {
    alert(JSON.stringify(data));
    reset();
  };
  const [id, setId] = useState(0);

  return (
    <div>
      <section className={styles.workHeader}>
        <h1 className={styles.workTitle}>Работа, на которой не носят корон</h1>
        <p className={styles.workSlogan}>
          Присоединяйся к команде Грустно и Вкусно
        </p>
        <a className={styles.workLink} href="#form">
          Заполнить анкету
        </a>
        <article className={styles.workOptions}>
          <WorkOption
            {...{
              imageLink: "/img/work1.png",
              altLinkText: "будильник",
              optionText: "Гибкий график",
              optionDescription: "Возможность совмещать с учёбой, подработка",
            }}
          />
          <WorkOption
            {...{
              imageLink: "/img/work2.png",
              altLinkText: "",
              optionText: "Работа рядом с домом",
              optionDescription:
                "Более 300 ресторанов, много вариантов расположения",
            }}
          />
          <WorkOption
            {...{
              imageLink: "/img/work3.png",
              altLinkText: "",
              optionText: "Стабильный заработок",
              optionDescription: "Выплата зарплаты на банковскую карту, премии",
            }}
          />
          <WorkOption
            {...{
              imageLink: "/img/work4.png",
              altLinkText: "",
              optionText: "Развитие и рост",
              optionDescription: "Карьера, на которую ты можешь влиять",
            }}
          />
        </article>
      </section>
      <section className={styles.workProfessions}>
        <h3 className={styles.workProfessionsTitle}>Карьера в компании</h3>
        <div className={styles.workProfessionsMainWrapper}>
          <div className={styles.workProfessionsWrapper}>
            <WorkProfessionLeft
              function={setId}
              id={0}
              profession="Сотрудник ресторана"
              experience="Стаж, от 3 месяцев"
              perspective="Может стать тренером-наставником"
            />
            <WorkProfessionLeft
              function={setId}
              id={1}
              profession="Курьер"
              experience=""
              perspective=""
            />
            <WorkProfessionLeft
              function={setId}
              id={2}
              profession="Тренер-наставник"
              experience="Стаж, от 6 месяцев"
              perspective="Может стать менеджером смены"
            />
            <WorkProfessionLeft
              function={setId}
              id={3}
              profession="Менеджер смены"
              experience="Стаж, от 9 месяцев"
              perspective="Может стать Директором ресторана"
            />
            <WorkProfessionLeft
              function={setId}
              id={4}
              profession="Директор"
              experience="Стаж, от 1 года"
              perspective="Может стать Территориальным управляющим"
            />
          </div>
          <div className={styles.workProfessionSidebar}>
            <img
              src={data[id].imageLink}
              alt=""
              className={styles.workProfessionImage}
              width="100%"
            />
            <div className={styles.workProfessionSidebarWrapper}>
              <p className={styles.workProfessionSidebarName}>
                {data[id].title}
              </p>
              <p className={styles.workProfessionSidebarExperience}>
                {data[id].experience}
              </p>
            </div>
            <p className={styles.workProfessionSidebarText}>
              {data[id].description}
            </p>
            <p className={styles.workProfessionSidebarLink}>подробнее</p>
          </div>
        </div>
      </section>
      <section className={styles.workFormWrapper} id="form">
        <h2 className={styles.workFormTitle}>Отправить анкету</h2>
        <form className={styles.workForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.workFormInputWrapper}>
            <FormSelect
              word="post"
              wordRequired="Должность обязательно к заполнению"
              optionText="Выберите должность"
              optionsArr={["Курьер", "Должность обязательно к заполнению"]}
            />
            <div className={styles.workErrorMessage}>
              {errors?.post && <p>{errors?.post?.message || "Error!"}</p>}
            </div>
          </div>
          <div className={styles.workFormInputWrapper}>
            <FormSelect
              word="town"
              wordRequired="Город обязателен к заполнению"
              optionText="Выберите город"
              optionsArr={[
                "Москва",
                "Санкт-Петербург",
                "Екатеринбург",
                "Владивосток",
              ]}
            />
            <div className={styles.workErrorMessage}>
              {errors?.town && <p>{errors?.town?.message || "Error!"}</p>}
            </div>
          </div>
          <input
            type="text"
            placeholder="Фамилия"
            className={styles.workFormInput}
            {...register("lastName", {
              required: "Фамилия обязательно к заполнению",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
            })}
          />
          <div className={styles.workErrorMessage}>
            {errors?.lastName && <p>{errors?.lastName?.message || "Error!"}</p>}
          </div>
          <input
            type="text"
            placeholder="Имя"
            className={styles.workFormInput}
            {...register("firstName", {
              required: "Имя обязательно к заполнению",
              minLength: {
                value: 3,
                message: "Минимум 3 символа",
              },
            })}
          />
          <div className={styles.workErrorMessage}>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || "Error!"}</p>
            )}
          </div>
          <input
            type="text"
            placeholder="Отчество"
            className={styles.workFormInput}
            {...register("patronymic", {
              required: "Отчество обязательно к заполнению",
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
            })}
          />
          <div className={styles.workErrorMessage}>
            {errors?.patronymic && (
              <p>{errors?.patronymic?.message || "Error!"}</p>
            )}
          </div>
          <div className={styles.workFormInputWrapper}>
            <FormSelect
              word="citizenship"
              wordRequired="Гражданство обязательно к заполнению"
              optionText="Гражданство"
              optionsArr={["Россия", "Вид на жительство", "Другое"]}
            />
          </div>
          <div className={styles.workErrorMessage}>
            {errors?.citizenship && (
              <p>{errors?.citizenship?.message || "Error!"}</p>
            )}
          </div>
          <input
            type="date"
            placeholder="Дата рождения"
            className={styles.workFormInput}
            {...register("date", {
              required: "Дата рождения должна быть указана",
              valueAsDate: true,
            })}
          />
          <div className={styles.workErrorMessage}>
            {errors?.date && <p>{errors?.date?.message || "Error!"}</p>}
          </div>
          <input
            type="tel"
            placeholder="Телефон"
            className={styles.workFormInput}
            {...register("phone", {
              required: "Забыли написать телефон",
              pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            })}
          />
          <div className={styles.workErrorMessage}>
            {errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}
          </div>
          <input
            type="checkbox"
            id="1"
            className={styles.workFormInputChecbox}
            {...register("check", {
              required: "Требуется согласие на обработку данных",
            })}
          />
          <label htmlFor="1" className={styles.workFormLabel}>
            Я принимаю согласие на обработку персональных данных
          </label>
          <div className={styles.workErrorMessage}>
            {errors?.check && <p>{errors?.check?.message || "Error!"}</p>}
          </div>
          <input
            type="submit"
            className={styles.workFormSubmit}
            value="Отправить"
          />
        </form>
      </section>
    </div>
  );
};

export default Work;
