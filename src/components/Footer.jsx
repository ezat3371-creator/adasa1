import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const exploreLinks = [
    { to: "/", label: "الرئيسية" },
    { to: "/blog", label: "المدونة" },
    { to: "/about", label: "من نحن" },
  ];

  const categoryLinks = ["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"];

  const socials = [
    { icon: "bi-twitter-x", href: "https://twitter.com" },
    { icon: "bi-github", href: "https://github.com" },
    { icon: "bi-linkedin", href: "https://linkedin.com" },
    { icon: "bi-youtube", href: "https://youtube.com" },
  ];

  function handleSubscribe(event) {
    event.preventDefault();
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="bg-ink text-neutral-300 border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* الشعار والوصف */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-safelight to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">ع</span>
              </div>
              <span className="text-xl font-bold text-white">عدسة</span>
            </Link>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 bg-surface border border-line hover:bg-gradient-to-br hover:from-safelight hover:to-orange-600 hover:border-transparent rounded-xl flex items-center justify-center text-muted hover:text-white transition-all"
                >
                  <i className={"bi " + social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* استكشف */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-safelight to-orange-400 rounded-full"></span>
              استكشف
            </h3>
            <ul className="space-y-4">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted hover:text-safelight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* التصنيفات */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-safelight to-orange-400 rounded-full"></span>
              التصنيفات
            </h3>
            <ul className="space-y-4">
              {categoryLinks.map((category) => (
                <li key={category}>
                  <Link
                    to={"/blog?category=" + category}
                    className="text-sm text-muted hover:text-safelight transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* النشرة البريدية */}
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-safelight to-orange-400 rounded-full"></span>
              ابقى على اطلاع
            </h3>
            <p className="text-sm text-muted mb-4">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>

            {subscribed ? (
              <p className="text-safelight text-sm font-bold">تم الاشتراك!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-surface border border-line rounded-xl text-sm text-white placeholder-muted focus:outline-none focus:border-safelight"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-gradient-to-r from-safelight to-orange-600 text-white text-sm font-semibold rounded-xl"
                >
                  اشترك
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              © 2026 عدسة. صنع بكل <i className="bi bi-heart-fill text-safelight"></i> جميع
              الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
