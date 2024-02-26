
export default function Calendar() {

    return (
        <div className='h-l space-y-5'>
            <h1 className='text-4xl font-bold text-center px-10'>
                😲 HOY ES {new Date().toLocaleString("es", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} 😲
            </h1>
            <h2 className='text-2xl text-center'>
                Nah que locura de calendario
            </h2>
        </div>
    );
}