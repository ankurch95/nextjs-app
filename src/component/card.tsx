const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border border-white bg-white p-10 px-15 rounded-lg shadow-lg flex-col flex">
      {children}
    </div>
  )
};
export default Card;