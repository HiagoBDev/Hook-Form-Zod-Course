import { CgProfile } from "react-icons/cg";
import { FaRegAddressCard } from "react-icons/fa";
import { TbLock, TbLockCheck } from "react-icons/tb";
import InputFormNewUser from "./InputFormNewUser";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export default function FormNewUser() {

  const newUserSchema = z.object({
    nome: z.string().min(2, 'Nome inválido'),
    cpf: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, 'CPF inválido'),
    senha: z.string().min(8, 'A senha deve conter no mínimo 8 caracteres').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/, 'A senha deve conter uma caractere especial, uma letra minuscula, uma maiuscula, e um numero'),
    confirmar: z.string()
  }).refine((fields) => fields.senha === fields.confirmar,{
    path: ["confirmar"],
    message: "As senhas deve sem iguais"
  })

  type newUserSchema = z.infer<typeof newUserSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<newUserSchema>({
    resolver: zodResolver(newUserSchema)
  });

  function handleNewUser(data: newUserSchema) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleNewUser)}
      className=" w-[350px] flex flex-col gap-5"
    >
      <section className=" flex flex-col gap-5">
        <p>Dados basicos</p>
        <InputFormNewUser 
        placeholder="Nome" 
        type="text" 
        icon={CgProfile} 
        register={register('nome')}
        errorMessage={errors?.nome?.message}
        />
        <InputFormNewUser
          placeholder="CPF"
          type="text"
          icon={FaRegAddressCard}
          register={register('cpf')}
          errorMessage={errors?.cpf?.message}
        />
      </section>
      <section className=" flex flex-col gap-5">
        <p>Segurança</p>
        <InputFormNewUser 
        placeholder="senha" 
        type="password" 
        icon={TbLock} 
        register={register('senha')}
        errorMessage={errors?.senha?.message}
        />
        <InputFormNewUser
          placeholder="Confirmar senha"
          type="password"
          icon={TbLockCheck}
          register={register('confirmar')}
          errorMessage={errors?.confirmar?.message}
        />
      </section>
      <button
        type="submit"
        className=" w-full bg-emerald-500 text-white h-10 rounded-lg"
      >
        Cadastrar
      </button>
    </form>
  );
}
