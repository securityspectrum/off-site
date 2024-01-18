import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

interface Props {
    children: React.ReactNode;
}

const ParallaxContainer: React.FC<Props> = ({ children }) => {
    return <ParallaxProvider>{children}</ParallaxProvider>;
};

export default ParallaxContainer;