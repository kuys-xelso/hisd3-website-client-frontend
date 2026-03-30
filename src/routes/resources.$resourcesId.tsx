import { createFileRoute, Link } from "@tanstack/react-router";
import { apolloClient } from "@/lib/apollo";
import { GET_ARTICLE_BY_ID } from "@/graphql/queries";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { ArticleSkeleton } from "@/components/ArticleSkeleton";
import { useArticle } from "@/hooks/useArticle";
import DOMPurify from "dompurify";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { FacebookIcon, XIcon, LinkedinIcon } from "@/components/Icons";

export const Route = createFileRoute("/resources/$resourcesId")({
  loader: async ({ params }) => {
    try {
      const { data } = await apolloClient.query({
        query: GET_ARTICLE_BY_ID,
        variables: { articleId: params.resourcesId },
      });
      return { article: data?.article };
    } catch (e) {
      console.error(e);
      return { article: null };
    }
  },
  head: ({ loaderData, params }) => {
    const article = loaderData?.article;
    const title = article?.title ? `${article.title} | HISD3 Resources` : 'Resource Article | HISD3';
    const description = article?.excerpt || 'Read our latest insights, case studies, and resources.';
    const currentUrl = `https://hisd3-web-frontend.vercel.app/resources/${params.resourcesId}`;
    const rawImage = article?.media?.[0]?.url;
    const ogImage = rawImage 
      ? (rawImage.startsWith('http') ? rawImage : `https://hisd3-web-frontend.vercel.app${rawImage}`) 
      : 'https://github.com/shadcn.png';

    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:type', content: 'article' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: ogImage },
        { property: 'og:url', content: currentUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: ogImage },
      ],
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { resourcesId } = Route.useParams();

  const { article, relatedArticles, formattedDate, loading } =
    useArticle(resourcesId);

  if (loading) {
    return <ArticleSkeleton />;
  }


  if (!article) {
    return (
      <Section size="lg" className="text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            We couldn't find the article you're looking for.
          </p>
          <Link to="/resources">
            <Button variant="default">Back to Resources</Button>
          </Link>
        </Container>
      </Section>
    );
  }

  return (
    <Section
      size="none"
      className="relative pt-20 pb-10 bg-gradient-to-b from-white/60 to-slate-50/60"
    >
      <Container>
        <div className="grid grid-cols-12">
          <div className="flex flex-col gap-8 w-full lg:col-span-9 col-span-12 px-4 sm:px-6 mb-10">
            <div className="flex items-center sm:gap-2">
              <Separator orientation="vertical" className="h-4" />
              {formattedDate && (
                <p className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground/70">
                  {formattedDate}
                </p>
              )}
              {formattedDate && article.category?.name && (
                <Separator orientation="vertical" className="h-4" />
              )}
              {article.category?.name && (
                <Badge className="text-md font-regular bg-white/80 text-primary px-2 py-1 rounded-md">
                  {article.category.name}
                </Badge>
              )}
            </div>
            <h1 className="text-left text-primary text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
              {article.title}
            </h1>
            {article.author?.username && (
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <p className="text-base font-medium">
                    {article.author.username}
                  </p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-0 flex flex-col lg:flex-row items-start gap-10 px-4 sm:px-6">
          <div className="flex-1 min-w-0 flex flex-col gap-10">
            {article.media?.[0]?.url && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50 group">
                <img
                  src={article.media[0].url}
                  alt={article.title || "Resource Image"}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
              </div>
            )}
            <div className="blog-details blog-content-body prose prose-lg dark:prose-invert max-w-none w-full break-words overflow-hidden prose-headings:text-primary prose-headings:tracking-tight prose-p:text-muted-foreground/90 prose-p:leading-relaxed">
              {article.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(article.content, {
                      ADD_ATTR: ["style"],
                    }),
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col gap-8 lg:sticky lg:top-28 h-fit w-full lg:w-80 shrink-0">
            {/* Share Section */}
            <div className="flex flex-col gap-4 p-4 border rounded-xl bg-card">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Share2 className="w-4 h-4" />
                <span>Share this article</span>
              </div>

              <div className="flex gap-1">
                <a
                  href="https://www.facebook.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex w-fit"
                >
                  <FacebookIcon className="w-6 h-6 text-primary hover:text-primary transition-transform hover:scale-120" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex w-fit"
                >
                  <LinkedinIcon className="w-6 h-6 text-primary hover:text-primary transition-transform hover:scale-120" />
                </a>
                <a
                  href="https://www.twitter.com"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="flex w-fit"
                >
                  <XIcon className="w-6 h-6 text-primary hover:text-primary transition-transform hover:scale-120" />
                </a>
              </div>
            </div>

            {/* Related Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 px-1 mb-2">
                More from HISD3
              </h3>
              <div className="flex flex-col gap-4">
                {relatedArticles.map((item: any) => (
                  <Link
                    key={item.id}
                    to="/resources/$resourcesId"
                    params={{ resourcesId: item.id }}
                    className="group flex flex-col gap-2 p-3 rounded-xl hover:bg-accent transition-colors border border-transparent hover:border-border"
                  >
                    {item.media?.[0]?.url && (
                      <img
                        src={item.media[0].url}
                        alt={item.title}
                        className="w-full h-32 object-cover rounded-lg mb-1"
                      />
                    )}
                    <Badge
                      variant="secondary"
                      className="w-fit text-[10px] uppercase font-bold"
                    >
                      {item.category?.name}
                    </Badge>
                    <h4 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
