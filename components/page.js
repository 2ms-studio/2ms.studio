import Head from '../components/head';

const Page = ({
    align = 'flex-start',
    direction = 'column',
    children,
} = {}) => (
    <div>
        <Head />
        {children}
        <style jsx>{`
            div {
                min-height: 100vh;
                display: flex;
                flex-direction: ${direction};
                align-items: center;
                justify-content: ${align};
                padding: 2em;
            }
        `}</style>
    </div>
);
export default Page;
