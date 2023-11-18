import { FancierSyntaxHighlighter } from '@/components/Markdown/FancierSyntaxHighlighter';

export function code({ className, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');
  return match ? (
    <FancierSyntaxHighlighter language={match[1]} {...props} />
  ) : (
    <code className={className} {...props}>
      `{props.children}`
    </code>
  );
}
