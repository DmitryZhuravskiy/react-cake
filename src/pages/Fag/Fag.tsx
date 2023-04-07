import React, { useState } from "react";
import styles from "./Fag.module.scss";
import { Link } from "react-router-dom";
import FagComponent from "../../components/FagComponent/FagComponent";

const Fag = () => {
  const [oneOne, changeOneOne] = useState(false);
  const [oneTwo, changeOneTwo] = useState(false);
  const [twoOne, changeTwoOne] = useState(false);
  const [twoTwo, changeTwoTwo] = useState(false);
  const [twoThree, changeTwoThree] = useState(false);
  const [threeOne, changeThreeOne] = useState(false);

  const tongleOneOne = () => {
    if (oneOne !== false) {
      changeOneOne(false);
    } else {
      changeOneOne(true);
    }
  };

  const tongleOneTwo = () => {
    if (oneTwo !== false) {
      changeOneTwo(false);
    } else {
      changeOneTwo(true);
    }
  };

  const tongleTwoOne = () => {
    if (twoOne !== false) {
      changeTwoOne(false);
    } else {
      changeTwoOne(true);
    }
  };

  const tongleTwoTwo = () => {
    if (twoTwo !== false) {
      changeTwoTwo(false);
    } else {
      changeTwoTwo(true);
    }
  };

  const tongleTwoThree = () => {
    if (twoThree !== false) {
      changeTwoThree(false);
    } else {
      changeTwoThree(true);
    }
  };

  const tongleThreeOne = () => {
    if (threeOne !== false) {
      changeThreeOne(false);
    } else {
      changeThreeOne(true);
    }
  };

  return (
    <div className={styles.fag}>
      <h1 className={styles.mainTitle}>Часто задаваемые вопросы</h1>
      <section className={styles.section}>
        <h3 className={styles.title}>
          ПРАВИЛА ПОСЕЩЕНИЯ РЕСТОРАНОВ "ГРУСТНО И ВКУСНО"
        </h3>
        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleOneOne()}>
            1. МОЖНО ЛИ В РЕСТОРАНЫ "ГРУСТНО И ВКУСНО" ПРИХОДИТЬ СО СВОЕЙ ЕДОЙ?
            <div className={styles.chest}>
              <p className={oneOne ? styles.strike1Open : styles.strike1}></p>
              <p className={oneOne ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {
            <p className={oneOne ? styles.text : styles.textClose}>
              Согласно “Правилам поведения потребителей на территории
              предприятий общественного питания быстрого обслуживания «ГРУСТНО И
              ВКУСНО»” в помещениях ресторана «ГРУСТНО И ВКУСНО» без разрешения
              Администрации ресторана, Гостям запрещается употреблять продукцию,
              приобретённую не в ресторане «ГРУСТНО И ВКУСНО».
            </p>
          }
        </article>

        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleOneTwo()}>
            2. КОГДА МОГУТ ОТКАЗАТЬ В ПРОДАЖЕ АЛКОГОЛЬНОГО НАПИТКА?
            <div className={styles.chest}>
              <p className={oneTwo ? styles.strike1Open : styles.strike1}></p>
              <p className={oneTwo ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {oneTwo && (
            <p className={styles.text}>
              Отказ в покупке пива без паспорта: Поскольку закон по продаже
              алкоголя несовершеннолетним предусматривает довольно суровую
              ответственность, кассиры должны быть бдительными. И для того,
              чтобы не нарушать закон, они имеют право потребовать от любого
              покупателя, желающего приобрести спиртное, предъявления
              документов. Увы, оценка возраста Гостя на основании внешнего вида
              не может послужить оправданием для кассира. К тому же,{" "}
              <a
                href="https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf"
                className={styles.link}
                target="_blank"
              >
                по правилам поведения для потребителей
              </a>
              , есть пункт №3, в котором прописано, что мы оставляем за собой
              право отказать в реализации пива в случае отказа Гостя предъявить
              удостоверения личности. Нам очень жаль, что данным правилом внесли
              дискомфорт в Ваш отдых. Но в целях соблюдения законов, мы
              вынуждены предпринимать данные действия. Во вложении мы
              предоставляем Вам{" "}
              <a href="https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf">
                Перечень документов для покупки алкоголя
              </a>
              .
            </p>
          )}
        </article>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>
          ПРОДУКЦИЯ РЕСТОРАНОВ "ГРУСТНО И ВКУСНО"
        </h3>
        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleTwoOne()}>
            1. КАЛОРИЙНОСТЬ БЛЮД (К.Б.Ж.У.)
            <div className={styles.chest}>
              <p className={twoOne ? styles.strike1Open : styles.strike1}></p>
              <p className={twoOne ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {twoOne && (
            <p className={styles.text}>
              Вы всегда можете узнать необходимую информацию на нашем
              официальном сайте:{" "}
              <Link to="/" className={styles.link} target="_blank">
                "Грустно и Вкусно"
              </Link>{" "}
              , а также в ресторане в уголке для потребителя
            </p>
          )}
        </article>
        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleTwoTwo()}>
            2. ВЕГЕТАРИАНСКАЯ ПРОДУКЦИЯ
            <div className={styles.chest}>
              <p className={twoTwo ? styles.strike1Open : styles.strike1}></p>
              <p className={twoTwo ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {twoTwo && (
            <div>
              <ul>
                <li>
                  <p className={styles.text}>
                    <span className={styles.textBold}>Салаты:</span> Коул Слоу.
                  </p>
                </li>
                <li>
                  <p className={styles.text}>
                    <span className={styles.textBold}>Гарниры:</span> луковые
                    кольца, картофель фри, картофель по-деревенски{" "}
                  </p>
                </li>
                <li>
                  <p className={styles.text}>
                    <span className={styles.textBold}>Десерты:</span>
                    пирожок с вишней – ВНИМАНИЕ: данное изделие может иметь
                    следы следующих продуктов: молоко цельное, молоко сухое,
                    яичный меланж.
                  </p>
                </li>
              </ul>
              <p className={styles.text}>
                {" "}
                Также полную информацию о содержании жиров животного
                происхождения, Вы можете посмотреть{" "}
                <a
                  href="https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf"
                  className={styles.link}
                  target="_blank"
                >
                  в данном файле
                </a>
                .
              </p>
            </div>
          )}
        </article>
        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleTwoThree()}>
            3. О ПРОДУКЦИИ
            <div className={styles.chest}>
              <p className={twoThree ? styles.strike1Open : styles.strike1}></p>
              <p className={twoThree ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {twoThree && (
            <>
              {" "}
              <ul>
                <li>
                  <p className={styles.text}>
                    <span className={styles.textBold}>Салаты:</span> Коул Слоу.
                  </p>
                </li>
                <li>
                  <p className={styles.text}>
                    <span className={styles.textBold}>Гарниры:</span> луковые
                    кольца, картофель фри, картофель по-деревенски
                  </p>
                </li>
                <li>
                  <p className={styles.text}>
                    {" "}
                    <span className={styles.textBold}>Десерты:</span> пирожок с
                    вишней – ВНИМАНИЕ: данное изделие может иметь следы
                    следующих продуктов: молоко цельное, молоко сухое, яичный
                    меланж.
                  </p>
                </li>
              </ul>
              <p className={styles.text}>
                Также полную информацию о содержании жиров животного
                происхождения, Вы можете посмотреть{" "}
                <a
                  href="https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf"
                  className={styles.link}
                  target="_blank"
                >
                  на данной странице
                </a>
                .
                <p />
                <ul>
                  <li>
                    <p className={styles.text}>
                      <span className={styles.textBold}>
                        Кофе Американо 0,2 / 0,3
                      </span>{" "}
                      – Классический зерновой свежемолотый чёрный кофе без
                      молока.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      <span className={styles.textBold}>
                        Капучино 0,2 / 0,3 / 0,5
                      </span>{" "}
                      - Для капучино соотношение молока и кофе — 2:1, но вместо
                      молока тут используется в основном молочная пена, поэтому
                      самого молока в капучино совсем немного.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      <span className={styles.textBold}>
                        Латте 0,2 / 0,3 / 0,5
                      </span>{" "}
                      - Латте (он же латте-макиато) - это молочный напиток на
                      основе кофе эспрессо. Готовится при помощи вспененного
                      молока и состоит из трех слоев: молока, кофе и молочной
                      пенки. На стаканах для кофе есть специальные рисочки с
                      отметками 0,2/0,3/0,5 и напиток наливается по этой
                      рисочке. Это сделано для того, чтобы напиток не наливался
                      до краев и можно было безопасно закрыть и транспортировать
                      кофе.
                    </p>
                  </li>
                  <li>
                    <p className={styles.text}>
                      <span className={styles.textBold}>Наггетсы, порции:</span>{" "}
                    </p>
                    <ul>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>
                            Джуниор (детская){" "}
                          </span>{" "}
                          – 4 шт (идет в составе Комбо обедов)
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>
                            {" "}
                            Малая (маленькая)
                          </span>{" "}
                          – 5 шт
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>Стандартная</span> –
                          9 шт
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>Большая</span> – 15
                          шт
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className={styles.text}>
                      {" "}
                      Объемы напитков в ресторанах, участвующих в акции «Пей
                      сколько хочешь»
                    </p>

                    <ul>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>
                            Пепси б/л джун
                          </span>{" "}
                          – 0,3 (идёт только в составе обедов)
                        </p>{" "}
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>Пепси б/л мал</span>{" "}
                          – 0,5л
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>
                            Пепси б/л станд
                          </span>{" "}
                          – 0,8л
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>
                            Пепси б/л бол{" "}
                          </span>{" "}
                          – 1л
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p className={styles.text}>
                      Объемы напитков в ресторанах, НЕ участвующих в акции «Пей
                      сколько хочешь»
                    </p>
                    <ul>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>Пепси джун</span> –
                          0,3
                        </p>
                      </li>
                      <li>
                        {" "}
                        <p className={styles.text}>
                          <span className={styles.textBold}>Пепси станд</span> –
                          0,5
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}>Пепси Бол </span> –
                          0,8
                        </p>
                      </li>
                      <li>
                        <p className={styles.text}>
                          <span className={styles.textBold}> Пепси XXL</span> –
                          1л
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className={styles.text}>Крылья (крылышки Кинг)</li>
                  <li className={styles.text}>
                    Крылья поставляются в рестораны от поставщика в виде
                    полуфабрикатов, уже замаринованные в соусе барбекю, при
                    обжарке во фритюре приобретают темно-коричневый (иногда
                    темно-золотистый) колер.
                  </li>
                </ul>
              </p>
            </>
          )}
        </article>
      </section>
      <section className={styles.section}>
        <h3 className={styles.title}>ВОПРОСЫ ПО КОММЕРЧЕСКИМ ПРЕДЛОЖЕНИЯМ</h3>
        <article className={styles.articleBorder}>
          <h5 className={styles.subTitle} onClick={() => tongleThreeOne()}>
            1. ЖЕЛАЕТЕ СДЕЛАТЬ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ ПО АРЕНДЕ?
            <div className={styles.chest}>
              <p className={threeOne ? styles.strike1Open : styles.strike1}></p>
              <p className={threeOne ? styles.strike2Open : styles.strike2}></p>
            </div>
          </h5>
          {threeOne && (
            <p className={styles.text}>
              Пройдите по ссылке{" "}
              <a
                href="https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf"
                className={styles.link}
                target="_blank"
              >
                https://raw.githubusercontent.com/DmitryZhuravskiy/react-cake/pictures/pdf/react.pdf
              </a>
            </p>
          )}
        </article>
      </section>
    </div>
  );
};

export default Fag;
