"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  return (
    <div className={cn(
      "prose dark:prose-invert max-w-none",
      "prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight",
      "prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-6",
      "prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-10 prose-h2:pb-1 prose-h2:border-b",
      "prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8",
      "prose-p:my-4 prose-p:leading-7",
      "prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:rounded-sm",
      "prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6",
      "prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6",
      "prose-li:my-2",
      "prose-table:border-collapse prose-table:w-full",
      "prose-th:border prose-th:border-muted-foreground/20 prose-th:p-2 prose-th:bg-muted/50",
      "prose-td:border prose-td:border-muted-foreground/20 prose-td:p-2",
      "prose-img:rounded-md prose-img:my-6 prose-img:mx-auto",
      "prose-hr:my-6 prose-hr:border-muted-foreground/20",
      "prose-strong:font-bold prose-strong:text-foreground",
      "prose-em:italic",
      "prose-code:bg-muted prose-code:p-1 prose-code:rounded-sm prose-code:text-sm",
      "prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto",
      className
    )}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h1 id={id} className="text-3xl font-bold tracking-tight mt-6 mb-4 pb-1 border-b scroll-mt-20" {...props}>
                {children}
              </h1>
            );
          },
          h2: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h2 id={id} className="text-2xl font-bold tracking-tight mt-10 mb-3 pb-1 border-b scroll-mt-20" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h3 id={id} className="text-xl font-bold tracking-tight mt-8 mb-3 scroll-mt-20" {...props}>
                {children}
              </h3>
            );
          },
          p: (props) => (
            <p className="my-4 leading-7" {...props} />
          ),
          ul: (props) => (
            <ul className="my-4 list-disc pl-6" {...props} />
          ),
          ol: (props) => (
            <ol className="my-4 list-decimal pl-6" {...props} />
          ),
          li: (props) => (
            <li className="my-2" {...props} />
          ),
          blockquote: (props) => (
            <blockquote className="border-l-4 border-primary/20 pl-4 py-1 italic bg-muted/50 rounded-sm my-4" {...props} />
          ),
          table: (props) => (
            <div className="overflow-x-auto my-6">
              <table className="border-collapse w-full" {...props} />
            </div>
          ),
          th: (props) => (
            <th className="border border-muted-foreground/20 p-2 bg-muted/50 font-bold" {...props} />
          ),
          td: (props) => (
            <td className="border border-muted-foreground/20 p-2" {...props} />
          ),
          a: (props) => (
            <a className="text-primary hover:underline" {...props} />
          ),
          img: (props) => (
            <img
              className="rounded-md my-6 mx-auto max-h-96"
              alt="Contenido del curso"
              {...props}
            />
          ),
          hr: (props) => (
            <hr className="my-6 border-muted-foreground/20" {...props} />
          ),
          code: (props: any) => {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || '');
            const isInline = !match;

            return !isInline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-md my-6"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-muted p-1 rounded-sm text-sm">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
