import React from "react";
import styles from "../../pages/Work/Work.module.scss";

interface WorkProps {
  imageLink: string;
  altLinkText: string;
  optionText: string;
  optionDescription: string;
}

const WorkOption = ({
  imageLink,
  altLinkText,
  optionText,
  optionDescription,
}: WorkProps) => {
  return (
    <div className={styles.workOption}>
      <img
        className={styles.workOptionImage}
        src={imageLink}
        alt={altLinkText}
        width="64"
        height="64"
      />
      <p className={styles.workOptionText}>{optionText}</p>
      <p className={styles.workOptionDescription}>{optionDescription}</p>
    </div>
  );
};

export default WorkOption;
