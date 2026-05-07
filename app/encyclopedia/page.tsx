'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { clearFilter } from '@/store/slices/filterSlice'
import { dinosaurs } from '@/data/dinosaur'
import DinoGrid from '@/components/dino/DinoGrid'
import Sidebar from '@/components/layout/Sidebar'
import styles from '../../styles/encyclopedia.module.css'
import SearchBar from '@/components/layout/SearchBar'
import { useMemo } from 'react'

export default function EncyclopediaPage() {
  const dispatch = useDispatch()
  const { searchQuery, periods, diets, sortBy } = useSelector((state: RootState) => state.filters)

const sorted = useMemo(() => {
  const filtered = dinosaurs.filter((dino) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch = 
    dino.name.toLowerCase().replace(/\s/g, "").includes(query.replace(/\s/g, ""));

    const matchesPeriod =
      periods.length === 0 || periods.includes(dino.period);

    const matchesDiet =
      diets.length === 0 || diets.includes(dino.diet);

    return matchesSearch && matchesPeriod && matchesDiet;
  });

  return [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);

      case "period":
        return a.period.localeCompare(b.period);

      case "length":
        return (a.length ?? 0) - (b.length ?? 0);

      default:
        return 0;
    }
  });
}, [searchQuery, periods, diets, sortBy]);


  return (
    <div className={styles.encyclopedia}>
      <div className={styles.encyclopedia__grid}>
        <Sidebar />
        <div className={styles.main__content}>
        <SearchBar />
        <DinoGrid
          dinosaurs={sorted}
          onClearFilters={() => dispatch(clearFilter())}
        />
        </div>
      </div>
    </div>
  )
}