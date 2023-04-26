import Link from "next/link";
import { FormEvent } from "react";

export default function WorkoutCreate() {
  function handleSubmit(e:FormEvent<HTMLFormElement>) {
    // e.preventDefault();
    alert((e.target as any).name.value);
  }

  return (
    <main>
      <div>
        운동 등록 페이지
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          부위:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link href={'/'}>
        운동 목록 보기
      </Link>
    </main>
  )
}