import Button from "./Button";

const Child = ({ name }) => {
  console.log(name);
  return (
    <>
      <div>Child {name}</div>
      <Button />
    </>
  );
};

export default Child;
