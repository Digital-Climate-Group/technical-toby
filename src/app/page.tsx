"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { userLogin } from "@/lib/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Button } from "@/components/ui/Button";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mydb } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const checkUser = (_email: string, _password: string) => {
    const dbuser = mydb.find((user) => user.user?.email === _email);
    if (!dbuser || dbuser.password !== _password) {
      return false;
    }
    return true;
  };

  const checkPassword = (_password: string) => {
    if (_password.length < 6) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkPassword(password)) {
      console.log("bad password");
      return;
    }
    if (!checkUser(email, password)) {
      console.log("bad login");
      return;
    }

    dispatch(userLogin(email));
    console.log("good login");
  };

  return (
    <section className="w-screen h-screen bg-[#0F172A] text-white">
      <div className="grid grid-cols-2 gap-3 bg-slate-950 h-full">
        <div className="relative px-20 py-5 bg-slate-950 rounded-xl outline outline-1 flex-col justify-center items-center overflow-hidden">
          <h1>Welcome back to DCG</h1>
          <p>Enter your details below to login to your DCGx account</p>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <Input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <div className="flex justify-between">
                <p>Password</p>
                <p>Forgot your password?</p>
              </div>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              variant="outline"
              className="text-black w-full"
            >
              Login
            </Button>
          </form>
        </div>
        <div>Img</div>
      </div>
    </section>
  );
}
