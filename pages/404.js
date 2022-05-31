import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h2 className="mb-7">
        <span className="text-light">Ooops. </span>
        <span className="text-main">Page Not Found!</span>
      </h2>

      <p className="mb-8 w-96 text-center mx-auto">
        The page you are looking for doesnt exist. Looks like you are in the
        wrong place. Let us guide you back!
      </p>

      <Link href="/" passHref>
        <span className="button-main cursor-pointer">Go back home</span>
      </Link>
    </div>
  );
}
