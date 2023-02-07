function Item (prompt) {
    return (
        <ul className="text-white flex justify-between border-b border-dashed	">
          <li>{prompt.name}</li>
          <li>${prompt.price}</li>
        </ul>
    )
}

export default Item;