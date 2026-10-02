# عدسة | مدونة تصوير فوتوغرافي (React + Vite)

كل ملفات الـ React مكتوبة بامتداد `.jsx`.

## التشغيل

```bash
npm install
npm run dev
```

## بنية المشروع

```
index.html            نقطة البداية (Bootstrap RTL + Icons + خط Tajawal)
vite.config.js
public/
  data/posts.json     ملف الداتا (بيتقري بـ fetch من /data/posts.json)
src/
  main.jsx            نقطة تشغيل React
  App.jsx             الراوتر + تحميل الداتا (useEffect) + تمريرها بالـ props
  App.css
  components/
    Navbar.jsx
    Footer.jsx
    PostCard.jsx       كارت التدوينة (Grid أو List حسب prop اسمه view)
    Pagination.jsx     أرقام الصفحات (بياخد function من الأب)
    StateMessages.jsx  Loading + ErrorMessage
  pages/
    Home.jsx
    Blog.jsx           البحث + الفلترة + تغيير العرض + الـ Pagination
    BlogDetails.jsx    useParams عشان يجيب الـ id من الرابط
    About.jsx          (بونص)
    NotFound.jsx       صفحة 404
```

## ملف الداتا

الكود بيقرا `public/data/posts.json`. حط ملف الداتا بتاعك مكانه بنفس الاسم.

الشكل المتوقع (Array جوه `posts`، أو Array على طول):

```json
{
  "posts": [
    {
      "id": 1,
      "title": "عنوان التدوينة",
      "category": "التصنيف",
      "author": "اسم الكاتب",
      "date": "2024-03-02",
      "readTime": "6 دقائق",
      "image": "رابط الصورة",
      "excerpt": "مقدمة قصيرة",
      "content": "النص الكامل، والفقرات مفصولة بسطر فاضي"
    }
  ]
}
```

لو أسماء الحقول مختلفة عندك، غيّرها في `PostCard.jsx` و `BlogDetails.jsx` بس.

## الراوتس

| الرابط      | الصفحة        |
| ----------- | ------------- |
| `/`         | Home          |
| `/blog`     | Blog          |
| `/blog/:id` | Blog Details  |
| `/about`    | من نحن (بونص) |
| `*`         | 404           |

## المفاهيم المستخدمة

Components / JSX / Bootstrap، Props، `map()`، `useState`، Lifting State Up،
Functions as props، `key`، `filter()`، `react-router-dom`، `useEffect` مع
Loading و Error UI. مفيش Redux ولا Context ولا أي hook تاني.
