import React from "react";
import styles from "../../pages/Work/Work.module.scss";

interface WorkProps {
  function: Function;
  id: number;
  profession: string;
  experience: string;
  perspective: string;
}

const WorkProfessionLeft = (props: WorkProps) => {
  return (
    <article
      className={
        props.id === 0 ? styles.workProfessionActive : styles.workProfession
      }
      onClick={() => props.function(props.id)}
    >
      <div className={styles.workProfessionNumber}>
        {props.id !== 1 ? (
          props.id + 1
        ) : (
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
        )}
      </div>
      <div className={styles.workProfessionWrapper}>
        <div className={styles.workProfessionSecondWrapper}>
          <p className={styles.workProfessionName}>{props.profession} </p>
          <p className={styles.workProfessionExperience}>{props.experience}</p>
        </div>
        <p className={styles.workProfessionPerspective}>{props.perspective}</p>
      </div>
      <div className={styles.workProfessionStrikes}>
        <p className={styles.workProfessionStrike1}></p>
        <p className={styles.workProfessionStrike2}></p>
      </div>
    </article>
  );
};

export default WorkProfessionLeft;
