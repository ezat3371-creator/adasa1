import { useState } from "react";
import { Link } from "react-router-dom";

import PostCard from "../components/PostCard.jsx";
import { Loading, ErrorMessage } from "../components/StateMessages.jsx";

// أيقونة Bootstrap لكل تصنيف
const categoryIcons = {
  معدات: "bi-camera",
  أساسيات: "bi-sliders",
  إضاءة: "bi-brightness-high",
  تكوين: "bi-grid-3x3",
  "تصوير شارع": "bi-buildings",
  معالجة: "bi-magic",
  بورتريه: "bi-person",
  "مناظر طبيعية": "bi-tree",
  "سير العمل": "bi-folder2-open",
};

function Home({ posts, loading, error }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const latestPosts = posts.slice(0, 3);
  const featuredPosts = posts.slice(0, 2);

  const authors = [];
  posts.forEach((post) => {
    if (!authors.includes(post.author)) {
      authors.push(post.author);
    }
  });

  const categories = [];
  posts.forEach((post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
  });

  function countInCategory(category) {
    return posts.filter((post) => post.category === category).length;
  }

  function handleSubscribe(event) {
    event.preventDefault();

    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <div>
      {/* الهيرو */}
      <section className="bg-ink py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative">
          <span className="inline-flex items-center gap-2 bg-surface border border-line text-neutral-300 text-sm px-5 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-safelight"></span>
            مرحباً بك في عدسة
          </span>

          <h1 className="text-3xl md:text-5xl font-black leading-snug max-w-3xl mx-auto mb-5">
            اكتشف <span className="text-safelight">فن</span> التصوير
            الفوتوغرافي
          </h1>

          <p className="text-neutral-400 max-w-xl mx-auto text-lg mb-8">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              className="border border-line text-white font-bold px-7 py-2.5 rounded-xl"
              to="/about"
            >
              اعرف المزيد <i className="bi bi-info-circle"></i>
            </Link>
            <Link
              className="bg-gradient-to-r from-safelight to-orange-600 text-white font-bold px-7 py-2.5 rounded-xl"
              to="/blog"
            >
              استكشف المقالات <i className="bi bi-arrow-left"></i>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-surface border border-line rounded-xl py-5 px-2 text-center">
              <i className="bi bi-journal-text text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{posts.length}+</h3>
              <p className="text-muted text-sm">مقالة</p>
            </div>
            <div className="bg-surface border border-line rounded-xl py-5 px-2 text-center">
              <i className="bi bi-people text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">10 آلاف+</h3>
              <p className="text-muted text-sm">قارئ</p>
            </div>
            <div className="bg-surface border border-line rounded-xl py-5 px-2 text-center">
              <i className="bi bi-folder text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{categories.length}</h3>
              <p className="text-muted text-sm">تصنيفات</p>
            </div>
            <div className="bg-surface border border-line rounded-xl py-5 px-2 text-center">
              <i className="bi bi-pencil text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{authors.length}</h3>
              <p className="text-muted text-sm">كتّاب</p>
            </div>
          </div>
        </div>
      </section>

      {loading && (
        <div className="container mx-auto px-4 py-14">
          <Loading />
        </div>
      )}

      {!loading && error && (
        <div className="container mx-auto px-4 py-14">
          <ErrorMessage message={error} />
        </div>
      )}

      {!loading && !error && (
        <>
          {/* مقالات مختارة */}
          <section className="container mx-auto px-4 py-14">
            <div className="flex justify-between items-end mb-7 flex-wrap gap-3">
              <div>
                <span className="inline-flex items-center gap-2 text-safelight font-bold text-sm mb-2">
                  <span className="w-2 h-2 rounded-full bg-safelight"></span>
                  مميز
                </span>
                <h2 className="text-2xl font-black">مقالات مختارة</h2>
                <p className="text-muted mt-1">محتوى منتقى لبدء رحلة تعلمك</p>
              </div>
              <Link
                className="px-5 py-2.5 bg-gradient-to-r from-safelight to-orange-600 text-white rounded-xl font-medium"
                to="/blog"
              >
                عرض الكل
              </Link>
            </div>

            <div className="space-y-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  to={"/blog/" + post.id}
                  className="grid md:grid-cols-2 gap-0 bg-surface border border-line rounded-3xl overflow-hidden hover:border-safelight/30 transition-colors"
                >
                  <div className="relative h-64 md:h-[380px]">
                    <img
                      className="w-full h-full object-cover"
                      src={post.image}
                      alt={post.title}
                    />
                    <span className="absolute top-4 start-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-safelight to-orange-400 text-white text-xs font-semibold rounded-full">
                      <i className="bi bi-star-fill"></i> مميز
                    </span>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-safelight/10 text-safelight text-xs font-semibold rounded-full border border-safelight/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted">
                        <i className="bi bi-clock"></i> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {post.author}
                        </p>
                        <p className="text-xs text-muted">{post.date}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-safelight font-semibold text-sm">
                        اقرأ المقال <i className="bi bi-arrow-left"></i>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* استكشف حسب الموضوع */}
          <section className="container mx-auto px-4 py-14">
            <div className="text-center mb-7">
              <span className="text-safelight font-bold text-sm block mb-2">
                التصنيفات
              </span>
              <h2 className="text-2xl font-black mb-2">
                استكشف حسب الموضوع
              </h2>
              <p className="text-muted">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={"/blog?category=" + category}
                  className="bg-surface border border-line rounded-2xl p-6 text-center hover:border-safelight/30 transition-colors"
                >
                  <div className="w-12 h-12 bg-safelight/10 border border-safelight/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <i
                      className={
                        "bi text-xl text-safelight " +
                        (categoryIcons[category]
                          ? categoryIcons[category]
                          : "bi-tag")
                      }
                    ></i>
                  </div>
                  <h4 className="font-bold mb-1">{category}</h4>
                  <p className="text-muted text-sm">
                    {countInCategory(category)} مقالة
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* أحدث المقالات */}
          <section className="container mx-auto px-4 py-14">
            <div className="flex justify-between items-end mb-7 flex-wrap gap-3">
              <h2 className="text-2xl font-black">أحدث المقالات</h2>
              <Link className="text-safelight font-bold" to="/blog">
                عرض جميع المقالات
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestPosts.map((post) => (
                <PostCard key={post.id} post={post} view="grid" />
              ))}
            </div>
          </section>

          {/* النشرة البريدية */}
          <section className="container mx-auto px-4 py-14">
            <div className="bg-surface border border-line rounded-3xl py-12 px-6 md:px-16 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-safelight to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-envelope-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3">
                اشترك في <span className="text-safelight">نشرتنا الإخبارية</span>
              </h3>
              <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-8">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>

              {subscribed ? (
                <p className="text-safelight font-bold">
                  تم الاشتراك بنجاح، شكرًا لك!
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="flex-1 rounded-xl px-5 py-4 bg-ink border border-line text-white placeholder-muted focus:outline-none focus:border-safelight/50"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-safelight to-orange-600 text-white font-semibold rounded-xl"
                  >
                    اشترك الآن
                  </button>
                </form>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
