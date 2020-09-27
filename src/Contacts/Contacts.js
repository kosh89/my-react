import React, { useState, useEffect } from 'react';
import './Contact.css';
import Remove from '../Remove/Remove';
import Edit from '../Edit/Edit';
import EditForm from '../EditForm/EditForm';
import LogoutButton from '../LogoutButton/LogoutButton';
import AddContact from '../AddContact/AddContact';
import Search from '../Search/Search';

function Contacts(props) {
  const [contacts, setContacts] = useState([]);
  const [isEditFormActive, setEditFormActive] = useState(false);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editPhone, setEditPhone] = useState('');
  const [currentId, setCurrentId] = useState();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setContacts(json))
  }, []);

  const onRemoveClick = (e) => {
    const target = e.target.closest(`.contacts__card`);
    // setCurrentId(+target.id) -- удаляет со второго клика

    setContacts(
      contacts.filter((contact) => {
        return contact.id !== +target.id
      })
    )
  }

  const onAddClick = () => {
    setCurrentId(Date.now() / 1000);
    setEditFormActive(true);
  }

  const onSearchChange = (e) => {
    setSearchValue(e.target.value);
  }

  const onEditClick = (e) => {
    console.log(contacts);
    const target = e.target.closest(`.contacts__card`);
    setCurrentId(+target.id);
    setEditFormActive(true);
    setEditName(target.querySelector(`.contacts__name`).textContent);
    setEditEmail(target.querySelector(`.contacts__email`).textContent);
    setEditPhone(target.querySelector(`.contacts__phone`).textContent);
    console.log(currentId);
  }

  const clearEditFields = () => {
    setEditName('');
    setEditEmail('');
    setEditPhone('');
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: currentId,
      name: editName,
      phone: editPhone,
      email: editEmail
    }

    const index = contacts.findIndex((contact) => contact.id === newContact.id);

    if (index === -1) {
      setContacts(contacts => [...contacts, newContact]);
    } else {
      // двойная работа (перебор массива 2 раза). Как оптимизировать без?
      setContacts(contacts.map((contact) => contact.id === newContact.id ? newContact : contact));
    }

    clearEditFields();
    setEditFormActive(false);
  }

  const onNameChange = (e) => {
    setEditName(e.target.value);
  }

  const onEmailChange = (e) => {
    setEditEmail(e.target.value);
  }

  const onPhoneChange = (e) => {
    setEditPhone(e.target.value);
  }

  const onFormOverlayMouseDown = (e) => {
    if (e.target.classList.contains(`form__overlay`)) {
      clearEditFields();
      setEditFormActive(false);
    }
  }

  return (
    <div className="contacts">
      <div className="contacts__controls">
        <AddContact onaddcontactclick={onAddClick} />
        <Search searchvalue={searchValue}
          onsearchchange={onSearchChange} />
        <LogoutButton auth={props.auth} />
      </div>
      <ul className="contacts__list">
        {contacts.filter((contact) => {
          if (searchValue === '') {
            return contact
          } else if (contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return contact
          }
        }).map((contact) => {
          return (
            <li key={contact.id} id={`${contact.id}`} className="contacts__card">
              <div>
                <h2 className="contacts__name contacts__text">{contact.name}</h2>
                <a href={`mailto:${contact.email}`} className="contacts__email contacts__text">{contact.email}</a>
                <p className="contacts__phone contacts__text">{contact.phone}</p>
              </div>

              <Remove
                className="contacts__button contacts__button--remove"
                onclick={onRemoveClick} />
              <Edit
                className="contacts__button contacts__button--edit"
                onclick={onEditClick} />
            </li>
          )
        })}
        <EditForm
          isEditFormActive={isEditFormActive}
          editName={editName}
          editEmail={editEmail}
          editPhone={editPhone}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onPhoneChange={onPhoneChange}
          onformsubmit={onFormSubmit}
          onformoverlaymousedown={onFormOverlayMouseDown} />
      </ul>
    </div>
  )
}

export default Contacts;