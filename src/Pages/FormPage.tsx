import FormNewUser from '../Components/FormNewUser';

export default function FormPage() {
  return (
    <div className=" bg-[#121212] h-screen w-screen text-[#2f9e44] flex flex-col items-center justify-center gap-1">
      <header className=" w-full h-32 border-b border-[#2f9e44] flex justify-center items-center">
        <h1 className=" text-6xl">Semana de tech Facimp</h1>
      </header>
      <main className=" w h-[600px] flex flex-col items-center justify-start">
        <section className=" flex flex-col gap-5">
          <h2 className=" text-3xl text-center pt-10">Crie sua conta</h2>
          <FormNewUser/>
        </section>
      </main>
    </div>
  );
}