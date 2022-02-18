import * as React from 'react';
import { ReactFlowProvider } from 'react-flow-renderer';
import { FlowCanvasComponent } from '@/components/flow-canvas';
import { NodesSidebarComponent } from '@/components/nodes-sidebar';

const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'input' },
    position: { x: 250, y: 5 },
  },
];
let id = 0;
const getId = () => `dndnode_${id++}`;

function HomePage() {
  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <NodesSidebarComponent />
        <FlowCanvasComponent initialElements={initialElements} getId={getId} />
      </ReactFlowProvider>
    </div>
  );
}

const PureHomePage = React.memo(HomePage);

export { PureHomePage as HomePage };
