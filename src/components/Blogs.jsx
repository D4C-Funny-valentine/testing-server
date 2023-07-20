import { useGetDataQuery } from "../auth/service/data";
import Card from "./Card";


const Blogs = () => {
  const { data: blogs } = useGetDataQuery();
  return (
    <div className="flex gap-2 justify-center h-screen items-center flex-wrap">
      {blogs?.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Blogs;
