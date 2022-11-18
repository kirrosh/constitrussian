import { ReactNode } from "react";

export const PartContent = ({ children }: { children: ReactNode[] }) => {
  //   console.log("PartContent", children);

  const headings = new Map();

  for (const child of children) {
    // @ts-ignore
    if (typeof child === "object" && child?.type === "h2") {
      headings.set(child, []);
    } else {
      const item = Array.from(headings.entries()).pop();
      if (item) {
        const [heading, content] = item;
        headings.set(heading, [...content, child]);
      }
    }
  }
  const newChildren = Array.from(headings.entries()).map(
    ([heading, content]) => {
      return (
        <>
          {heading}
          <div>{content}</div>
        </>
      );
    }
  );
  return <div>{newChildren}</div>;
};
