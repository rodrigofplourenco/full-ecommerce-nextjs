import { ReactNode } from "react";

interface IPageProps {
  title: string;
  description: string;
  children: ReactNode
}

export function Page({ title, description, children }: IPageProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-8 pb-16 mx-auto">
        <PageHeader title={title} description={description} />
        <PageContent content={children} />
      </div>
    </section>
  );
}

function PageHeader({ title, description }: { title: string; description: string; }) {
  return (
    <div className="flex flex-wrap w-full mb-12">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{ title }</h1>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{ description }</p>
    </div>
  );
}

function PageContent({ content }: { content: ReactNode }) {
  return (
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      { content }
    </div>
  );
}
