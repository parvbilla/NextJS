function Modal({ doctor, closeModal }) {
    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">

            <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">

                <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
                    🩺 Doctor Details
                </h1>

                <div className="space-y-5">

                    <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Doctor ID
                        </span>
                        <span className="text-slate-900 font-bold">
                            {doctor.id}
                        </span>
                    </div>

                    <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Name
                        </span>
                        <span className="text-slate-900 font-bold">
                            {doctor.name}
                        </span>
                    </div>

                    <div className="flex justify-between items-center border-b pb-3">
                        <span className="font-semibold text-gray-600">
                            Department
                        </span>
                        <span className="text-slate-900 font-bold">
                            {doctor.part}
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-600">
                            Hospital
                        </span>
                        <span className="text-slate-900 font-bold">
                            {doctor.hospitalName}
                        </span>
                    </div>

                </div>

                <button
                    onClick={closeModal}
                    className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-500/40 transition-all duration-300"
                >
                    Close
                </button>

            </div>

        </div>
    );
}

export default Modal;