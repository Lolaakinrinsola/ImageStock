import { create } from "zustand";
import FirebaseAuth from "./auth";
import { toast } from "react-toastify";

const { signIn, signOut, getCurrentUser } = FirebaseAuth;
const useAuth = create((set) => ({
  currentUser: null,
  logIn: () => {
    signIn().then((user) => {
      set(() => ({
        currentUser: user,
      }));
      toast.success("User logged in successfully!");
    });
  },
  logOut: () =>
    signOut().then(
      () =>
        set(() => ({
          currentUser: null,
        })),
      toast.success("User logged out successfully!")
    ),
  getUser: () => {
    getCurrentUser().then((user) => {
      set(() => ({
        currentUser: user,
      }));
    });
  },
}));

export default useAuth;
