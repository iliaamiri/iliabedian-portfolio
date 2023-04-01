import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function code({className, ...props}: any) {
    const match = /language-(\w+)/.exec(className || '')
    return match
        ? <SyntaxHighlighter language={match[1]} PreTag="div" {...props} style={vs2015} />
        : <code className={className} {...props} />
}
