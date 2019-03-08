import NextApp, { Container } from 'next/app';
import React from 'react';
import Canvas from '../components/Canvas';

export default class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <>
                <Canvas />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </>
        );
    }
}
