import { FaPhoneSquare } from 'react-icons/fa';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
        <FaPhoneSquare size="40px"/>
      <h1>PhoneBook</h1>
    </Header>
  )
}

