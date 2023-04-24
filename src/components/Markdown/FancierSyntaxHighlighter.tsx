import SyntaxHighlighter from "react-syntax-highlighter";
import {vs2015} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {useEffect, useState} from "react";

export function FancierSyntaxHighlighter({className, language, ...props}: any) {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => {
                setCopied(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [copied]);

    const handleCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(props.children)
    };

    return (
        <div className={`relative`}>
                <span onClick={handleCopy}  title={copied ? 'copied' : 'copy snippet'} className={`absolute -top-4 md:top-1 -right-4 md:right-1 bg-[#6C5CFF] md:bg-transparent text-white px-2 py-1 rounded-full hover:bg-[#5441FF] cursor-pointer transition-all ease-in-out duration-300`}>
                    {copied
                        ? <img src={'/assets/icons/checkmark-svgrepo-com.svg'} alt={'✅'} className={`w-4 h-4`}/>
                        : <img src={'/assets/icons/copy-svgrepo-com-white.svg'} alt={'📝'} className={`w-4 h-4`} />}
                </span>
            <SyntaxHighlighter language={language} PreTag="div" {...props} style={vs2015} />
        </div>
    );
}
