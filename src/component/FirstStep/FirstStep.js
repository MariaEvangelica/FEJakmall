import { useForm } from "react-hook-form";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function IndexPage() {
  const {
    handleSubmit,
    register,
    formState: { errors, dirtyFields }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      dropshipperName: "",
      phonenumber: ""
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address"
            }
          })}
          placeholder="Email"
          id="email"
          name="email"
          type="email"
          className={`input w-full ${!errors.email && dirtyFields.email && "!bg-green-50"
            }`}
          style={{ marginRight: '100px' }}
        />
        <input {...register("dropshipperName")} placeholder="Dropshipper Name" />
        <br />
        <input {...register("phonenumber")} placeholder="Phone Number" />
      </form>
    </>
  );
}