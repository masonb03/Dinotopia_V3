import styles from "../../styles/sidebar.module.css"
import { RootState } from '@/store/store'
import { useDispatch, useSelector} from 'react-redux'
import { togglePeriod, toggleDiet, clearFilter, setSortBy } from "@/store/slices/filterSlice";

const Sidebar = () => {

  const dispatch = useDispatch();
  const { periods, diets, sortBy } = useSelector((state: RootState) => state.filters)

  
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__filters}>
        <div className={styles.sidebar__filter}>
          <div className={styles.filter__title}>Period</div>
          <div className={styles.filter__checkbox}>
            <div className={styles.checkbox}>
              <input 
              className={styles.checkbox__input} type="checkbox" checked={periods.includes("Triassic")} onChange={() => dispatch(togglePeriod("Triassic"))}/>
              <label className={styles.checkbox__caption}>Triassic</label>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkbox__input} type="checkbox"  checked={periods.includes("Jurassic")} onChange={() => dispatch(togglePeriod("Jurassic"))}/>
              <label className={styles.checkbox__caption}>Jurassic</label>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkbox__input} type="checkbox"  checked={periods.includes("Cretaceous")} onChange={() => dispatch(togglePeriod("Cretaceous"))}/>
              <label className={styles.checkbox__caption}>Cretaceous</label>
            </div>
          </div>
        </div>
        <div className={styles.sidebar__filter}>
          <div className={styles.filter__title}>Diet</div>
            <div className={styles.checkbox}>
              <input className={styles.checkbox__input} type="checkbox"  checked={diets.includes("Carnivore")} onChange={() => dispatch(toggleDiet("Carnivore"))}/>
              <label className={styles.checkbox__caption}>Carnivore</label>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkbox__input} type="checkbox"  checked={diets.includes("Herbivore")} onChange={() => dispatch(toggleDiet("Herbivore"))}/>
              <label className={styles.checkbox__caption}>Herbivore</label>
            </div>
            <div className={styles.checkbox}>
              <input className={styles.checkbox__input} type="checkbox"  checked={diets.includes("Omnivore")} onChange={() => dispatch(toggleDiet("Omnivore"))}/>
              <label className={styles.checkbox__caption}>Omnivore</label>
            </div>
        </div>
        <div className={styles.sort__section}>
          <div className={styles.sort__title}>Sort by</div>
          <select className={styles.sort__name} value={sortBy} onChange={(e) => dispatch(setSortBy(e.target.value as 'name' | 'period' | 'length'))}>
            <option value="name">Name(A-Z)</option>
            <option value="weight">Weight</option>
            <option value="period">Period</option>
            <option value="length">Length</option>
          </select>
          <button className={styles.clear__btn} onClick={() => dispatch(clearFilter())}>X Clear all filters</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar