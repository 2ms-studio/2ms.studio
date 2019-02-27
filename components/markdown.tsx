const Markdown: React.FC = ({ children }) => (
    <div className="markdown">
        {children}
        <style jsx global>{`
            .markdown {
                max-width: 60ch;
            }
            .markdown p {
                text-indent: 2ch;
            }
            .markdown p:first-of-type {
                text-indent: 0;
            }
            .markdown h1 + p em {
                font-variant: small-caps;
                font-style: normal;
            }
        `}</style>
    </div>
);

export default Markdown;
