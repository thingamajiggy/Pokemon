import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="hero min-h-screen bg-yellow-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome to Pokemon World!</h1>
            <p className="py-6">
              Gotta Catch `Em All! Do you want to check which Pokemon has the
              best abilities and stats? Check them out now!
            </p>
            <button className="btn btn-warning">
              <Link href="/list">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
