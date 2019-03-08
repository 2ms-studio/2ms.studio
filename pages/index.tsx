import Link from 'next/link';
import { Component } from 'react';
import pages from '../.scraped/urls.json';
import Page from '../components/Page';

const random = (min: number = -40, max: number = 40) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const trans = 0.6;
const red = `rgba(255, 0, 0, ${trans})`;
const green = `rgba(0, 255, 0, ${trans})`;
const blue = `rgba(0, 0, 255, ${trans})`;
const yellow = `rgba(255, 255, 0, ${trans})`;

export default class Home extends Component {
    render() {
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
                <div
                    className="sites"
                    dangerouslySetInnerHTML={{
                        __html: pages[random(0, pages.length - 1)],
                    }}
                />
                <style jsx global>{`
                    @keyframes shadow {
                        0% {
                            text-shadow: ${random()}px 0px 0 ${red},
                                ${random()}px 0px 0 ${green},
                                ${random()}px 0px 0 ${blue},
                                ${random()}px 0px 0 ${yellow};
                        }

                        10% {
                            text-shadow: ${random()}px 0px 0 ${red},
                                ${random()}px 0px 0 ${green},
                                ${random()}px 0px 0 ${blue},
                                ${random()}px 0px 0 ${yellow};
                        }

                        50% {
                            text-shadow: ${random()}px 0px 0 ${red},
                                ${random()}px 0px 0 ${green},
                                ${random()}px 0px 0 ${blue},
                                ${random()}px 0px 0 ${yellow};
                        }

                        70% {
                            text-shadow: ${random()}px 0px 0 ${red},
                                ${random()}px 0px 0 ${green},
                                ${random()}px 0px 0 ${blue},
                                ${random()}px 0px 0 ${yellow};
                        }

                        100% {
                            text-shadow: ${random()}px 0px 0 ${red},
                                ${random()}px 0px 0 ${green},
                                ${random()}px 0px 0 ${blue},
                                ${random()}px 0px 0 ${yellow};
                        }
                    }
                    @keyframes resize {
                        from {
                            max-width: 100ch;
                        }

                        to {
                            max-width: 0%;
                        }
                    }

                    body {
                        background-color: black;
                    }
                    .sites {
                        position: absolute;
                        left: 00px;
                        top: 00px;
                        max-width: 100ch;
                        z-index: -1;
                        pointer-events: none;
                        color: rgba(255, 255, 255, 0.6);
                        animation-duration: 30s, 500s;
                        animation-name: shadow;
                        animation-iteration-count: infinite, 1;
                        animation-direction: alternate, normal;
                        animation-timing-function: ease-out, linear;
                        animation-fill-mode: forwards;
                        animation-delay: 0s;
                        text-shadow: ${random()}px 0px 0 ${red},
                            ${random()}px 0px 0 ${green},
                            ${random()}px 0px 0 ${blue},
                            ${random()}px 0px 0 ${yellow};

                        -webkit-font-smoothing: antialiased;
                    }

                    .sites * {
                        font-weight: normal !important;
                        font-family: 'Helvetica Neue', Helvetica, Arial,
                            sans-serif !important;
                        font-size: 60px !important;
                        line-height: 32px !important;
                        letter-spacing: -3px;
                        word-spacing: 0.2em;
                    }
                `}</style>
            </Page>
        );
    }
}
