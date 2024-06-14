"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "@/features/articles/components/Card";
import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import Category from "@/features/articles/components/Category";

export default function ArticleList() {
  const { data, isError, isLoading } = useGetArticleList();

  console.log(data);

  return (
    <div className="Content pt-24 flex z-0">
      <div className="Left w-2/3">
        <div className="Info bg-secondary-color min-h-48 pb-10">
          <div className="Search h-16 flex justify-start bg-secondary-color border-b-2 border-black ">
            <div
              className="Searches ml-6 m-3 flex items-center bg-tertiary-color border 
            border-tertiary-color flex rounded-xl"
            >
              <FontAwesomeIcon
                className="bg-tertiary-color text-2xl text-white border-2 
            border-tertiary-color flex rounded-l-xl"
                icon={faMagnifyingGlass}
              />
              <input
                type="text"
                placeholder="Type here"
                className="Search w-80 h-8 bg-tertiary-color border-2 
            border-tertiary-color flex rounded-r-xl"
              ></input>
            </div>
            <div className="Pagination w-72 flex justify-end place-items-end">
              <div className="join">
                <button className="join-item btn">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
              </div>
            </div>
          </div>
          <div className="Case m-4">
            <div className="Select h-12 flex justify-end">
              <a
                href=""
                className="New my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs shadow-md shadow-gray-400"
              >
                新しい投稿順
              </a>
              <a
                href=""
                className="Old  my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs shadow-md shadow-gray-400"
              >
                古い投稿順
              </a>
              <a
                href=""
                className="Popular my-3 mx-1 min-w-32 h-5 border-2 
            border-black flex justify-center rounded-xl text-xs shadow-md shadow-gray-400"
              >
                人気順
              </a>
            </div>
            <div className="Cards">
              {data?.map((items, index) => {
                return (
                  <Card
                    key={index}
                    fields={{
                      id: items.id,
                      imagePath: items.images[0].path,
                      imageAlt: items.images[0].alt,
                      tags: items.tags,
                      title: items.title,
                      name: items.name,
                      jpName: items.jp_name,
                      appearances: items.appearances,
                      postedAt: items.post_at,
                      preview: items.preview,
                      author: items.user.username,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="Right ml-4 w-1/3">
        <div className="Advertisement bg-white mb-4 h-48">広告</div>
        <div>
          <div className="Category">
            <Category />
          </div>
        </div>
      </div>
    </div>
  );
}
function insertUrlWithPath(url: any, arg1: { article_id: string }) {
  throw new Error("Function not implemented.");
}
