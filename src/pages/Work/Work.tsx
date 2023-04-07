import React from "react";
import styles from "./Work.module.scss";
import { Link } from "react-router-dom";

const Work = () => {
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
        <div className={styles.ProfessionsMainWrapper}>
          <div className={styles.workProfessionsWrapper}>
            <article className={styles.workProfession}>
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
            </article>
            <article className={styles.workProfession}>
              <div className={styles.workProfessionNumber}>
                <img />
              </div>
              <div className={styles.workProfessionWrapper}>
                <div className={styles.workProfessionSecondWrapper}>
                  <p className={styles.workProfessionName}>Курьер </p>
                  <p className={styles.workProfessionExperience}></p>
                </div>
                <p className={styles.workProfessionPerspective}></p>
              </div>
            </article>
            <article className={styles.workProfession}>
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
            </article>
            <article className={styles.workProfession}>
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
            </article>
            <article className={styles.workProfession}>
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
            </article>
          </div>
          <div className={styles.workProfessionSidebar}>
            <img src="" alt="" className={styles.workProfessionImage} />
            <div className={styles.workProfessionSidebarWrapper}>
              <p className={styles.workProfessionSidebarName}>Директор</p>
              <p className={styles.workProfessionSidebarExperience}>
                Стаж, от 1 года
              </p>
            </div>
            <p className={styles.workProfessionSidebarText}>
              Руководитель бизнеса БУРГЕР КИНГ. Делать свой ресторан
              гостеприимным и прибыльным – его{" "}
            </p>
            <p className={styles.workProfessionSidebarLink}>подробнее</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
