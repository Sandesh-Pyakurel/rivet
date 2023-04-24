import { FC } from 'react';
import { IfElseNode } from '../../model/nodes/IfElseNode';
import { useRecoilValue } from 'recoil';
import { lastRunData } from '../../state/dataFlow';
import { RenderDataValue } from '../RenderDataValue';
import { PortId } from '../../model/NodeBase';

export type IfElseNodeBodyProps = { node: IfElseNode };

export const IfElseNodeBody: FC<IfElseNodeBodyProps> = () => {
  return null;
};

export const IfElseNodeEditor: FC<IfElseNodeBodyProps> = () => {
  return null;
};

export const IfElseNodeOutput: FC<IfElseNodeBodyProps> = ({ node }) => {
  const output = useRecoilValue(lastRunData(node.id));

  if (!output) {
    return null;
  }

  if (output.status?.type === 'error') {
    return <div>Error: {output.status.error}</div>;
  }

  if (!output.outputData) {
    return null;
  }

  const outputData = output.outputData?.['output' as PortId];

  return (
    <div>
      <RenderDataValue value={outputData} />
    </div>
  );
};
