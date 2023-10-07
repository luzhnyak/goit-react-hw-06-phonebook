import { FaTimes } from 'react-icons/fa';
import { Button, Item } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        onClick={() => onDelete(id)}
        title={`Delete ${name}`}
      >
        <FaTimes />
      </Button>
    </Item>
  );
};
