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
      "prose dark:prose-invert max-w-none prose-sm sm:prose-base",
      "prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight",
      "prose-h1:text-xl sm:prose-h1:text-2xl md:prose-h1:text-3xl prose-h1:mb-3 sm:prose-h1:mb-4 prose-h1:mt-4 sm:prose-h1:mt-6",
      "prose-h2:text-lg sm:prose-h2:text-xl md:prose-h2:text-2xl prose-h2:mb-2 sm:prose-h2:mb-3 prose-h2:mt-6 sm:prose-h2:mt-8 md:prose-h2:mt-10 prose-h2:pb-1 prose-h2:border-b",
      "prose-h3:text-base sm:prose-h3:text-lg md:prose-h3:text-xl prose-h3:mb-2 sm:prose-h3:mb-3 prose-h3:mt-5 sm:prose-h3:mt-6 md:prose-h3:mt-8",
      "prose-p:text-sm sm:prose-p:text-base prose-p:my-2 sm:prose-p:my-3 md:prose-p:my-4 prose-p:leading-relaxed sm:prose-p:leading-7",
      "prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:pl-3 sm:prose-blockquote:pl-4 prose-blockquote:py-1 prose-blockquote:italic prose-blockquote:bg-muted/50 prose-blockquote:rounded-sm prose-blockquote:text-sm",
      "prose-ul:my-2 sm:prose-ul:my-3 md:prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5 sm:prose-ul:pl-6",
      "prose-ol:my-2 sm:prose-ol:my-3 md:prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5 sm:prose-ol:pl-6",
      "prose-li:text-sm sm:prose-li:text-base prose-li:my-1 sm:prose-li:my-2",
      "prose-table:border-collapse prose-table:w-full prose-table:text-sm",
      "prose-th:border prose-th:border-muted-foreground/20 prose-th:p-1.5 sm:prose-th:p-2 prose-th:bg-muted/50 prose-th:text-xs sm:prose-th:text-sm",
      "prose-td:border prose-td:border-muted-foreground/20 prose-td:p-1.5 sm:prose-td:p-2 prose-td:text-xs sm:prose-td:text-sm",
      "prose-img:rounded-md prose-img:my-4 sm:prose-img:my-6 prose-img:mx-auto",
      "prose-hr:my-4 sm:prose-hr:my-6 prose-hr:border-muted-foreground/20",
      "prose-strong:font-bold prose-strong:text-foreground",
      "prose-em:italic",
      "prose-code:bg-muted prose-code:p-0.5 sm:prose-code:p-1 prose-code:rounded-sm prose-code:text-xs sm:prose-code:text-sm",
      "prose-pre:bg-muted prose-pre:p-2 sm:prose-pre:p-3 md:prose-pre:p-4 prose-pre:rounded-md prose-pre:overflow-x-auto prose-pre:text-xs sm:prose-pre:text-sm",
      className
    )}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h1 id={id} className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mt-4 sm:mt-6 mb-3 sm:mb-4 pb-1 border-b scroll-mt-20" {...props}>
                {children}
              </h1>
            );
          },
          h2: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h2 id={id} className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight mt-6 sm:mt-8 md:mt-10 mb-2 sm:mb-3 pb-1 border-b scroll-mt-20" {...props}>
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => {
            const id = `heading-${children?.toString().toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <h3 id={id} className="text-base sm:text-lg md:text-xl font-bold tracking-tight mt-5 sm:mt-6 md:mt-8 mb-2 sm:mb-3 scroll-mt-20" {...props}>
                {children}
              </h3>
            );
          },
          p: (props) => (
            <p className="text-sm sm:text-base my-2 sm:my-3 md:my-4 leading-relaxed sm:leading-7" {...props} />
          ),
          ul: (props) => (
            <ul className="text-sm sm:text-base my-2 sm:my-3 md:my-4 list-disc pl-5 sm:pl-6" {...props} />
          ),
          ol: (props) => (
            <ol className="text-sm sm:text-base my-2 sm:my-3 md:my-4 list-decimal pl-5 sm:pl-6" {...props} />
          ),
          li: (props) => (
            <li className="text-sm sm:text-base my-1 sm:my-2" {...props} />
          ),
          blockquote: (props) => (
            <blockquote className="text-sm border-l-4 border-primary/20 pl-3 sm:pl-4 py-1 italic bg-muted/50 rounded-sm my-2 sm:my-3 md:my-4" {...props} />
          ),
          table: (props) => (
            <div className="overflow-x-auto my-4 sm:my-5 md:my-6">
              <table className="border-collapse w-full text-sm" {...props} />
            </div>
          ),
          th: (props) => (
            <th className="border border-muted-foreground/20 p-1.5 sm:p-2 bg-muted/50 font-bold text-xs sm:text-sm" {...props} />
          ),
          td: (props) => (
            <td className="border border-muted-foreground/20 p-1.5 sm:p-2 text-xs sm:text-sm" {...props} />
          ),
          a: (props) => (
            <a className="text-primary hover:underline text-sm sm:text-base" {...props} />
          ),
          img: (props) => (
            <img
              className="rounded-md my-4 sm:my-5 md:my-6 mx-auto max-h-64 sm:max-h-80 md:max-h-96"
              alt="Contenido del curso"
              {...props}
            />
          ),
          hr: (props) => (
            <hr className="my-4 sm:my-5 md:my-6 border-muted-foreground/20" {...props} />
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
                className="rounded-md my-4 sm:my-5 md:my-6 text-xs sm:text-sm"
                customStyle={{ fontSize: '0.8rem' }}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className="bg-muted p-0.5 sm:p-1 rounded-sm text-xs sm:text-sm">
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
