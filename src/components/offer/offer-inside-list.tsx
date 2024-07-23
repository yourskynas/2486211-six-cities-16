const OfferInsideItem = ({good}: {good: string}): JSX.Element => (
  <li className="offer__inside-item">
    {good}
  </li>
);

const OfferInsideList = ({goods}: {goods: string[]}): JSX.Element => (
  <ul className="offer__inside-list">
    {goods.map((good) => <OfferInsideItem key={good} good={good} />)}
  </ul>
);

export default OfferInsideList;

