import React, { useState } from "react";
import styles from "./Work.module.scss";
import { Link } from "react-router-dom";

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

const Work = () => {
  const [id, setId] = useState(0);
  const [post, setPost] = useState("");
  const [postWrapper, setPostWrapper] = useState(false);
  const [town, setTown] = useState("");
  const [townWrapper, setTownWrapper] = useState(false);
  const [citizenship, setСitizenship] = useState("");
  const [citizenshipWrapper, setСitizenshipWrapper] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [patronymic, setPatronymic] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [galka, setGalka] = useState(false);

  const tongleCheckbox = () => {
    if (galka === true) {
      setGalka(false);
    } else {
      setGalka(true);
    }
  };

  const tonglePostClick = () => {
    if (postWrapper === true) {
      setPostWrapper(false);
    } else {
      setPostWrapper(true);
    }
  };
  const postClicker = (postWord: string) => {
    setPost(postWord);
    tonglePostClick();
  };
  const tongleTownClick = () => {
    if (townWrapper === true) {
      setTownWrapper(false);
    } else {
      setTownWrapper(true);
    }
  };
  const townClicker = (townWord: string) => {
    setTown(townWord);
    tongleTownClick();
  };
  const tongleСitizenshipClick = () => {
    if (citizenshipWrapper === true) {
      setСitizenshipWrapper(false);
    } else {
      setСitizenshipWrapper(true);
    }
  };
  const citizenshipClicker = (townWord: string) => {
    setСitizenship(townWord);
    tongleСitizenshipClick();
  };

  return (
    <div>
      <section className={styles.workHeader}>
        <h1 className={styles.workTitle}>Работа, на которой не носят корон</h1>
        <p className={styles.workSlogan}>
          Присоединяйся к команде Грустно и Вкусно
        </p>
        <a className={styles.workLink} href="#">
          Заполнить анкету
        </a>
        <article className={styles.workOptions}>
          <div className={styles.workOption}>
            <img
              className={styles.workOptionImage}
              src="/img/work1.png"
              alt="будильник"
              width="64"
              height="64"
            />
            <p className={styles.workOptionText}>Гибкий график</p>
            <p className={styles.workOptionDescription}>
              Возможность совмещать с учёбой, подработка
            </p>
          </div>
          <div className={styles.workOption}>
            <img
              className={styles.workOptionImage}
              src="/img/work2.png"
              alt=""
              width="64"
              height="64"
            />
            <p className={styles.workOptionText}>Работа рядом с домом</p>
            <p className={styles.workOptionDescription}>
              Более 300 ресторанов, много вариантов расположения
            </p>
          </div>
          <div className={styles.workOption}>
            <img
              className={styles.workOptionImage}
              src="/img/work3.png"
              alt=""
              width="64"
              height="64"
            />
            <p className={styles.workOptionText}>Стабильный заработок</p>
            <p className={styles.workOptionDescription}>
              Выплата зарплаты на банковскую карту, премии
            </p>
          </div>
          <div className={styles.workOption}>
            <img
              className={styles.workOptionImage}
              src="/img/work4.png"
              alt=""
              width="64"
              height="64"
            />
            <p className={styles.workOptionText}>Развитие и рост</p>
            <p className={styles.workOptionDescription}>
              Карьера, на которую ты можешь влиять
            </p>
          </div>
        </article>
      </section>
      <section className={styles.workProfessions}>
        <h3 className={styles.workProfessionsTitle}>Карьера в компании</h3>
        <div className={styles.workProfessionsMainWrapper}>
          <div className={styles.workProfessionsWrapper}>
            <article
              className={
                id === 0 ? styles.workProfessionActive : styles.workProfession
              }
              onClick={() => setId(0)}
            >
              <div className={styles.workProfessionNumber}>1</div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>
                    Сотрудник ресторана{" "}
                  </p>
                  <p className={styles.workProfessionExperience}>
                    Стаж, от 3 месяцев{" "}
                  </p>
                </div>
                <p className={styles.workProfessionPerspective}>
                  Может стать тренером-наставником{" "}
                </p>
              </div>
              <div className={styles.workProfessionStrikes}>
                <p className={styles.workProfessionStrike1}></p>
                <p className={styles.workProfessionStrike2}></p>
              </div>
            </article>
            <article
              className={
                id === 1 ? styles.workProfessionActive : styles.workProfession
              }
              onClick={() => setId(1)}
            >
              <div className={styles.workProfessionNumber}>
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.workProfessionNumber}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    d="M26.6793 9.12609C28.6021 9.6068 30.8454 10.7284 31.6465 12.8115C32.4018 15.2283 31.8756 15.2244 30.739 15.2161C30.6697 15.2155 30.5985 15.2151 30.525 15.2151H29.884H29.4033H28.9226H28.4419H27.9612H27.4804H26.9997H26.519H25.5576H25.2372H24.4359H23.9552H23.3144H22.9938H22.3529C21.5768 15.2151 21.0262 15.6287 20.4827 16.0368C19.9041 16.4714 19.3334 16.9001 18.5073 16.8174C15.7833 16.9777 14.0208 16.9777 12.2581 16.9777H12.2581H11.2966H11.1364H10.3352H10.0147H9.37379H9.21353H8.41236H6.16906H5.84862H5.04744H4.24625H2.48365C2.16318 16.9777 1.68244 16.9777 1.36197 16.8174C0.881268 16.6572 0.560825 16.497 0.240354 16.0162C-0.0801179 15.5355 -0.0801179 14.7344 0.240354 14.5741C0.560825 12.8115 1.52224 11.3694 2.6439 10.2477C3.60532 9.12609 4.24621 8.80561 6.00882 8.3249C5.36787 7.68397 5.84859 6.24184 6.97025 6.24184C10.0147 6.24184 12.4183 6.24184 15.3026 6.72255C15.7833 6.88278 16.2639 7.84419 15.7832 8.3249C14.0206 10.0875 14.341 11.8501 14.982 12.6513C15.3025 13.132 17.2253 14.2537 18.347 13.6127C19.3084 11.8501 21.0711 10.408 22.6734 9.76703C22.6492 9.69423 22.6212 9.61408 22.5907 9.52656C22.4198 9.03629 22.1683 8.31527 22.0324 7.36349C21.7119 5.60089 21.0711 4.47924 20.2698 4.31901C19.9494 4.15877 19.629 4.15877 19.3084 4.31901H18.8277C17.8663 3.99853 17.8663 2.5564 18.8277 2.0757C19.3084 1.91547 20.5902 1.75523 21.3915 1.91547C21.5517 1.91547 21.7119 1.91547 21.8722 2.23594L22.3529 2.71665C22.6734 1.27452 23.6348 0.313107 24.2758 0.473342H24.5962C24.9166 0.473342 25.0769 0.633578 25.0769 1.11428C25.0769 1.16074 25.1307 1.42265 25.2072 1.79462C25.3947 2.70577 25.7179 4.27724 25.7179 4.95995C25.7179 5.28043 24.9168 5.28043 24.2758 5.12019C24.1155 4.95995 24.1155 4.95995 23.9552 4.95995C24.7565 6.40207 25.5576 7.68397 26.519 9.12609H26.6793ZM22.3529 17.1379C22.2539 17.1379 22.1549 17.199 22.0179 17.2836C21.9335 17.336 21.8344 17.3971 21.7119 17.4583C21.5518 18.4198 21.5516 19.3812 22.0323 20.1823C24.2757 24.3485 29.7237 21.1437 30.2044 16.9776C28.2815 16.9776 24.436 16.9776 22.3529 17.1379ZM3.12458 18.9005C2.80411 22.5859 6.32928 25.4701 10.0147 21.945L10.8159 21.1437C11.2966 20.5029 11.7773 19.7016 11.9376 18.9005H6.97024H3.12458Z"
                  ></path>
                </svg>
              </div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>Курьер </p>
                  <p className={styles.workProfessionExperience}></p>
                </div>
                <p className={styles.workProfessionPerspective}></p>
              </div>
              <div className={styles.workProfessionStrikes}>
                <p className={styles.workProfessionStrike1}></p>
                <p className={styles.workProfessionStrike2}></p>
              </div>
            </article>
            <article
              className={
                id === 2 ? styles.workProfessionActive : styles.workProfession
              }
              onClick={() => setId(2)}
            >
              <div className={styles.workProfessionNumber}>2</div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>Тренер-наставник </p>
                  <p className={styles.workProfessionExperience}>
                    Стаж, от 6 месяцев{" "}
                  </p>
                </div>
                <p className={styles.workProfessionPerspective}>
                  Может стать менеджером смены{" "}
                </p>
              </div>
              <div className={styles.workProfessionStrikes}>
                <p className={styles.workProfessionStrike1}></p>
                <p className={styles.workProfessionStrike2}></p>
              </div>
            </article>
            <article
              className={
                id === 3 ? styles.workProfessionActive : styles.workProfession
              }
              onClick={() => setId(3)}
            >
              <div className={styles.workProfessionNumber}>3</div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>Менеджер смены </p>
                  <p className={styles.workProfessionExperience}>
                    Стаж, от 9 месяцев{" "}
                  </p>
                </div>
                <p className={styles.workProfessionPerspective}>
                  Может стать Директором ресторана{" "}
                </p>
              </div>
              <div className={styles.workProfessionStrikes}>
                <p className={styles.workProfessionStrike1}></p>
                <p className={styles.workProfessionStrike2}></p>
              </div>
            </article>
            <article
              className={
                id === 4 ? styles.workProfessionActive : styles.workProfession
              }
              onClick={() => setId(4)}
            >
              <div className={styles.workProfessionNumber}>4</div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>Директор </p>
                  <p className={styles.workProfessionExperience}>
                    Стаж, от 1 года{" "}
                  </p>
                </div>
                <p className={styles.workProfessionPerspective}>
                  Может стать Территориальным управляющим{" "}
                </p>
              </div>
              <div className={styles.workProfessionStrikes}>
                <p className={styles.workProfessionStrike1}></p>
                <p className={styles.workProfessionStrike2}></p>
              </div>
            </article>
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
      <section className={styles.workFormWrapper}>
        <h2 className={styles.workFormTitle}>Отправить анкету</h2>
        <form action="post" className={styles.workForm}>
          <div className={styles.workFormInputWrapper}>
            <input
              type="text"
              value={post}
              placeholder="Выберите должность"
              className={styles.workFormInput}
              onClick={() => tonglePostClick()}
            />
            {postWrapper && (
              <div className={styles.workFormInputSecondWrapper}>
                <p className={styles.workFormInputTitle}>Выберите должность</p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => postClicker("Сотрудник ресторана")}
                >
                  Сотрудник ресторана
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => postClicker("Курьер")}
                >
                  Курьер
                </p>
              </div>
            )}
          </div>
          <div className={styles.workFormInputWrapper}>
            <input
              type="text"
              value={town}
              placeholder="Выберите город"
              className={styles.workFormInput}
              onClick={() => tongleTownClick()}
            />
            {townWrapper && (
              <div className={styles.workFormInputSecondWrapper}>
                <p className={styles.workFormInputTitle}>Выберите город</p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => townClicker("Москва")}
                >
                  Москва
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => townClicker("Санкт-Петербург")}
                >
                  Санкт-Петербург
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => townClicker("Екатеринбург")}
                >
                  Екатеринбург
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => townClicker("Владивосток")}
                >
                  Владивосток
                </p>
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Фамилия"
            className={styles.workFormInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Имя"
            className={styles.workFormInput}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Отчество"
            className={styles.workFormInput}
            value={patronymic}
            onChange={(e) => setPatronymic(e.target.value)}
          />
          <div className={styles.workFormInputWrapper}>
            <input
              type="text"
              value={citizenship}
              placeholder="Гражданство"
              className={styles.workFormInput}
              onClick={() => tongleСitizenshipClick()}
            />
            {citizenshipWrapper && (
              <div className={styles.workFormInputSecondWrapper}>
                <p className={styles.workFormInputTitle}>Гражданство</p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => citizenshipClicker("Россия")}
                >
                  Россия
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => citizenshipClicker("Вид на жительство")}
                >
                  Вид на жительство
                </p>
                <p
                  className={styles.workFormInputInner}
                  onClick={() => citizenshipClicker("Другое")}
                >
                  Другое
                </p>
              </div>
            )}
          </div>
          <input
            type="date"
            placeholder="Дата рождения"
            className={styles.workFormInput}
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
          <input
            type="tel"
            placeholder="Телефон"
            className={styles.workFormInput}
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          {galka === true ? (
            <input
              type="checkbox"
              name="agree"
              id="1"
              className={styles.workFormInputChecbox}
              onClick={() => tongleCheckbox()}
              checked
            />
          ) : (
            <input
              type="checkbox"
              name="agree"
              id="1"
              className={styles.workFormInputChecbox}
              onClick={() => tongleCheckbox()}
            />
          )}

          <label htmlFor="1" className={styles.workFormLabel}>
            Я принимаю согласие на обработку персональных данных
          </label>
          {galka === true ? (
            <input
              type="submit"
              className={styles.workFormSubmit}
              value="Отправить"
            />
          ) : (
            <input
              type="submit"
              className={styles.workFormSubmitDisabled}
              value="Отправить"
            />
          )}
        </form>
      </section>
    </div>
  );
};

export default Work;
