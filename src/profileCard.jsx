function Profile(props) {
    return (
        <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 m-10">

            <div className="h-72 w-full">
                <img
                    src={props.image}
                    alt={props.name}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-7 text-center">

                <h1 className="text-2xl font-bold text-slate-900 mb-3">
                    {props.name}
                </h1>

                <p className="text-mnh text-slate-500 leading-relaxed mb-6">
                    {props.bio}
                </p>

                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-7 py-3 rounded-lg transition-colors duration-300">
                    View Profile
                </button>

            </div>

        </div>
    )
}

export default Profile;