

const TypeScriptTypes = () => {
    let greeting: string = "Hello, TypeScript!";
    let numberList: number[] = [5, 10, 15];
    const calculateSum = (a: number, b: number): number => a + b;
  

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>Number List:</h2>
      <ul>
        {numberList.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <h2>Sum of 5 and 10:</h2>
      <p>{calculateSum(5, 10)}</p>
    </div>
  );
};

export default TypeScriptTypes
