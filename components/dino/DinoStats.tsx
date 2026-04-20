// components/dino/DinoStats.tsx
import { Dinosaur } from '@/data/dinosaur'

interface DinoStatsProps {
  dinosaur: Dinosaur
}

export default function DinoStats({ dinosaur }: DinoStatsProps) {
  return (
    <div className="dino__stats">
      <div className="stat__item">
        <div className="stat__label">Period</div>
        <div className="stat__value">{dinosaur.period}</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Time</div>
        <div className="stat__value">{dinosaur.yearEnd}–{dinosaur.yearStart} MYA</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Diet</div>
        <div className="stat__value">{dinosaur.diet}</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Length</div>
        <div className="stat__value">{dinosaur.length}m</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Weight</div>
        <div className="stat__value">{dinosaur.weight.toLocaleString()} kg</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Classification</div>
        <div className="stat__value">{dinosaur.classification}</div>
      </div>
      <div className="stat__item">
        <div className="stat__label">Region</div>
        <div className="stat__value">{dinosaur.region}</div>
      </div>
    </div>
  )
}