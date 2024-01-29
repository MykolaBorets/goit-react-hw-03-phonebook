import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={css.btn}
      >
        Delete
      </button>
    </li>
  );
};
