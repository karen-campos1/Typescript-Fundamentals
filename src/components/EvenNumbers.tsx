import { filterNumbers } from '../utils/utils';

const EvenNumbers: React.FC = () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterNumbers(numbers);

  return (
    <div>
      <h2>Even Numbers</h2>
      <ul>
        {evenNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default EvenNumbers;