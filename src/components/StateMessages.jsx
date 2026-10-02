// كومبوننت صغير لحالة التحميل
export function Loading() {
  return (
    <div className="text-center border border-dashed border-line bg-surface rounded-lg py-14 px-5 text-inksoft">
      <div className="w-10 h-10 border-4 border-safelight border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-3 mb-0">بنحمّل التدوينات...</p>
    </div>
  );
}

// كومبوننت صغير لحالة الخطأ
export function ErrorMessage({ message }) {
  return (
    <div className="text-center border border-dashed border-line bg-surface rounded-lg py-14 px-5 text-inksoft">
      <i className="bi bi-exclamation-triangle text-safelight text-3xl"></i>
      <p className="mt-3 mb-0">{message}</p>
    </div>
  );
}
