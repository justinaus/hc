import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function WorkoutCreate() {
  const [workoutValue, setWorkoutValue] = useState('');

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setWorkoutValue(e.target.value);
  }

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const WORKOUTS = 'workouts';
    
    const workouts = localStorage.getItem(WORKOUTS);

    if(!workouts) {
      localStorage.setItem(WORKOUTS, JSON.stringify([workoutValue]));

      console.log('localStorage', localStorage.getItem(WORKOUTS));

      return;
    }

    // 그냥 내 컨벤션: 소스 코드 외의 통제 불가능 영역 경우만, try catch 사용.
    try {
      const parsedWorkouts = JSON.parse(workouts) as string[];

      const merged = [...parsedWorkouts, workoutValue];

      localStorage.setItem(WORKOUTS, JSON.stringify(merged));

      console.log('localStorage', localStorage.getItem(WORKOUTS));
    } catch (error) {
      alert('error!');
    }
  }

  return (
    <main>
      <div>
        운동 등록 페이지
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          부위:
          <input type="text" name="name" value={workoutValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link href={'/'}>
        운동 목록 보기
      </Link>
    </main>
  )
}