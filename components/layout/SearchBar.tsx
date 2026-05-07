"use client"
import styles from "../../styles/searchbar.module.css"
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setSearchQuery } from "@/store/slices/filterSlice";


const SearchBar = () => {

  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.filters.searchQuery)

  return (
    <div className={styles.searchbar}>
        <form className={styles.searchbar__wrapper} onSubmit={(e) => {e.preventDefault();
            console.log("Search confirmed:", searchQuery);
          }}
        >
          <span className={styles.searchbar__icon}>
            <FaSearch />
          </span>
          <input 
          type="text"
          placeholder="Search dinosaurs..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log("Search confirmed:", searchQuery);
            }
          }}
          className={styles.searchbar__input}
          />
        </form>
    </div>
  )
}

export default SearchBar