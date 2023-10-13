import { FaTimes } from 'react-icons/fa';
import { Button, Item } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={handleDelete} title={`Delete ${name}`}>
        <FaTimes />
      </Button>
    </Item>
  );
};
