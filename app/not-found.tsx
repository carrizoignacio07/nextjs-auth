export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <p className="text-lg text-gray-500">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
