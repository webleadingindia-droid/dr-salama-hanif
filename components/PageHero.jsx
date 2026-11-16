import Link from "next/link";

export default function PageHero({ current, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{current}</li>
          </ol>
        </nav>
        <h1 className="section-title mt-2">{title}</h1>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
    </section>
  );
}
