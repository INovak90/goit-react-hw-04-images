import { SearchForm } from 'components/SearchForm/SearchForm';
import PropTypes from 'prop-types';

import styled from './Searchbar.module.css';

export const Searchbar = ({ onSubmitForm  }) => {
  return (
    <header className={styled.Searchbar}>
      <SearchForm onSubmitForm={onSubmitForm} />
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
