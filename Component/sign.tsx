import AuthForm from "./authform";

export default function Sign() {

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap items-center justify-center">
                    <div className="w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-medium text-3xl text-gray-900 text-center">{`TreeOfSaviorM : BossTimer`}</h1>
                        <p className="leading-relaxed mt-4 text-center">라이마</p>
                    </div>
                    <AuthForm />
                    
                </div>
            </section>
        </div>
    )
}
