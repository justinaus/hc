import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function WorkoutCreate() {
  const [workoutValue, setWorkoutValue] = useState('');

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setWorkoutValue(e.target.value);
  }

  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    alert(workoutValue);
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