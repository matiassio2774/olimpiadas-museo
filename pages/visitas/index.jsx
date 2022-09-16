import { useEffect } from "react";
import VisitCard from "../../components/VisitCard";
import { useAuthContext } from "../../context/authContext";
import { useRouter } from "next/router";
import axios from "axios";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicButton = dynamic(() => import("../../components/AddVButton"), {
  ssr: false,
});

function Index({ visits }) {
  const { isAuthenticated } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    !isAuthenticated && router.push("/login");
  }, []);
  console.log(visits);
  return (
    <div className="my-20 bg-slate-100">
      <h1 className="text-center font-medium text-4xl">Visitas disponibles</h1>
      <Suspense fallback={`Loading...`}>
        <DynamicButton />
      </Suspense>
      <div className="max-w-xs py-14 mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 md:max-w-4xl ">
        {visits.map((visita, index) => (
          <VisitCard key={index} id={visita.id_visita} data={visits[index]} />
        ))}
      </div>
    </div>
  );
}

export default Index;

export async function getStaticProps(context) {
  const _URL = "http://localhost:3000/api/visitas";

  const { data } = await axios.get(_URL);
  console.log(data);

  const visits = data;
  return {
    props: {
      visits,
    },
  };
}
