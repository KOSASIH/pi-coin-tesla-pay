import React from 'react';
import Card from '../components/Card';

interface CardContainerProps {
  cards: Array<{ title: string; text: string }>;
}

const CardContainer: React.FC<CardContainerProps> = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} text={card.text} />
      ))}
    </div>
  );
};

export default CardContainer;
