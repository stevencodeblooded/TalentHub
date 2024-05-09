const Account = () => {
  return (
    <div className="my-32">
        <section className="max-w-2xl mx-auto px-3">
            <div>
                <form className="flex flex-col gap-3">
                    <input type="text" name="" placeholder="Teddy B" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <input type="email" name="" placeholder="teddy@tedy.com" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <input type="password" name="" placeholder="**********" className="p-2 text-sm font-semibold border border-green-300 focus:outline-none rounded-md" />
                    <div className="w-full flex items-center justify-between gap-3">
                        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-all py-3 rounded-3xl w-fit px-8 text-white font-semibold text-sm">Update Profile</button>
                        <form>
                            <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 transition-all py-3 rounded-3xl w-fit px-8 text-white font-semibold text-sm">Logout</button>
                        </form>
                    </div>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Account