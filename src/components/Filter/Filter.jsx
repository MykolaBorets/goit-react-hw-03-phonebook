import css from './Filter.module.css';

export const Filter = ({ findContact }) => {
  return (
    <label htmlFor="filter" className={css.label}>
      Find contacts by name
      <input
        type="text"
        id="filter"
        name="filter"
        className={css.input}
        onInput={findContact}
      />
    </label>
  );
};
