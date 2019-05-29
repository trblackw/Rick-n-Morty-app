import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
   children: ReactNode | JSX.Element;
   minColumnWidth?: number;
   gridGap?: number;
   overflow?: 'auto' | 'scroll' | 'visible';
}

const Grid: React.FC<Props> = ({ children, minColumnWidth = 250, gridGap = 0, overflow = 'visible' }): JSX.Element => (
   <GridContainer minColumnWidth={minColumnWidth} gridGap={gridGap} overflow={overflow}>
      {children}
   </GridContainer>
);

const AutoGrid = (minColumnWidth: number = 250, gridGap: number = 0, overflow = 'visible') => ({
   display: 'grid',
   gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
   gridGap,
   overflow
});

const GridContainer = styled.div(
   ({ minColumnWidth, gridGap, overflow }: { minColumnWidth: number; gridGap: number; overflow: string }) => ({
      ...AutoGrid(minColumnWidth, gridGap, overflow)
   })
);

export default Grid;
