import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSeecure from "./useAxiosSeecure";

const useCart = () => {
  const { user, loading } = useAuth()
  console.log(user);
  const [axiosSecure] = useAxiosSeecure();

  const { refetch, data: cart = [] } = useQuery({
    enabled: !loading && !! user?.email,
    queryKey: ["carts", user?.email],
    // queryFn: () =>
    //   fetch(`http://localhost:5000/carts?email=${user?.email}`,{
    //     headers: {authorization: `bearer ${localStorage.getItem('bistro-access-token')}`}
    //   }).then((res) =>
    //     res.json()
    //   ),
    queryFn: async() => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      console.log("res from axios", res);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
