import React from 'react';
import ReactFlow, { addEdge, removeElements, Controls } from 'react-flow-renderer';

interface FlowCanvasComponentProps {
  initialElements: any[];
  getId: () => string;
}

function FlowCanvasComponent(props: FlowCanvasComponentProps) {
  const reactFlowWrapper = React.useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = React.useState(null);

  const [elements, setElements] = React.useState(props.initialElements);

  const onConnect = params => setElements(els => addEdge(params, els));

  const onElementsRemove = elementsToRemove => setElements(els => removeElements(elementsToRemove, els));

  const onLoad = _reactFlowInstance => setReactFlowInstance(_reactFlowInstance);

  const onDragOver = event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onDrop = event => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      id: props.getId(),
      type,
      position,
      data: { label: `${type}` },
    };
    setElements(es => es.concat(newNode));
  };

  return (
    <div className="reactflow-wrapper" style={{ height: '90vh', width: '100%' }} ref={reactFlowWrapper}>
      <ReactFlow
        elements={elements}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onLoad={onLoad}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

export { FlowCanvasComponent };
