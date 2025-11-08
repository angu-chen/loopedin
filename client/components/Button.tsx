interface Props {
  text: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({ handleClick, text }: Props) {
  return (
    <div className="p-10 text-right">
      <button
        id="edit"
        onClick={handleClick}
        className="absolute right-36 top-auto rounded-3xl border-2 border-blue-950 p-4 text-xl font-semibold hover:bg-blue-300"
      >
        {text}
      </button>
    </div>
  )
}
