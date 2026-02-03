import { useState } from "react";

//form
//submit and show data

function Body() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [password, setPassword] = useState("");
  let [submitedData, setSubmitedData] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const submitData = (e) => {
    console.log("submitting");
    setIsLoading(true);
    e.preventDefault();
    let data = {
      name,
      email,
      phone,
      password,
    };
    setTimeout(() => {
      alert(JSON.stringify(data));
      setIsLoading(false);
    }, 5000);

    // console.log(data);
  };

  const handleChanges = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "name") setName(value);
    else if (name == "email") setEmail(value);
    else if (name == "phone") setPhone(value);
    else if (name == "password") setPassword(value);

    return "";
  };
  // console.log(name)

  return (
    <div className="min-h-screen">
      <form
        onSubmit={submitData}
        className="p-10 flex flex-col max-w-[60%] gap-2"
      >
        <div className="w-full">
          <label>name</label>
          <input
            className="border w-full"
            type="text"
            name="name"
            value={name}
            onChange={handleChanges}
          ></input>
        </div>
        <div>
          <label>email</label>
          <input
            className="border w-full"
            required={true}
            type="email"
            name="email"
            value={email}
            onChange={handleChanges}
          ></input>
        </div>
        <div>
          <label>phone</label>
          <input
            className="border w-full"
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChanges}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            className="border w-full"
            type="password"
            name="password"
            value={password}
            onChange={handleChanges}
          ></input>
        </div>

        <button disabled={isLoading} type="submit" className="py-2 bg-blue-500">
          {isLoading ? "please wait..." : "submit"}
        </button>
      </form>
    </div>
  );
}

export default Body;
