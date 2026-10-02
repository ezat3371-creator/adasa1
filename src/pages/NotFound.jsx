import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <p className="text-8xl font-black text-safelight leading-none mb-3">
        404
      </p>
      <h1 className="text-3xl font-black mb-3">الصفحة دي مش موجودة</h1>
      <p className="text-muted mb-7">
        يمكن الرابط اتغير أو فيه غلطة في كتابته. تقدر ترجع من هنا.
      </p>
      <div className="flex gap-3 justify-center flex-wrap">
        <Link
          className="bg-safelight text-white font-bold px-7 py-2.5 rounded"
          to="/"
        >
          الصفحة الرئيسية
        </Link>
        <Link
          className="border border-line text-white font-bold px-7 py-2.5 rounded bg-surface"
          to="/blog"
        >
          التدوينات
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
