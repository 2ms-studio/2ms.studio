import { Component } from 'react';
import posed from 'react-pose';
import Link from 'next/link';
import Page from '../components/Page';

import pages from '../.scraped/urls.json';

const Box = posed.div({
    narrow: { width: '0%', transition: { duration: 10000, ease: 'easeOut' } },
    wide: { width: '100%' },
});

export default class Home extends Component {
    state = { wide: true };

    componentDidMount() {
        setInterval(() => {
            this.setState({ wide: !this.state.wide });
        }, 5000);
    }

    render() {
        const { wide } = this.state;
        return (
            <Page align="center" direction="row">
                <h1>2MS</h1>
                <ul>
                    <li>
                        <Link href="/bio">
                            <a>bio</a>
                        </Link>
                    </li>
                    <li>
                        <a href="mailto:dan@2MS.studio">contact</a>
                    </li>
                </ul>
                <style jsx>{`
                    ul {
                        list-style: none;
                        padding: 0;
                        display: flex;
                    }
                    li:before {
                        padding: 0 1ch;
                        content: '·';
                    }
                `}</style>
                <div className="sites">
                    <Box
                        className="site"
                        pose={wide ? 'wide' : 'narrow'}
                        dangerouslySetInnerHTML={{
                            __html: pages[6],
                        }}
                    />
                </div>
                <style jsx global>{`
                    .sites {
                        position: absolute;
                        top: 0;
                        z-index: -1;
                        pointer-events: none;
                        -webkit-font-smoothing: none;
                    }
                `}</style>
            </Page>
        );
    }
}
