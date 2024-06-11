"use client";

import LineDotCenter from "@/components/elements/shapes/LineDotCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Card from "@/features/articles/components/Card";
import useGetArticleList from "@/features/articles/hooks/useGetArticleList";
import WorkList from "@/features/articles/components/WorkList";
import TagList from "@/features/articles/components/TagList";

export default function ArticleList() {
  const { data, isError, isLoading } = useGetArticleList();

  console.log(data);

  return (
    <div className="Content pt-24 flex justify-center z-0">
      <div className="Left w-2/3">
        <div className="Info bg-secondary-color h-screen">
          <div className="Search h-16 flex justify-start bg-secondary-color border-b-2 border-black ">
            <FontAwesomeIcon
              className="m-1 text-white"
              icon={faMagnifyingGlass}
            />
            <input
              type="text"
              placeholder="Type here"
              className="Search m-4 w-72 h-8 bg-tertiary-color border-2 
            border-tertiary-color flex rounded-xl"
            ></input>
            <div className="Pagination flex place-items-end">
              <div className="PageNumber ml-24 text-xl">2/30</div>
              <div className="PageString mx-1">ページ目</div>
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
          <div className="Category bg-secondary-color mt-6 pb-8 min-h-96">
            <TagList />
            <WorkList />
          </div>
        </div>
      </div>
    </div>
  );
}
