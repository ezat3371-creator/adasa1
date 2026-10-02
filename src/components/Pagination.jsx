// بياخد رقم الصفحة الحالية وعدد الصفحات
// و function جاية من الأب عشان يغير الصفحة (Function as prop)
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) {
    return null;
  }

  // بنعمل array فيها أرقام الصفحات: [1, 2, 3, ...]
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center mt-12">
      <ul className="flex items-center gap-1">
        <li>
          <button
            className="px-3 py-2 rounded border border-line bg-surface text-white font-bold disabled:opacity-40"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            السابق
          </button>
        </li>

        {pages.map((page) => (
          <li key={page}>
            <button
              className={
                "px-3 py-2 mx-1 rounded border font-bold " +
                (page === currentPage
                  ? "bg-safelight border-safelight text-white"
                  : "border-line bg-surface text-white")
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            className="px-3 py-2 rounded border border-line bg-surface text-white font-bold disabled:opacity-40"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            التالي
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
