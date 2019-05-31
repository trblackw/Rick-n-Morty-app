import React from 'react';
import ReactLoading from 'react-loading';

interface Props {
   type?: 'blank' | 'balls' | 'bars' | 'bubbles' | 'cubes' | 'cylon' | 'spin' | 'spinningBubbles' | 'spokes' | undefined;
   height?: string;
   width?: string;
   color?: string;
}

const Loading: React.FC<Props> = ({ type = 'spin', color = 'hsl(24, 100%, 54%)' }): JSX.Element => (
   <div className='mx-auto w-full text-center bg-indigo-600 h-screen flex justify-center p-10'>
      <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
   </div>
);

export default Loading;
