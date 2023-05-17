import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const WORKOUTS = 'workouts';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    console.log(localStorage.getItem(WORKOUTS));
  },[]);

  const workouts = useMemo(() => {
    // Hydration issue. mounted 된 후에 localStorage에 접근해야 함.
    if(!mounted) return null;

    // 그냥 내 컨벤션: 소스 코드 외의 통제 불가능 영역 경우만, try catch 사용.
    try {
      const strWorkouts = localStorage.getItem(WORKOUTS);
      if(!strWorkouts) return null;

      const parsedWorkouts = JSON.parse(strWorkouts) as string[];

      return parsedWorkouts;
    } catch (error) {
      return null;
    }
  },[mounted]); // Dependency 잊지 마세요..

  return (
    <main>
      <div>
        목록 페이지
      </div>
      <Link href={'/workout/create'}>
        운동 등록
      </Link>
      <ul>
      {workouts && workouts.map((workout, index) => (
        <li key={index}>
          {workout}
        </li>
        ))}
        </ul>
    </main>
  )
}
