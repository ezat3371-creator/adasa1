import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import PostCard from "../components/PostCard.jsx";
import Pagination from "../components/Pagination.jsx";
import { Loading, ErrorMessage } from "../components/StateMessages.jsx";

function Blog({ posts, loading, error }) {
  // لو جينا من رابط فيه ?category=... (كروت التصنيفات في الرئيسية)
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    categoryFromUrl ? categoryFromUrl : "all"
  );
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  // نجمع الـ Categories الموجودة في الداتا من غير تكرار
  const categories = [];

  posts.forEach((post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
  });

  // البحث بالعنوان
  let filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // الفلترة بالتصنيف
  if (category !== "all") {
    filteredPosts = filteredPosts.filter(
      (post) => post.category === category
    );
  }

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setCurrentPage(1);
  }

  function handleCategoryClick(value) {
    setCategory(value);
    setCurrentPage(1);
  }

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="mb-7">
        <h1 className="text-3xl font-black mb-2">استكشف مقالاتنا</h1>
        <p className="text-muted">
          دوّر على موضوع معين، أو اختار تصنيف وشوف كل اللي فيه.
        </p>
      </div>

      {/* أزرار التصنيفات */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          onClick={() => handleCategoryClick("all")}
          className={
            "rounded-full px-4 py-2 text-sm font-semibold border " +
            (category === "all"
              ? "bg-safelight border-safelight text-white"
              : "bg-surface border-line text-inksoft")
          }
        >
          جميع المقالات
        </button>

        {categories.map((item) => (
          <button
            key={item}
            onClick={() => handleCategoryClick(item)}
            className={
              "rounded-full px-4 py-2 text-sm font-semibold border " +
              (category === item
                ? "bg-safelight border-safelight text-white"
                : "bg-surface border-line text-inksoft")
            }
          >
            {item}
          </button>
        ))}
      </div>

      {/* البحث وعرض الشبكة/القائمة */}
      <div className="flex flex-col md:flex-row gap-3 items-center bg-surface border border-line rounded-lg p-4 mb-6">
        <div className="relative flex-1 w-full">
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="ابحث في المقالات..."
            className="w-full border border-line bg-surface text-white placeholder-muted rounded px-4 py-2 pe-10"
          />
          <i className="bi bi-search absolute top-1/2 -translate-y-1/2 end-3 text-muted"></i>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            title="عرض شبكة"
            className={
              "w-11 h-11 rounded border flex items-center justify-center " +
              (view === "grid"
                ? "bg-safelight border-safelight text-white"
                : "bg-surface border-line text-inksoft")
            }
          >
            <i className="bi bi-grid-3x3-gap"></i>
          </button>
          <button
            onClick={() => setView("list")}
            title="عرض قائمة"
            className={
              "w-11 h-11 rounded border flex items-center justify-center " +
              (view === "list"
                ? "bg-safelight border-safelight text-white"
                : "bg-surface border-line text-inksoft")
            }
          >
            <i className="bi bi-list-ul"></i>
          </button>
        </div>
      </div>

      {loading && <Loading />}
      {!loading && error && <ErrorMessage message={error} />}

      {!loading && !error && (
        <div>
          <p className="text-muted mb-5">عرض {filteredPosts.length} مقالة</p>

          {filteredPosts.length === 0 ? (
            <div className="text-center border border-dashed border-line bg-surface rounded-lg py-14 px-5 text-inksoft">
              <i className="bi bi-search text-safelight text-3xl"></i>
              <p className="mt-3 mb-0">
                مفيش مقالات مطابقة. جرّب كلمة تانية أو اختار تصنيف تاني.
              </p>
            </div>
          ) : (
            <div
              className={
                view === "list"
                  ? "grid grid-cols-1 gap-4"
                  : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              }
            >
              {currentPosts.map((post) => (
                <PostCard key={post.id} post={post} view={view} />
              ))}
            </div>
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {totalPages > 1 && (
            <p className="text-center text-muted text-sm mt-2">
              صفحة {currentPage} من {totalPages}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default Blog;
