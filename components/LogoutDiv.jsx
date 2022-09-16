import { useAuthContext } from "../context/authContext";
import Link from 'next/link'

function LogoutDiv() {
  const { isAuthenticated } = useAuthContext();
  return (
    <>
      {isAuthenticated && (
        <div className="h-8 flex items-center text-lg bg-indigo-600 rounded-xl px-4 text-white hover:bg-indigo-800 transition-all">
          <Link href="/logout">Log Out</Link>
        </div>
      )}
    </>
  );
}

export default LogoutDiv;
