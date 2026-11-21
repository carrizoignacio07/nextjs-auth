export const Button = () => {
  const styles =
    "text-white bg-green-500 box-border border border-transparent hover:bg-green-600 shadow-xs font-medium leading-5 rounded-base text-base px-4 py-2.5 focus:outline-none cursor-pointer transition duration-150 ease-in-out";
  return (
    <button type="button" className={styles}>
      Click me
    </button>
  );
};
