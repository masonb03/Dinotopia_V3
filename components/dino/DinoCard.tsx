// components/dino/DinoCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { Dinosaur } from '@/data/dinosaur'
import styles from '@/styles/dinocard.module.css'

interface DinoCardProps {
  dinosaur: Dinosaur
}

export default function DinoCard({ dinosaur }: DinoCardProps) {

  if(!dinosaur) return null;

  return (
    <Link href={`/dinosaurs/${dinosaur.id}`} className={styles.card}>
      <figure className={styles['card__img--wrapper']}>
        <div className={styles['card__content--period-pill']}>{dinosaur.period}</div>
        <Image
          src={dinosaur.imageUrl}
          alt={dinosaur.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </figure>
      <div className={styles['card__content']}>
        <div className={styles['card__content--title']}>{dinosaur.name}</div>
        <div className={styles['card__content--years']}>
          {dinosaur.yearEnd}–{dinosaur.yearStart} MYA
        </div>
        <div className={styles['card__content--fact-pills']}>
          <div className={styles['fact__pill']}>{dinosaur.diet}</div>
          <div className={styles['fact__pill']}>{dinosaur.length}m</div>
          <div className={styles['fact__pill']}>{dinosaur.classification}</div>
        </div>
      </div>
    </Link>
  )
}