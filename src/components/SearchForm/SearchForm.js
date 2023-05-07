import style from './SearchForm.module.css';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const SearchForm = ({ onSubmitForm }) => {
  return (
    <form onSubmit={onSubmitForm} className={style.SearchForm}>
      <button type="submit" className={style['SearchForm-button']}>
        <AiOutlineSearch size="24" />
        <span className={style['SearchForm-button-label']}>Search</span>
      </button>

      <input
        name="query"
        className={style['SearchForm-input']}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  );
};

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
