export default function Loading() {
  return (
    <div className="py-8 px-4 sm:px-20">
      <h1 className="text-5xl text-center">Blogs</h1>
      <section className="blogs-list">
        {[...new Array(10)].map((p, index) => (
          <div key={index} className="blog-card">
            <div className="skeleton-animation w-full h-[200px] rounded-t-3xl"></div>
            <div className="p-3">
              <h1 className="skeleton-animation w-4/5 h-4 m-2 rounded-xl"></h1>
              <p className="skeleton-animation w-11/12 h-3 m-2 rounded-xl"></p>
              <div>
                <p className="skeleton-animation w-1/2 h-3 m-2 rounded-xl"></p>
                <p className="skeleton-animation w-1/2 h-3 m-2 rounded-xl"></p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
