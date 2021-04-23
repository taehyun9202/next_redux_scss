import Head from "next/head";
import AdminSidebar from "../components/AdminSidebar";
function admin() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <AdminSidebar />
        <h1>From admin page</h1>
      </div>
    </div>
  );
}

export default admin;
