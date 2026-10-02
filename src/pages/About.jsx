import { Link } from "react-router-dom";

// قيمنا: محتوى ثابت مش مبني على الداتا
const values = [
  {
    icon: "bi-arrow-repeat",
    title: "دائمًا محدث",
    text: "أحدث الاتجاهات وأفضل الممارسات",
  },
  {
    icon: "bi-people-fill",
    title: "المجتمع",
    text: "تعلم مع آلاف المصورين",
  },
  {
    icon: "bi-lightning-fill",
    title: "تركيز عملي",
    text: "أمثلة واقعية يمكنك تطبيقها اليوم",
  },
  {
    icon: "bi-bullseye",
    title: "الجودة أولًا",
    text: "محتوى مدروس ومكتوب بخبرة",
  },
];

function About({ posts }) {
  // فريق الكتّاب: بنجمعه من أسماء المؤلفين الحقيقية في الداتا (من غير تكرار)
  const authors = [];

  posts.forEach((post) => {
    if (!authors.find((item) => item.name === post.author)) {
      authors.push({ name: post.author });
    }
  });

  // تصنيفات مختلفة من غير تكرار
  const categories = [];
  posts.forEach((post) => {
    if (!categories.includes(post.category)) {
      categories.push(post.category);
    }
  });

  return (
    <div>
      {/* الهيرو */}
      <section className="bg-ink text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <span className="inline-flex items-center gap-2 bg-safelight/15 text-safelight font-bold text-sm px-5 py-1.5 rounded-full mb-6">
            <i className="bi bi-circle-fill text-[0.5rem]"></i> من نحن
          </span>

          <h1 className="text-3xl md:text-5xl font-black max-w-2xl mx-auto mb-5">
            مهمتنا هي <span className="text-safelight">الإعلام</span> والإلهام
          </h1>

          <p className="text-gray-300 max-w-xl mx-auto text-lg mb-10">
            عدسة مدونة متخصصة في فن التصوير الفوتوغرافي، بنشارك معكم أسرار
            المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg py-5 px-2 text-center">
              <i className="bi bi-folder text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{categories.length}</h3>
              <p className="text-gray-300 text-sm">تصنيف</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg py-5 px-2 text-center">
              <i className="bi bi-pencil text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{authors.length}</h3>
              <p className="text-gray-300 text-sm">كاتب خبير</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg py-5 px-2 text-center">
              <i className="bi bi-journal-text text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">{posts.length}+</h3>
              <p className="text-gray-300 text-sm">مقالة منشورة</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg py-5 px-2 text-center">
              <i className="bi bi-people text-safelight text-xl block mb-2"></i>
              <h3 className="text-2xl font-black">10 آلاف+</h3>
              <p className="text-gray-300 text-sm">قارئ شهريًا</p>
            </div>
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="container mx-auto px-4 py-14 text-center">
        <span className="text-safelight font-bold text-sm block mb-2">
          قيمنا
        </span>
        <h2 className="text-2xl font-black mb-8">
          المبادئ اللي بتوجه كل حاجة بنعملها
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-surface border border-line rounded-lg p-6 text-center"
            >
              <i
                className={"bi text-2xl text-safelight block mb-3 " + value.icon}
              ></i>
              <h4 className="font-bold mb-1">{value.title}</h4>
              <p className="text-muted text-sm">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* فريق الكتّاب */}
      <section className="container mx-auto px-4 py-14 text-center">
        <span className="text-safelight font-bold text-sm block mb-2">
          فريقنا
        </span>
        <h2 className="text-2xl font-black mb-2">تعرف على كتّابنا</h2>
        <p className="text-muted mb-8">
          فريقنا من المصورين والكتّاب بيشاركوا خبراتهم مع المجتمع.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {authors.map((author) => (
            <div
              key={author.name}
              className="bg-surface border border-line rounded-lg p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-surface text-safelight text-2xl flex items-center justify-center mx-auto mb-3">
                <i className="bi bi-person-fill"></i>
              </div>
              <h5 className="font-bold mb-1">{author.name}</h5>
              <p className="text-muted text-sm">كاتب في عدسة</p>
            </div>
          ))}
        </div>
      </section>

      {/* دعوة للتواصل */}
      <section className="container mx-auto px-4 py-14">
        <div className="bg-gradient-to-l from-safelight to-orange-400 text-white rounded-xl py-12 px-6 text-center">
          <h3 className="text-2xl font-black mb-2">لديك أسئلة؟ دعنا نتحدث!</h3>
          <p className="max-w-lg mx-auto mb-6">
            نحب أن نسمع منك، سواء كان لديك سؤال حول محتوانا، أو تريد
            المساهمة، أو تريد إلقاء التحية.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              className="border border-white text-white font-bold px-7 py-2.5 rounded"
              to="/blog"
            >
              تصفح المقالات
            </Link>
            <a
              className="bg-white text-safelight font-bold px-7 py-2.5 rounded"
              href="mailto:hello@adasa.example"
            >
              <i className="bi bi-envelope"></i> تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
