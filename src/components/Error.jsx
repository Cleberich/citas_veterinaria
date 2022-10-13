

const Error = ({error}) => {
  return (
    <div>
        <p className="text-white bg-red-700 py-2 mb-2 rounded-md text-xs text-center uppercase">{error}</p>
    </div>
  )
}

export default Error