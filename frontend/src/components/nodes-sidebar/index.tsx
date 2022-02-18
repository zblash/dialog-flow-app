import React from 'react';

function NodesSidebarComponent() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside>
      <div className="dndnode input" onDragStart={event => onDragStart(event, 'input')} draggable>
        Input
      </div>
      <div className="dndnode" onDragStart={event => onDragStart(event, 'default')} draggable>
        Default
      </div>
      <div className="dndnode output" onDragStart={event => onDragStart(event, 'output')} draggable>
        Output
      </div>
    </aside>
  );
}

const _NodesSidebarComponent = React.memo(NodesSidebarComponent);

export { _NodesSidebarComponent as NodesSidebarComponent };
