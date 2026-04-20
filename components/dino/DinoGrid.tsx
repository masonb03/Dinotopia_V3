import { Dinosaur } from "@/data/dinosaur";
import DinoCard from "./DinoCard";
import styles from "@/styles/dinogrid.module.css";

interface DinoGridProps {
  dinosaurs: Dinosaur[];
  onClearFilters?: () => void;
}

export default function DinoGrid({ dinosaurs, onClearFilters }: DinoGridProps) {
  if (!dinosaurs || dinosaurs.length === 0) {
    return (
      <div className={styles.empty}>
        <div className={styles.empty__title}>No dinosaurs found</div>
        <div className={styles.empty__sub}>Try adjusting your filters</div>
        {onClearFilters && (
          <button className={styles.empty__btn} onClick={onClearFilters}>
            Clear filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {dinosaurs.map((dino) => (
        <DinoCard key={dino.id} dinosaur={dino} />
      ))}
    </div>
  );
}