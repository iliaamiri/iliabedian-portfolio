import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useEffect, useState } from 'react';

export function FancierSyntaxHighlighter({
  className,
  language,
  ...props
}: any) {
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
    navigator.clipboard.writeText(props.children);
  };

  return (
    <div className={`relative`}>
      <span
        onClick={handleCopy}
        title={copied ? 'copied' : 'copy snippet'}
        className={`absolute -right-4 -top-4 cursor-pointer rounded-full bg-[#6C5CFF] px-2 py-1 text-white transition-all duration-300 ease-in-out hover:bg-secondaryDawn md:right-1 md:top-1 md:bg-transparent`}
      >
        {copied ? (
          <img
            src={'/assets/icons/checkmark-svgrepo-com.svg'}
            alt={'✅'}
            className={`h-4 w-4`}
          />
        ) : (
          <img
            src={'/assets/icons/copy-svgrepo-com-white.svg'}
            alt={'📝'}
            className={`h-4 w-4`}
          />
        )}
      </span>
      <SyntaxHighlighter
        language={language}
        PreTag='div'
        {...props}
        style={vs2015}
      />
    </div>
  );
}
