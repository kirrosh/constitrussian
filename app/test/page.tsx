import { Heading } from "features/content/elements/Headings";
import MDXContent from "features/content/content.mdx";
import { PartContent } from "features/content/elements/PartContent";

const components = {
  h1: Heading,
  PartContent: PartContent,
};

export default function Page() {
  return (
    <main className="prose lg:prose-xl">
      <MDXContent components={components} />
    </main>
  );
}
