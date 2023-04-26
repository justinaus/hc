import Link from "next/link";

export default function WorkoutCreate() {
  return (
    <main>
      <div>
        운동 등록 페이지
      </div>
      <Link href={'/'}>
        운동 목록 보기
      </Link>
    </main>
  )
}