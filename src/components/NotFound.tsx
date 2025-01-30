const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600">Page Not Found</p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Go to Home
      </a>
    </div>
  );
};

export default NotFound;
