import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode | JSX.Element;
    minColumnWidth?: number;
    gridGap?: number;
}

const Grid: React.FC<Props> = ({ children, minColumnWidth = 250, gridGap = 0 }): JSX.Element => (
    <GridContainer minColumnWidth={minColumnWidth} gridGap={gridGap}>
        {children}
    </GridContainer>
);

const AutoGrid = (minColumnWidth: number = 250, gridGap: number = 0) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${minColumnWidth}px, 1fr))`,
    gridGap,
});

const GridContainer = styled.div(({ minColumnWidth, gridGap }: { minColumnWidth: number; gridGap: number }) => ({
    ...AutoGrid(minColumnWidth, gridGap),
}));

export default Grid;
