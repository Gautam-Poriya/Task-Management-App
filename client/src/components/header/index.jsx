import React from "react";
import { Link } from "react-router-dom";
import { LogOut } from "lucide-react";
import { callLogOutApi } from "@/services";
import { useContext } from "react";
import { TaskManagerContext } from "@/context";
import { useNavigate } from "react-router-dom";
function Header() {
  const { setUser } = useContext(TaskManagerContext);
  const navigate = useNavigate();
  async function handlelogout() {
    const response = await callLogOutApi();
    if (response?.success) {
      setUser(null);
      navigate('/auth')
    }
  }
  return (
    <>
      <header className="border-b border-gray-200">
        <div className="container mx-auto h-16">
          <div className="flex h-[64px] items-center w-full justify-between">
            <div className="w-auto">
              <h1>Task Manager</h1>
            </div>

            <div className="flex gap-4">
              <Link to={"/tasks/list"} className="text-black text-xl font-bold">
                Tasks
              </Link>
              <Link
                to={"/tasks/scrum-board"}
                className="text-black text-xl font-bold"
              >
                Scrum Board
              </Link>
            </div>
            <div>
              <LogOut
                color="#000"
                onClick={handlelogout}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
