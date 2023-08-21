import styles from "./StatCard.module.css";

interface StatCardProps {
  cardData: {
    bgColor: string;
    icon: any;
    name: string;
    count: number;
    color?: string;
  };
}

export const StatCard = ({ cardData }: StatCardProps) => {
  return (
    <div className={styles.statCardStyling}>
      <div
        className={styles.iconBgStyling}
        style={{ backgroundColor: cardData.bgColor }}
      >
        {cardData.icon}
      </div>
      <div className={styles.statInfoStyling}>
        <h5>{cardData?.name}</h5>
        <h2>{cardData?.count}</h2>
      </div>
    </div>
  );
};
