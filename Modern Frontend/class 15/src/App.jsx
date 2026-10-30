import React, { useState } from "react";
import Card from "./components/card";
import Child1 from "./components/child1";
import Child2 from "./components/child2";
import Child3 from "./components/child3";

import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(/^\S+@\S+\.\S+$/, "Invalid email"),
  password: z.string().min(6, "min 6 char").max(16, "max 16 char"),
});

const App = () => {
  // const [name, setName] = useState("Jaffar Aman");

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {},
  // });

  // console.log("errors", errors);

  // const loginHandler = (obj) => {
  //   console.log("obj", obj);
  // };

  // const resetValues = () => {
  //   reset();
  // };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const loginHandler = (obj) => {
    console.log("loginHandler", obj);
  };

  console.log("errors", errors);

  return (
    // <div>
    //   <Card title={"Jaffar"} children={<Header/>} />

    //   <Card title={"Aman"}>
    //     {/* <h1>HELLO WORLD</h1>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
    //       soluta.
    //     </p> */}
    //     <Header />
    //   </Card>
    // </div>
    <>
      {/* <Child1 name={name} />

      <button onClick={() => setName("muhammad sufiyan")}> CLICK</button> */}

      {/* <form onSubmit={handleSubmit(loginHandler)}>
        <input
          type="text"
          placeholder="enter your name"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
        <small style={{ color: "red" }}> {errors?.fullName?.message} </small>

        <input
          type="text"
          placeholder="enter your name"
          {...register("email", {
            required: "email is required",
          })}
        />
        <input
          type="text"
          placeholder="Enter your password"
          {...register("password", {
            maxLength: { value: 16, message: "MAX 16 characters" },
          })}
        />
        <button>Login</button>
        <button type="button" onClick={resetValues}>
          RESET VALUE
        </button>
      </form> */}

      <form onSubmit={handleSubmit(loginHandler)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              {...field}
            />
          )}
        />

        <br />
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState, formState }) => {
            // console.log("formState", formState.errors);
            return (
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                error={formState?.errors?.password}
                helperText={formState?.errors?.password?.message}
                {...field}
              />
            );
          }}
        />

        <br />

        <button>Login</button>
      </form>
    </>
  );
};

const Header = () => {
  return <h1>HEADER</h1>;
};

export default App;



// https://blog.logrocket.com/using-material-ui-with-react-hook-form/