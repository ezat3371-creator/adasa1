import { Link } from "react-router-dom";

// الكومبوننت بياخد التدوينة + شكل العرض (grid / list) عن طريق props
function PostCard({ post, view }) {
  if (view === "list") {
    return (
      <div className="flex flex-col md:flex-row bg-surface border border-line rounded-md overflow-hidden">
        <img
          className="w-full md:w-72 h-52 md:h-auto object-cover flex-shrink-0"
          src={post.image}
          alt={post.title}
        />

        <div className="p-5 flex flex-col flex-grow">
          <span className="self-start bg-safelight/10 text-safelight text-xs font-semibold px-3 py-1 rounded-full border border-safelight/20 mb-2">
            {post.category}
          </span>

          <h3 className="text-xl font-bold leading-8 mb-2">{post.title}</h3>
          <p className="text-inksoft text-[0.97rem] leading-8 flex-grow">
            {post.excerpt}
          </p>

          <div className="flex gap-4 text-muted text-sm my-3">
            <span>
              <i className="bi bi-person"></i> {post.author}
            </span>
            <span>
              <i className="bi bi-calendar3"></i> {post.date}
            </span>
          </div>

          <Link
            className="self-start text-safelight font-bold hover:underline"
            to={"/blog/" + post.id}
          >
            اقرأ التدوينة
          </Link>
        </div>
      </div>
    );
  }

  // الشكل الافتراضي: Grid
  return (
    <div className="bg-surface border border-line rounded-md overflow-hidden h-full flex flex-col">
      <img className="w-full h-52 object-cover" src={post.image} alt={post.title} />

      <div className="p-5 flex flex-col flex-grow">
        <span className="self-start bg-safelight/10 text-safelight text-xs font-semibold px-3 py-1 rounded-full border border-safelight/20 mb-2">
          {post.category}
        </span>

        <h3 className="text-xl font-bold leading-8 mb-2">{post.title}</h3>
        <p className="text-inksoft text-[0.97rem] leading-8 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex gap-4 text-muted text-sm my-3">
          <span>
            <i className="bi bi-person"></i> {post.author}
          </span>
          <span>
            <i className="bi bi-calendar3"></i> {post.date}
          </span>
        </div>

        <Link
          className="self-start text-safelight font-bold hover:underline"
          to={"/blog/" + post.id}
        >
          اقرأ التدوينة
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
