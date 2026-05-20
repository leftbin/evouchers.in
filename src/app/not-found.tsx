import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-md">
      <h1 className="text-display-lg text-white">Page Not Found</h1>
      <p className="text-body-lg text-on-surface-variant mt-sm max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block mt-xl px-xl py-sm rounded-full bg-primary text-on-primary font-semibold hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </section>
  );
}
