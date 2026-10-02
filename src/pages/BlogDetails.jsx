import { useParams, Link } from "react-router-dom";
import PostCard from "../components/PostCard.jsx";
import { Loading, ErrorMessage } from "../components/StateMessages.jsx";

function BlogDetails({ posts, loading, error }) {
  const params = useParams();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-14">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-14">
        <ErrorMessage message={error} />
      </div>
    );
  }

  const post = posts.find((item) => String(item.id) === params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-14">
        <div className="text-center border border-dashed border-line bg-surface rounded-lg py-14 px-5">
          <i className="bi bi-file-earmark-x text-safelight text-3xl"></i>
          <p className="mt-3">التدوينة دي مش موجودة.</p>
          <Link
            className="inline-block bg-safelight text-white font-bold px-7 py-2.5 rounded mt-3"
            to="/blog"
          >
            ارجع للتدوينات
          </Link>
        </div>
      </div>
    );
  }

  // الفقرات: بنقسم النص عند السطر الفاضي
  const paragraphs = post.content ? post.content.split("\n\n") : [];

  // تدوينات من نفس التصنيف
  const relatedPosts = posts
    .filter((item) => item.category === post.category && item.id !== post.id)
    .slice(0, 3);

  // وسوم بسيطة مبنية على التصنيف (الداتا معندهاش حقل tags منفصل)
  const tags = [post.category, "تصوير فوتوغرافي"];

  function handleCopyLink() {
    navigator.clipboard.writeText(window.location.href);
  }

  return (
    <div className="container mx-auto px-4 py-14">
      {/* مسار التنقل */}
      <div className="flex items-center gap-2 text-muted text-sm mb-5">
        <Link to="/" className="hover:text-safelight">
          الرئيسية
        </Link>
        <i className="bi bi-chevron-left"></i>
        <Link to="/blog" className="hover:text-safelight">
          المدونة
        </Link>
        <i className="bi bi-chevron-left"></i>
        <span>{post.category}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-7 items-start">
        <article className="flex-grow bg-surface border border-line rounded-md p-5 md:p-8">
          <span className="bg-safelight/10 text-safelight text-xs font-semibold px-3 py-1 rounded-full border border-safelight/20 inline-block mb-3">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-black leading-snug mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-muted text-sm mb-5">
            <span>
              <i className="bi bi-person"></i> {post.author}
            </span>
            <span>
              <i className="bi bi-calendar3"></i> {post.date}
            </span>
            {post.readTime && (
              <span>
                <i className="bi bi-clock"></i> {post.readTime}
              </span>
            )}
          </div>

          <img className="w-full rounded mb-6" src={post.image} alt={post.title} />

          <p className="text-lg font-medium border-e-4 border-safelight pe-4 mb-6 leading-8">
            {post.excerpt}
          </p>

          {paragraphs.map((text, index) => (
            <p className="text-inksoft leading-9 mb-4" key={index}>
              {text}
            </p>
          ))}

          {/* الوسوم */}
          <div className="flex items-center gap-3 flex-wrap mt-7 pt-5 border-t border-line">
            <i className="bi bi-tag-fill text-safelight"></i>
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-safelight/15 text-safelight text-sm font-semibold px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* المشاركة */}
          <div className="flex items-center justify-between flex-wrap gap-3 mt-5">
            <span className="font-bold">شارك المقال</span>

            <div className="flex gap-2">
              <button
                onClick={handleCopyLink}
                title="نسخ الرابط"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:border-safelight hover:text-safelight"
              >
                <i className="bi bi-link-45deg"></i>
              </button>

              <a
                href={
                  "https://wa.me/?text=" +
                  encodeURIComponent(post.title + " - " + window.location.href)
                }
                target="_blank"
                rel="noreferrer"
                title="واتساب"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:border-safelight hover:text-safelight"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href={
                  "https://www.linkedin.com/sharing/share-offsite/?url=" +
                  encodeURIComponent(window.location.href)
                }
                target="_blank"
                rel="noreferrer"
                title="لينكدإن"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:border-safelight hover:text-safelight"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href={
                  "https://twitter.com/intent/tweet?text=" +
                  encodeURIComponent(post.title) +
                  "&url=" +
                  encodeURIComponent(window.location.href)
                }
                target="_blank"
                rel="noreferrer"
                title="إكس"
                className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-inksoft hover:border-safelight hover:text-safelight"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>
          </div>

          {/* كارت الكاتب */}
          <div className="flex items-center gap-4 bg-surface border border-line rounded-md p-5 mt-6">
            <div className="w-14 h-14 rounded-full bg-surface text-safelight text-2xl flex items-center justify-center flex-shrink-0">
              <i className="bi bi-person-fill"></i>
            </div>
            <div>
              <span className="block text-muted text-sm">كاتب المقال</span>
              <h3 className="font-bold">{post.author}</h3>
              <p className="text-muted text-sm mb-0">كاتب في عدسة</p>
            </div>
          </div>
        </article>

        {/* الشريط الجانبي */}
        <aside className="w-full lg:w-72 flex-shrink-0 lg:sticky lg:top-24 space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 bg-surface border border-line rounded-md p-4 text-center">
              <i className="bi bi-calendar3 text-safelight block mb-1"></i>
              <strong className="block">{post.date}</strong>
              <span className="text-muted text-xs">تاريخ النشر</span>
            </div>
            <div className="flex-1 bg-surface border border-line rounded-md p-4 text-center">
              <i className="bi bi-clock text-safelight block mb-1"></i>
              <strong className="block">{post.readTime}</strong>
              <span className="text-muted text-xs">وقت القراءة</span>
            </div>
          </div>

          <div className="bg-surface border border-line text-white rounded-md p-6 text-center">
            <i className="bi bi-envelope-fill text-safelight text-2xl block mb-3"></i>
            <p className="font-bold mb-2">لا تفوّت جديدنا</p>
            <p className="text-gray-300 text-sm mb-4">
              اشترك للحصول على أحدث المقالات.
            </p>
            <Link
              className="block bg-safelight text-white font-bold py-2.5 rounded"
              to="/blog"
            >
              تصفح المزيد
            </Link>
          </div>
        </aside>
      </div>

      {relatedPosts.length > 0 && (
        <div className="mt-14">
          <h2 className="text-2xl font-black mb-6">مقالات قد تعجبك</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((item) => (
              <PostCard key={item.id} post={item} view="grid" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
