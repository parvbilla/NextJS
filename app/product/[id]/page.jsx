import { notFound } from "next/navigation";

async function Product({ params }) {
  const products = [
    { id: 1, name: "laptop" },
    { id: 2, name: "mobile" },
  ];

  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) return notFound();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 p-8 text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-wide">
              🛍️ Product Page
            </h1>
            <p className="text-cyan-100 mt-2">
              Product Details
            </p>
          </div>

          {/* Body */}
          <div className="p-10 space-y-8">

            <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300">
              <span className="text-gray-400 font-medium text-lg">
                Product ID
              </span>

              <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-lg border border-cyan-500/30">
                #{id}
              </span>
            </div>

            <div className="flex items-center justify-between bg-slate-800/60 border border-slate-700 rounded-2xl p-6 hover:border-purple-400 transition-all duration-300">
              <span className="text-gray-400 font-medium text-lg">
                Product Name
              </span>

              <span className="px-5 py-2 rounded-full bg-purple-500/20 text-purple-300 font-bold text-lg border border-purple-500/30 capitalize">
                {product.name}
              </span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Product;