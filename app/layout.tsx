"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";
import BreadCrumbs from "@/components/layouts/BreadCrumbs";
import GlobalInitializer from "@/components/layouts/GlobalInitializer";
import ArticleFooter from "@/components/layouts/articles/Footer";
import ArticleHeader from "@/components/layouts/articles/Header";
import ManageHeader from "@/components/layouts/manages/Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { SWRConfig } from "swr";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isManager = pathname.includes("/manage");

  return (
    <html lang="ja">
      <head>
        <title>Title</title>
        <meta name="description" content="Description" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        ></link>
      </head>
      <body
        className={`min-h-screen
        ${isManager ? "bg-manage-primary-color" : "bg-primary-color"}`}
      >
        <RecoilRoot>
          <SWRConfig
            value={{
              revalidateOnFocus: false,
              revalidateOnReconnect: false,
              shouldRetryOnError: false,
            }}
          >
            <GlobalInitializer pathname={pathname} />
            {isManager ? (
              <>
                <ManageHeader />
                <div className="const-header-mt ml-6 py-2 bg-manage-primary-color text-white">
                  <BreadCrumbs />
                </div>
                <main className="w-full utl-flex-center">
                  <div className="utl-w-96per m-1 rounded bg-slate-50 p-4 z-15">
                    {children}
                  </div>
                </main>
              </>
            ) : (
              <>
                <ArticleHeader />
                <main className="max-w-5xl mx-auto">{children}</main>
                <ArticleFooter />
              </>
            )}
          </SWRConfig>
        </RecoilRoot>
      </body>
    </html>
  );
}
