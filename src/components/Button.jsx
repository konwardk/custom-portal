export const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {text}
    </button>
  )
}