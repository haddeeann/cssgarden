import React, { useEffect } from 'react';
import Prism from 'prismjs';

const CodeBlock = ({ code }) => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return <pre className="language-css dark"><code>{code}</code></pre>;
};

export default CodeBlock;
