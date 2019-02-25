import Head from './head';
import Canvas from './Canvas';

export interface Props {
    align?: string;
    direction?: string;
    children?: JSX.Element[] | JSX.Element;
}

const Page: React.FC<Props> = ({
    align = 'flex-start',
    direction = 'column',
    children,
}) => (
    <div>
        <Head />
        {children}
        <Canvas />
        <style jsx>{`
            div {
                min-height: 100vh;
                display: flex;
                flex-direction: ${direction};
                align-items: center;
                justify-content: ${align};
                padding: 2em;
                position: relative;
            }
        `}</style>
    </div>
);
export default Page;
