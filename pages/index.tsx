import Link from "next/link";
import { useEffect } from "react";

const WORKOUTS = 'workouts';

export default function Home() {
  useEffect(() => {
    console.log(localStorage.getItem(WORKOUTS));
  },[]);

  return (
    <main>
      <div>
        목록 페이지
      </div>
      <Link href={'/workout/create'}>
        운동 등록
      </Link>
    </main>
  )
}
