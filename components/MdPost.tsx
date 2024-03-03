import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default function MdPost({ children: markdown }) {
  const mdBody = (
    <ReactMarkdown
      className="prose lg:prose-xl"
      remarkPlugins={[remarkGfm]}
      components={{
        code({
          node,
          inline,
          className,
          children,
          ...props
        }: {
          node: any;
          inline: boolean;
          className: string;
          children: any;
          props: any;
        }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter style={a11yDark} language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className="md-post-code" {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {markdown}
    </ReactMarkdown>
  );

  return mdBody;
}
