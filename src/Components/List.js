import React from "react";
import "../App.css";

const List = ({ items, setItems }) => {
  const dragItem = React.useRef(null);
  const dragOverItem = React.useRef(null);

  // handle drag
  const handleSort = () => {
    //duplicate items
    let _items = [...items];

    //remove and save the dragged item content
    const draggedItemContent = _items.splice(dragItem.current, 1)[0];

    //switch the position
    _items.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setItems(_items);
  };
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          className="list-item"
          draggable
          onDragStart={(e) => (dragItem.current = index)}
          onDragEnter={(e) => (dragOverItem.current = index)}
          onDragEnd={handleSort}
          onDragOver={(e) => e.preventDefault()}
        >
          <i className="fa-solid fa-bars"></i>
          <h3>{item}</h3>
        </div>
      ))}
    </div>
  );
};

export default List;
