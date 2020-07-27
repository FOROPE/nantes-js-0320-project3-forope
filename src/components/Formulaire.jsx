import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import { Flex, TextContent, InputForm } from '../mainStyle';

const FormContainer = styled.form`
  margin: auto;
  width: 50%;
  padding: 1rem 4rem 1rem 4rem;
  background-color: ${(props) => props.theme.orange};
  color: white;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

const TitlesFormContainer = styled.div`
  align-items: start;
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const TitleForm = styled.h3`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 0;
  text-transform: uppercase;
`;

const MainText = styled(TextContent)`
  text-align: left;
  margin-left: 0;
  margin-top: 0;
`;

const InputsContainer = styled(Flex)`
  width: 100%;
  margin-right: 4rem;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const AllInputs = styled(Flex)`
  width: 40%;
  justify-content: flex-start;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const OneInput = styled(InputForm)`
  box-sizing: border-box;
`;

const ButtonForm = styled.input`
  max-width: 8rem;
  padding: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  text-transform: uppercase;
  background-color: white;
  border-style: double;
  border-color: white;
`;

export default function Form() {
  const send = () => toast.success('Forope vous contactera prochainement.');
  const errorForm = () => toast('Il y a un problème.');

  const [user, setUser] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  // eslint-disable-next-line camelcase
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const postUser = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const list = await axios.post(`http://localhost:5000/form`, {
        name,
        company,
        email,
        phone,
      });
      setUser(user.data);
      setName('');
      setCompany('');
      setEmail('');
      setPhone('');
      send();
    } catch (err) {
      setError(err);
      errorForm();
    }
  };

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddCompany = (e) => {
    setCompany(e.target.value);
  };

  // eslint-disable-next-line camelcase
  const handleAddEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddPhone = (e) => {
    setPhone(e.target.value);
  };

  return (
    <>
      <FormContainer onSubmit={postUser}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <TitlesFormContainer>
          <TitleForm>Etre rappelé</TitleForm>
          <MainText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque
            voluptatem repellat non dignissimos ullam pariatur.
          </MainText>
        </TitlesFormContainer>
        <Container>
          <InputsContainer>
            <AllInputs col>
              <OneInput
                type="text"
                name="name"
                placeholder="Nom Prénom"
                onChange={handleAddName}
                value={name}
              />
              <OneInput
                type="text"
                name="company"
                placeholder="Entreprise"
                onChange={handleAddCompany}
                value={company}
              />
            </AllInputs>
            <AllInputs col>
              <OneInput
                type="tel"
                name="phone"
                placeholder="Téléphone"
                pattern="[0-9]{10}"
                required
                onChange={handleAddPhone}
                value={phone}
              />
              <OneInput
                type="email"
                name="email"
                placeholder="Email"
                // eslint-disable-next-line camelcase
                onChange={handleAddEmail}
                // eslint-disable-next-line camelcase
                value={email}
              />
            </AllInputs>
          </InputsContainer>
          <ButtonForm type="submit" value="Etre rappelé" />
        </Container>
      </FormContainer>
    </>
  );
}
