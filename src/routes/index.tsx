import UserPlaylists from "@/components/UserPlaylists";
import UserProfile from "@/components/UserProfile";

export default function Home() {
  return (
    <main class="flex h-full w-full justify-between space-x-10 bg-ctp-crust p-8 text-ctp-text">
      <UserProfile />
      <div class="mb-16 flex h-fit w-8/12 flex-col space-y-10">
        <UserPlaylists />
      </div>
    </main>
  );
}
