import React, { useState } from "react";
import ButtonsContainer from "./ButtonsContainer";
import ButtonsContainerHeader from "./ButtonsContainerHeader";
import ButtonsContainerBody from "./ButtonsContainerBody";
import ButtonsContainerFooter from "./ButtonsContainerFooter";
import Button from "./BasicComponents/Button";
import Card from "./BasicComponents/Card";
import CardsList from "./CardsList";
import FilterButtons from "./ButtonsList";
import Title from "./Title";

const App = () => {
  const [filterButtonsState, setFilterButtonsState] = useState(FilterButtons);
  const filteredCardsList = filterCardsList(CardsList);

  return (
    <>
      <ButtonsContainer>
        <ButtonsContainerHeader>
          <Title />
        </ButtonsContainerHeader>
        <ButtonsContainerBody>
          {filterButtonsState.map(filterButton => (
            <Button
              key={filterButton.key}
              filter={filterButton}
              filterCallback={() => setFilterButtonsState([...FilterButtons])}
            />
          ))}
        </ButtonsContainerBody>
        <ButtonsContainerFooter />
      </ButtonsContainer>
      <div>
        {filteredCardsList.map(card => (
          <Card key={card.key} card={card} />
        ))}
      </div>
    </>
  );
};

function filterCardsList(cardsList) {
  const activeFilterButtons = FilterButtons.filter(
    button => button.active === true
  );

  let filteredCardsList = cardsList;

  if (activeFilterButtons.length > 0) {
    const activeColors = activeFilterButtons.map(
      activeFilterButton => activeFilterButton.color
    );

    filteredCardsList = CardsList.filter(card =>
      activeColors.includes(card.color)
    );
  }
  return filteredCardsList;
}

export default App;
