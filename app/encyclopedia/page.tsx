'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { clearFilter } from '@/store/slices/filterSlice'
import { dinosaurs } from '@/data/dinosaur'
import DinoGrid from '@/components/dino/DinoGrid'

export default function EncyclopediaPage() {
  const dispatch = useDispatch()
  const { searchQuery, periods, diets } = useSelector((state: RootState) => state.filters)

  const filtered = dinosaurs.filter(dino => {
    const matchesSearch = dino.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPeriod = periods.length === 0 || periods.includes(dino.period)
    const matchesDiet = diets.length === 0 || diets.includes(dino.diet)
    return matchesSearch && matchesPeriod && matchesDiet
  })

  return (
    <div>
      <DinoGrid
        dinosaurs={filtered}
        onClearFilters={() => dispatch(clearFilter())}
      />
    </div>
  )
}