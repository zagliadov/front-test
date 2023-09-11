"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return (
    <div>
      <h1 className="text-gray-700">Oops!!! {error.message}</h1>
    </div>
  );
}
