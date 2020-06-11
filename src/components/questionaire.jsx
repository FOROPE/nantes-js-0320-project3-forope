import React, { useState } from 'react';
import styled from 'styled-components';

const ZoneContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const QuizzContainer = styled.div`
  display: flex;
  flex-direction: column;

  text-align: left;
  margin-left: 3vw;
  width: 40%;
`;

export default function Questionaire() {
  const [YouAre, setYouAre] = useState();
  const [YouWant, setYouWant] = useState();

  const handleChange = (event) => {
    setYouAre(event.target.value);
  };

  const handleChange2 = (event) => {
    setYouWant(event.target.value);
  };

  return (
    <ZoneContainer>
      <QuizzContainer>
        <h2>Comment pouvons-nous vous aider ?</h2>
        <p>
          Pour vous présenter l&apos;offre Forope adaptée à vos besoins, on a
          besoin d&apos;en savoir un tout petit peu plus !
        </p>
        <label htmlFor="persona-selection">
          Vous êtes :
          <select
            type="select"
            name="personas"
            id="persona-selection"
            onChange={handleChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="dirigeant">Dirigeant</option>
            <option value="rh">RH/Formation</option>
            <option value="operations">Opérations</option>
            <option value="particulier">Particulier</option>
          </select>
        </label>

        {YouAre === 'dirigeant' && (
          <>
            <label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                onChange={handleChange2}
              >
                <option value="">--Please choose an option--</option>
                <option value="excellence-oppérationnelle">
                  Excellence oppérationnelle
                </option>
              </select>
            </label>
          </>
        )}

        {YouAre === 'rh' && (
          <>
            <label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                onChange={handleChange2}
              >
                <option value="">--Please choose an option--</option>
                <option value="gpec">
                  GPEC / Transférer les savoir-faire au sein des équipes
                </option>
                <option value="excellence-oppérationnelle">
                  Excellence oppérationnelle
                </option>
                <option value="parcours-integration">
                  Constuire un parcours d&apos;intégration efficace
                </option>
                <option value="competences-management">
                  Développer les compétences en management
                </option>
                <option value="nouveaux-metiers">
                  Former aux nouveaux métiers
                </option>
              </select>
            </label>
          </>
        )}

        {YouAre === 'operations' && (
          <>
            <label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                onChange={handleChange2}
              >
                <option value="">--Please choose an option--</option>
                <option value="former-experts">
                  Former mes experts à transferer leur savoir-faire
                </option>
                <option value="bonnes-pratiques">
                  S&apos;assurer qu&apos;un nouveau salairé adopte les pratiques
                  de l&apos;entreprises
                </option>
                <option value="besoin-formation">
                  Besoin de formation sur des fondamentaux du métier
                </option>
                <option value="competences-management">
                  Développer les compétences en management
                </option>
                <option value="habilitations">Habilitations</option>
              </select>
            </label>
          </>
        )}

        {YouAre === 'particulier' && (
          <>
            <label htmlFor="secondchoice">
              Vous voulez :
              <select
                name="personas"
                id="persona-selection"
                onChange={handleChange2}
              >
                <option value="">--Please choose an option--</option>
                <option value="formation-cpf">Formation CPF</option>
              </select>
            </label>
          </>
        )}

        {YouWant && (
          <div>
            <p>Super, nous pouvons vous aider !</p>
            <p>
              Viens découvrir tout ce qu’on faire, on est des super champions de
              la formation de formateurs.
            </p>
            <button type="button">Découvrir</button>
          </div>
        )}
      </QuizzContainer>

      <img src="" alt="illustration du sujet" />
    </ZoneContainer>
  );
}
