interface BackDropProps {
  onClick?: () => void;
}

const BackDrop = ({ onClick }: BackDropProps) => {
  return (
    <div
      onClick={onClick}
      className="fixed left-0 top-0 w-screen h-screen z-40 bg-black opacity-50"
    ></div>
  );
};

export default BackDrop;
