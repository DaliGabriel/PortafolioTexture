import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  return (
    <div className="relative flex flex-col min-h-screen text-slate-800  break-words ">
      <Navbar isOnBlogSection={true} />
      <main className="mx-7 lg:mx-6 mt-10 flex-grow ">
        {/* Scroll carrousel right here. */}
        <div className="mt-36 mb-8 w-full text-center">
          <section className="py-16 dark:bg-gray-900 dark:text-gray-100 bg-gray-100 rounded">
            <div className="container mx-auto px-4">
              <Post />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }];
}

export const dynamicParams = false;
